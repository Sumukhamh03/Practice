export async function GET() {
    const profile = {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      bio: "Software engineer passionate about web development and AI.",
      avatar: "https://i.pravatar.cc/150?img=12", // Dummy profile image
      location: "San Francisco, CA",
      website: "https://johndoe.dev",
      joinedAt: "2023-05-15",
      followers: 1200,
      following: 300,
    };
  
    return Response.json(profile);
  }
  