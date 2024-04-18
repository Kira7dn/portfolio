import {
  ie,
  frontend,
  auto,
  data,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  nodejs,
  mongodb,
  figma,
  graphql,
  mui,
  leansigma,
  lg,
  canon,
  youtubeClone,
  financeDashboard,
  ecommerce,
  movieStream,
  Workspace,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: frontend,
    size: 24,
  },
  {
    title: "Data Analyst",
    icon: data,
    size: 24,
  },
  {
    title: "Machinery Engineer",
    icon: auto,
    size: 24,
  },
  {
    title: "Industrial Engineer",
    icon: ie,
    size: 30,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Lean 6 Sigma",
    icon: leansigma,
  },
];

const experiences = [
  {
    title: "Software Developer & Data Analyst",
    company_name: "LG Innotek",
    icon: lg,
    iconBg: "#383E56",
    date: "March 2022 - Now",
    points: [
      "Develop Web Application to Automation and Digital Transformation for Promoting Company Operation.",
      "Building Data Modal, Dashboard for Analyzing Company Operation Performance.",
      "Training, Coaching and Promoting for Production Innovation Training System (TPM + Lean + 6 Sigma base).",
    ],
  },
  {
    title: "Manufacture Engineering Leader",
    company_name: "Canon",
    icon: canon,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Feb 2022",
    points: [
      "Lead and promote Manufacturing Engineering Team to Design, Manufacture and Install new semi-auto production line.",
      "Process analysis to automation application.",
      "Design, manufacture and install automation machines.",
      "New Manufacturing Technology research and expirement.",
    ],
  },
  {
    title: "Automation Leader",
    company_name: "Canon",
    icon: canon,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - Dec 2018",
    points: [
      "Process analysis (by Work Factor, Man-Machine Chart, Value Stream Map...)to automation application.",
      "Design, manufacture and install automation machines",
      "Automation Group resources, manpower Control",
    ],
  },
  {
    title: "Production Shift Leader",
    company_name: "Canon",
    icon: canon,
    iconBg: "#E6DEDD",
    date: "Dec 2014 - Jul 2016",
    points: [
      "Production human resource control.",
      "Problem solving to maintain production.",
      "Quality supervision and management.",
      "Production Innovation Activities control.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Duc Anh is the best subordinate I have had. He is a smart man with high technological skills, logical thinking, and critical thinking. He has the potential to become a great strategist.",
    name: "Phan Duy Trung",
    designation: "Manufacturing Engineering Manager",
    company: "Canon",
  },
  {
    testimonial:
      "I am very happy when working with him because he is professional, funny, and we can learn so many things from each other.",
    name: "Dao Trung Hieu",
    designation: "Mechanical Engineering Expert",
    company: "Canon",
  },
  {
    testimonial:
      "After using Duc Anh's products, our performance improved significantly. This solution effectively addressed our pain points and helped us reduce operational risks.",
    name: "Kim Lien",
    designation: "Internal Audit Expert",
    company: "LG Innotek",
  },
];

const projects = [
  {
    name: "Workspace Social Network",
    description:
      "Fullstack Nextjs Application to Transform Your Office Experience with Our Digital Workspace by Streamline task management, communication, and performance tracking in one centralized platform.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: Workspace,
    source_code_link:
      "https://github.com/Kira7dn/social-network",
    demo_live_link:
      "https://social-network-ruddy.vercel.app/",
  },
  {
    name: "Video Streaming",
    description:
      "[Personal Project] Front-End for stream app which provide stream service for Movie, TV Series. Where you can access popular stream services as Netflix, HBO max, Prime, Disney+ combine to only one platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: movieStream,
    source_code_link:
      "https://github.com/Kira7dn/Movie-Stream/",
    demo_live_link:
      "https://main--strong-kringle-817b2e.netlify.app/",
  },
  {
    name: "Fashion Ecommerce",
    description:
      "[Personal Project] Shop the Latest Trendsetting Fashion for Women\n Unleash Your Unique Charm with Our Modern and Seductive Collection. Become the center of attention with our latest fashion trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidbapi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/Kira7dn/ecommerce",
    demo_live_link:
      "https://main--astonishing-lebkuchen-779e4c.netlify.app/",
  },
  {
    name: "Finance Dashboard",
    description:
      "Introducing the spectacular Web-based Dashboard, designed to empower administrators with ability to visualize business performance metrics, including revenue, profit, top sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: financeDashboard,
    source_code_link:
      "https://github.com/Kira7dn/Finance-Dashboard",
    demo_live_link:
      "https://finance-dashboard-gx0w8nup5-kira7dn.vercel.app",
  },
  {
    name: "Youtube Clone",
    description:
      "Introducing an awe-inspiring YouTube-inspired web application. It offers users the ability to search videos, explore related content, discover channels, and enjoy a seamless video-watching experience. But that's not all!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link:
      "https://github.com/Kira7dn/youtube-clone",
    demo_live_link:
      "https://lovely-jelly-d5e99e.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
