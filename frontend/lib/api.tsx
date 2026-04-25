// frontend/lib/api.tsx

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  area: string;
  year: string;
  main_image: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
}