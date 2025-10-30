
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'LuxeCart - E-commerce Platform',
    description: 'A modern e-commerce storefront designed for a seamless shopping experience. It solves the challenge of slow, clunky online stores by using a fast, responsive framework and integrating a smooth, secure checkout process.',
    imageUrl: 'https://picsum.photos/seed/ai-image/1000/600',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Stripe API', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    detailedDescription: 'LuxeCart is a full-featured e-commerce platform built with performance and user experience at its core. It features a dynamic product catalog, a secure and streamlined checkout process powered by Stripe, and a user-friendly admin dashboard for managing products and orders.',
    challenges: ['Ensuring fast page loads with a large product inventory.', 'Implementing a secure and reliable payment gateway.', 'Creating a responsive design that works flawlessly on all devices.'],
    solutions: ['Utilized Next.js for server-side rendering (SSR) and static site generation (SSG) to achieve sub-second page loads.', 'Integrated the Stripe API for robust and secure payment processing, handling various payment methods and fraud detection.', 'Adopted a mobile-first approach with Tailwind CSS, ensuring a consistent and accessible user interface across desktops, tablets, and smartphones.'],
  },
  {
    id: 2,
    title: 'ConnectSphere - Real-time Chat App',
    description: 'A web-based chat application that enables users to connect and communicate instantly. It addresses the need for real-time interaction with a scalable architecture, delivering messages with minimal latency.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/1000/600',
    techStack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    detailedDescription: 'ConnectSphere is a real-time messaging application that allows users to create chat rooms, send messages, and see typing indicators in real-time. It features a clean, intuitive interface and a robust backend that can handle a high volume of concurrent connections.',
    challenges: ['Managing real-time WebSocket connections efficiently.', 'Ensuring message delivery and synchronization across multiple clients.', 'Implementing user authentication and private messaging.'],
    solutions: ['Used Socket.IO for its reliable, low-latency, and event-based communication between clients and the server.', 'Leveraged MongoDB for a flexible and scalable database schema to store user data and chat histories.', 'Implemented JWT-based authentication to secure endpoints and manage user sessions.'],
  },
  {
    id: 3,
    title: 'InsightDash - Data Visualization Dashboard',
    description: 'A powerful data visualization dashboard that transforms complex datasets into interactive and understandable charts and graphs. It helps businesses make data-driven decisions by providing clear insights.',
    imageUrl: 'https://picsum.photos/seed/dashboard/1000/600',
    techStack: ['React', 'D3.js', 'TypeScript', 'Node.js', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
    detailedDescription: 'InsightDash is a dynamic and customizable dashboard for visualizing complex data. It allows users to upload their own datasets, choose from various chart types (bar, line, pie, etc.), and interact with the data through filters and drill-downs.',
    challenges: ['Rendering large datasets without sacrificing performance.', 'Creating reusable and customizable chart components.', 'Ensuring the dashboard is intuitive and easy for non-technical users to navigate.'],
    solutions: ['Utilized the D3.js library for its power and flexibility in creating custom data visualizations, optimizing rendering for large datasets.', 'Built a component library of charts using React and TypeScript, allowing for easy reuse and customization.', 'Designed a clean, drag-and-drop interface that simplifies the process of building and arranging dashboards.'],
  },
  {
    id: 4,
    title: 'DevPortfolio - Personal Portfolio Website',
    description: 'A sleek and modern personal portfolio website to showcase projects, skills, and experience. Built with React and Framer Motion for a smooth, animated user experience.',
    imageUrl: 'https://picsum.photos/seed/portfolio/1000/600',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    detailedDescription: 'This very portfolio website is a testament to my skills in front-end development and design. It features a clean, responsive layout, a dark/light mode toggle, and subtle animations powered by Framer Motion to enhance the user experience.',
    challenges: ['Creating a visually appealing and unique design.', 'Ensuring smooth performance and animations across all devices.', 'Structuring the codebase to be clean, scalable, and maintainable.'],
    solutions: ['Used Tailwind CSS for rapid and responsive UI development, allowing for a highly customized design without writing custom CSS.', 'Leveraged Framer Motion for declarative and powerful animations, creating a fluid and engaging user experience.', 'Organized the project into reusable components and followed best practices for React and TypeScript development.'],
  }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Sass/SCSS'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
        title: 'DevOps & Tooling',
        skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'Webpack', 'Vite', 'Jest', 'Cypress'],
    },
    {
        title: 'Design',
        skills: ['Figma', 'Adobe XD', 'User Interface (UI) Design', 'User Experience (UX) Design', 'Responsive Design'],
    }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:junaidmushtaq988@gmail.com',
};
