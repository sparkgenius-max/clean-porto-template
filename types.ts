
export interface Project {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  client: string;
  role: string;
  service: string;
  workDetails: string[];
  designSolution: string;
  detailImages: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}