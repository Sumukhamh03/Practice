"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

  const router = useRouter()

  const handleTask1 = () => {
    router.push("/blogs")
  }

  const handleTask2 = () => {
    router.push("/profile")
  }

  const handleTask3 = () => {
    router.push("/todo")
  }
  
    const handleTask4 = () => {
      router.push("/plist")
    }

    const handleTask5 = () => {
      router.push("/cache")
    }

  return (
    <div className='bg-black  h-screen w-screen gap-6 flex-col flex justify-center items-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white font-semibold'>
      <h1 className='text-2xl'>Tasks</h1>
      <div onClick={handleTask1} className='bg-blue-600 py-2 px-4 rounded-lg cursor-pointer'>Task 1</div>
      <div onClick={handleTask2} className='bg-blue-600 py-2 px-4 rounded-lg cursor-pointer'>Task 2</div>
      <div onClick={handleTask3} className='bg-blue-600 py-2 px-4 rounded-lg cursor-pointer'>Task 3</div>
      <div onClick={handleTask4} className='bg-blue-600 py-2 px-4 rounded-lg cursor-pointer'>Task 4</div>
      <div onClick={handleTask5} className='bg-blue-600 py-2 px-4 rounded-lg cursor-pointer'>Task 5</div>

    </div>
  )

}

export default page