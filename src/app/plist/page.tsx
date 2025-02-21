'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', image: "https://cdn.pixabay.com/photo/2020/12/11/11/22/laptop-5822575_1280.png" },
    { id: 2, name: 'Sneakers', category: 'Footwear', image: 'https://example.com/sneakers.jpg' },
    { id: 3, name: 'Headphones', category: 'Electronics', image: 'https://example.com/headphones.jpg' },
    { id: 4, name: 'Backpack', category: 'Accessories', image: 'https://example.com/backpack.jpg' },
    { id: 5, name: 'Smartphone', category: 'Electronics', image: 'https://example.com/smartphone.jpg' },
  ];
  

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isPending, startTransition] = useTransition();

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    startTransition(() => {
      setFilteredProducts(
        category === 'All' ? products : products.filter((p) => p.category === category)
      );
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🛍️ Filterable Product List</h1>

      <div className="flex gap-3 mb-8">
        {['All', 'Electronics', 'Footwear', 'Accessories'].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md ${
              selectedCategory === category
                ? 'bg-white text-indigo-600 shadow-lg scale-105'
                : 'bg-indigo-400 text-white hover:bg-indigo-300 hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {isPending && <p className="text-gray-200">Filtering...</p>}
        {!isPending &&
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                loading="lazy"
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-3 text-gray-900">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page; // ✅ Correct default export
