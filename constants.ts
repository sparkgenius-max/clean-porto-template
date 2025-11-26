
import { Project, Service, Experience, Testimonial } from './types';

export const NAV_LINKS = ['Works', 'Services', 'About', 'Reviews'];

export const PROJECTS: Project[] = [
  {
    id: 'zenith',
    title: 'Zenith',
    date: 'Feb 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop',
    description: 'An e-commerce platform redesign aimed at reducing bounce rates and boosting conversions.',
    client: 'WanderEase',
    role: 'Designer',
    service: 'UX Design',
    workDetails: [
      'Zenith, an e-commerce platform, struggled with high bounce rates and low conversions. The challenge was to optimize the user journey and improve the shopping experience.',
      'We conducted usability testing and heatmap analysis to identify friction points, then redesigned the navigation, checkout process, and product pages for better clarity. The focus was on creating a frictionless shopping experience.'
    ],
    designSolution: 'Through intuitive navigation, a clean UI, and a mobile-first approach, we enhanced usability and boosted conversions. The redesign led to a measurable increase in sales and customer retention, with users reporting a smoother and more enjoyable shopping experience.',
    detailImages: [
      'https://images.unsplash.com/photo-1559028006-44a3a54d3532?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'nexa',
    title: 'Nexa',
    date: 'Jan 27, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
    description: 'Developed a cohesive visual identity, including logo, typography, and color palette. The new branding reinforced consistency across platforms, increasing brand recognition and audience engagement.',
    client: 'Nexa Living',
    role: 'Brand Designer',
    service: 'Branding',
    workDetails: ['Nexa required a full brand overhaul to better connect with a modern audience. We started with extensive market research to define a new brand strategy.', 'The project involved creating a new logo, a versatile color palette, and a comprehensive set of brand guidelines to ensure consistency across all marketing materials and products.'],
    designSolution: 'The new branding is clean, modern, and memorable. It has been successfully rolled out across all platforms, resulting in a 25% increase in audience engagement and a significant lift in brand recognition.',
    detailImages: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'aether',
    title: 'Aether',
    date: 'Dec 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop',
    description: 'A showcase of architectural beauty.',
    client: 'Aether Homes',
    role: 'UX/UI Designer',
    service: 'Web Design',
    workDetails: ['Aether Homes needed a visually immersive website to showcase their high-end architectural projects. The primary goal was to create an elegant and intuitive user experience that reflects the quality of their work.'],
    designSolution: 'We designed a minimalist, image-forward website with a focus on large, high-resolution photography and clean typography. The site has been praised for its aesthetics and usability, and has led to a 40% increase in client inquiries.',
    detailImages: [
      'https://images.unsplash.com/photo-1613553424131-f5b45281e2a0?q=80&w=1974&auto=format&fit=crop'
    ]
  },
  {
    id: 'horizon',
    title: 'Horizon',
    date: 'Dec 20, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: 'A visual journey.',
    client: 'Horizon Travel',
    role: 'Lead Designer',
    service: 'Mobile App Design',
    workDetails: ['Horizon Travel aimed to create a mobile app that simplifies travel planning. The challenge was to design a feature-rich application that remained simple and delightful to use.'],
    designSolution: 'The final app features a clean, card-based UI, intuitive navigation, and personalized travel recommendations. It has achieved a 4.8-star rating on the App Store and has been featured as a "New App We Love".',
    detailImages: [
      'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop'
    ]
  },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Graphic Design',
    description: 'Creating visually compelling designs that elevate your brand and captivate your audience.',
    imageUrl: 'https://picsum.photos/seed/graphic/600/400',
  },
  {
    id: '02',
    title: 'Lifestyle Photography',
    description: 'Capturing authentic moments that bring your brand to life.',
    imageUrl: 'https://picsum.photos/seed/lifestyle/600/400',
  },
  {
    id: '03',
    title: 'Digital Design',
    description: 'Intuitive and aesthetically pleasing digital experiences.',
    imageUrl: 'https://picsum.photos/seed/digital/600/400',
  },
  {
    id: '04',
    title: 'Social Media Design',
    description: 'Engaging visuals that strengthen your online presence.',
    imageUrl: 'https://picsum.photos/seed/social/600/400',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Product Designer',
    company: 'Visionary Labs',
    period: '2024 - Present',
    details: 'Leading design on key product initiatives, mentoring junior designers, and shaping the design system for scalability and consistency across all platforms.'
  },
  {
    role: 'UI/UX Designer',
    company: 'Creative Hive Agency',
    period: '2022-2024',
    details: 'Designed user-centric interfaces for web and mobile applications, conducted user research, and created high-fidelity prototypes for client projects.'
  },
  {
    role: 'Motion Graphics Designer',
    company: 'PixelWave Studios',
    period: '2021',
    details: 'Produced engaging animations and motion graphics for marketing campaigns, product videos, and social media content.'
  },
  {
    role: 'Graphic Designer',
    company: 'DesignCraft Inc.',
    period: '2020',
    details: 'Developed branding materials, including logos, brochures, and digital assets for a diverse range of clients.'
  },
  {
    role: 'Design Intern',
    company: 'ArtiFlex Solutions',
    period: '2018-2019',
    details: 'Assisted the design team with various tasks, including asset creation, research, and presentation preparation.'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Clean, professional, and easy to use. Nova gave my agency the polished online presence it needed. The attention to detail is remarkable.",
    author: "Samantha Bee",
    title: "Marketing Director, Innovate Co.",
    avatarUrl: "https://picsum.photos/seed/avatar1/100/100"
  },
  {
    quote: "A pleasure to work with. The creative process was collaborative and inspiring, resulting in a final product that exceeded all our expectations.",
    author: "John Doe",
    title: "Marketing Specialist, DreamLive",
    avatarUrl: "https://picsum.photos/seed/avatar2/100/100"
  },
  {
    quote: "The dedication to quality and user experience is evident in every pixel. I highly recommend their services to anyone looking for top-tier design.",
    author: "Emily Chen",
    title: "Founder, Tech startups",
    avatarUrl: "https://picsum.photos/seed/avatar3/100/100"
  }
];
