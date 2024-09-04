import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Personal Projects",

    iconBg: "#accbe1",
    date: "Ongoing",
    points: [
      "Led the development of multiple full-stack web applications using React.js, Node.js, and MongoDB.",
      "Designed and implemented a scalable job portal application (ezCareers) with Next.js, Tailwind CSS, and TypeScript, focusing on responsive design and user engagement.",
      "Developed a community platform (Bindass Bol) with a focus on user anonymity, secure authentication, and dynamic content management, deployed on Vercel.",
      "Integrated third-party APIs, including OpenAI for content moderation and Clerk.js for user authentication and management.",
      "Ensured cross-browser compatibility and optimized web performance for a seamless user experience.",
      "Continuously updated skills by learning and applying new technologies such as TypeScript, Next.js, and three.js for a 3D portfolio website.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Personal Projects",

    iconBg: "#fbc3bc",
    date: "2019 - Present",
    points: [
      "Developed and maintained responsive and modern web applications using React.js and Tailwind CSS.",
      "Built interactive UIs for platforms like YouTube Clone and Snapify, focusing on real-time data handling and user-friendly design.",
      "Implemented advanced CSS animations and transitions to enhance the visual appeal and user interaction of various web projects.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Personal Projects",
    iconBg: "#b7e4c7",
    date: "2019 - Present",
    points: [
      "Designed and managed databases using MongoDB and MySQL, ensuring data integrity and efficient data retrieval.",
      "Developed RESTful APIs and backend logic using Node.js and Express.js, integrating them with front-end applications for seamless data flow.",
      "Implemented authentication and authorization systems using JWT and Clerk.js, ensuring secure user access and data privacy.",
      "Optimized server performance and handled real-time data updates in projects like Airline Booking System and Bindass Bol.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "A little more...",
    iconBg: "#a2d2ff",
    date: "2019 - Present",
    points: [
      "Full stack development of complex applications from concept to deployment, including both frontend and backend responsibilities.",
      "Utilized Next.js for server-side rendering and static site generation, improving performance and SEO for web applications.",
      "Deployed projects on platforms like Vercel, ensuring smooth and scalable deployment processes.",
      "Continuously improved and refined projects based on user feedback and latest web development practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/AmDevDeepak",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kumardeepakchauhan/",
  },
];

export const projects = [
  {
    theme: "btn-back-purple",
    name: "Bindass Bol - Community Platform",
    description:
      "Developed a community platform with Next.js and TypeScript, enabling anonymous posting, shoutouts, and user engagement with a focus on moderation and security.",
    githubLink: "https://github.com/AmDevDeepak/NEXT-JS",
    liveLink: "https://bindass-bol-nextjs.vercel.app/",
  },
  {
    theme: "btn-back-yellow",
    name: "ezCareers - Job Portal",
    description:
      "Full stack job portal application developed with Next.js, Tailwind CSS, and MongoDB, featuring user authentication, job posting, and resume management.",
    githubLink:
      "https://github.com/AmDevDeepak/ezCareers-FULL-STACK-JOB-PORTAL",
    liveLink: "https://ezcareers-frontend.onrender.com/",
  },
  {
    theme: "btn-back-blue",
    name: "Snapify - Social Media Platform",
    description:
      "Developed a mobile screen-centric social media platform with real-time features, including user authentication, post creation, and social interactions.",
    githubLink: "https://github.com/AmDevDeepak/Snapify",
    liveLink: "https://snapify-e9x2.onrender.com/login",
  },
  {
    theme: "btn-back-red",
    name: "Not Just another YouTube Clone",
    description:
      "Built a YouTube clone featuring video search, infinite scrolling, debouncing, caching, and a live chat feature to enhance user interaction.",
    githubLink: "https://github.com/AmDevDeepak/MY_YOUTUBE",
    liveLink: "https://my-youtube-lovat.vercel.app/",
  },
  {
    theme: "btn-back-green",
    name: "Airline Booking System",
    description:
      "Designed and developed a scalable backend microservices architecture for an airline booking system, including booking management and flight search features.",
    githubLink: "https://github.com/AmDevDeepak/AIRLINE_BOOKING_SYSTEM", // GitHub link
    liveLink: "", // Add live link if available
  },

  {
    theme: "btn-back-black",
    name: "Modern Landing Pages",
    description:
      "Created multiple visually striking portfolio website and landing pages using different tech stacks to showcase projects and skills in an interactive and engaging format. Have a look to one of them : ",
    githubLink: "https://github.com/AmDevDeepak/BRAINWAVE_AI_WEBSITE", // GitHub link
    liveLink: "https://brainwave-ai-website-eight.vercel.app/",
  },
];
