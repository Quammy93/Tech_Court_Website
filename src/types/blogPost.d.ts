// src/types/blogPost.d.ts
export type BlogPost = {
    id: string; // Updated from number to string
    title: string;
    content: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  };
  