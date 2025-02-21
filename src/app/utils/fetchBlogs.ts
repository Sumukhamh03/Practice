export async function fetchBlogs() {
    const response = await fetch('http://localhost:3000/api/blogs');
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  }