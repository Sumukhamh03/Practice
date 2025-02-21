import { NextResponse } from "next/server";

const blogs = [
  {
    id: "1",
    username: "tech_guru",
    title: "Introduction to Next.js",
    content: `# Introduction to Next.js  
Next.js is a **React framework** that enables functionality such as server-side rendering and static site generation.  
- 🚀 Fast Performance  
- 🔍 SEO Optimization  
- 🌍 API Routes`,
  },
  {
    id: "2",
    username: "dev_master",
    title: "Understanding TypeScript",
    content: `# Understanding TypeScript  
TypeScript is a superset of JavaScript that adds **static typing**.  
\`\`\`ts
const greet = (name: string): string => {
  return \`Hello, \${name}!\`;
};
\`\`\`  
- 📌 Improves code quality  
- 🛠️ Helps with maintainability`,
  },
  {
    id: "3",
    username: "frontend_wiz",
    title: "Mastering Tailwind CSS",
    content: `# Mastering Tailwind CSS  
Tailwind CSS is a utility-first CSS framework that speeds up development.  
\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
\`\`\`  
- ⚡ Rapid UI Development  
- 🎨 Highly Customizable`,
  },
  {
    id: "4",
    username: "ai_enthusiast",
    title: "Basics of Machine Learning",
    content: `# Basics of Machine Learning  
Machine Learning (ML) is a method of data analysis that automates analytical model building.  
**Types of ML:**  
- 🏷️ Supervised Learning  
- 🧠 Unsupervised Learning  
- 🔄 Reinforcement Learning`,
  },
  {
    id: "5",
    username: "backend_dev",
    title: "Why Use Prisma with PostgreSQL?",
    content: `# Why Use Prisma with PostgreSQL?  
Prisma is an ORM that simplifies database interactions.  
\`\`\`ts
const user = await prisma.user.findMany();
\`\`\`  
- 📜 Type-Safe Queries  
- ⚡ Faster Development`,
  },
  {
    id: "6",
    username: "cloud_warrior",
    title: "Introduction to AWS Lambda",
    content: `# Introduction to AWS Lambda  
AWS Lambda lets you run code **without provisioning servers**.  
- ⚡ Serverless Compute  
- 💰 Cost-Effective  
- 📈 Scalable`,
  },
  {
    id: "7",
    username: "fullstack_ninja",
    title: "What is GraphQL?",
    content: `# What is GraphQL?  
GraphQL is a **query language** for APIs and a runtime for executing those queries.  
\`\`\`graphql
{
  user(id: "1") {
    name
    email
  }
}
\`\`\`  
- 🚀 Fetch Only Required Data  
- 🔄 Flexible API Structure`,
  },
  {
    id: "8",
    username: "security_expert",
    title: "Understanding JWT Authentication",
    content: `# Understanding JWT Authentication  
JSON Web Tokens (JWT) are used for secure authentication.  
\`\`\`ts
const token = jwt.sign({ userId: 1 }, "secret", { expiresIn: "1h" });
\`\`\`  
- 🔐 Secure  
- 📜 Stateless`,
  },
  {
    id: "9",
    username: "react_lover",
    title: "Why Use React Hooks?",
    content: `# Why Use React Hooks?  
Hooks allow functional components to use state and lifecycle methods.  
\`\`\`ts
const [count, setCount] = useState(0);
\`\`\`  
- 🎯 Simpler Code  
- ⚡ Improved Performance`,
  },
  {
    id: "10",
    username: "pythonista",
    title: "Getting Started with FastAPI",
    content: `# Getting Started with FastAPI  
FastAPI is a high-performance web framework for building APIs.  
\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello FastAPI!"}
\`\`\`  
- 🚀 Fast Performance  
- 🔍 Automatic Docs`,
  },
  {
    id: "11",
    username: "game_dev",
    title: "Game Development with Unity",
    content: `# Game Development with Unity  
Unity is a popular game engine used for 2D and 3D games.  
- 🎮 Cross-Platform  
- 🛠️ Large Community`,
  },
  {
    id: "12",
    username: "docker_fan",
    title: "Why Use Docker?",
    content: `# Why Use Docker?  
Docker enables **containerized applications** for portability and consistency.  
\`\`\`bash
docker run -d -p 80:80 nginx
\`\`\`  
- 📦 Lightweight  
- 🔄 Consistent Environments`,
  },
  {
    id: "13",
    username: "dev_ops",
    title: "CI/CD with GitHub Actions",
    content: `# CI/CD with GitHub Actions  
GitHub Actions automates workflows for CI/CD.  
\`\`\`yaml
jobs:
  build:
    runs-on: ubuntu-latest
\`\`\`  
- 🛠️ Automate Deployments  
- 🚀 Improve Efficiency`,
  },
  {
    id: "14",
    username: "web3_dev",
    title: "Introduction to Blockchain",
    content: `# Introduction to Blockchain  
Blockchain is a decentralized technology that powers **cryptocurrencies**.  
- 🔐 Secure  
- 🔄 Transparent Transactions`,
  },
  {
    id: "15",
    username: "ios_dev",
    title: "SwiftUI for iOS Development",
    content: `# SwiftUI for iOS Development  
SwiftUI is a declarative framework for building iOS apps.  
\`\`\`swift
var body: some View {
    Text("Hello, SwiftUI!")
}
\`\`\`  
- 📱 Faster UI Development  
- 🎨 Modern UI Framework`,
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
