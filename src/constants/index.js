import {
  mobile,
  
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  Angular,
  Net,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Deloitte,
  TAMUSA,
  Crio,
  bootstrap,
  java,
  nextjs,
  python,
  sql,
  dotnet,
  azure,
  spring,
  csharp,
  mygithub,
  techshop,
  Capgemini,
  campus
} from "../assets";

// template id - template_hyen908
// service id - service_ns5npt8
// public key - -MDAV3GcuBB10vGIS

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full-Stack Web Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
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
    name: "Java",
    icon: java,
  },
  {
    name: ".Net", 
    icon: Net,
  },
  {
    name: "C#",
    icon: csharp,
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
    name: "Angular",
    icon: Angular,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Graduate Programming Assistant (Application Developer)",
    company_name: "Texas A&M University",
    icon: TAMUSA,
    iconBg: "#FDFBFB",
    date: "january 2024 - present",
    points: [
      "Utilized Angular, PrimeNG, and Bootstrap to create a responsive, dynamic, and visually appealing user interface, enhancing the user experience with industry-standard technologies.",
      "Implemented a structured, three-layer architecture for the Express.js backend, optimizing database queries and achieving a 60% improvement in query performance while ensuring scalability and maintainability.",
      "Refactored backend functions into reusable classes, increasing code reusability by 80%, and developed reusable frontend components, leading to a 50% increase in component reusability.",
      "Seamlessly integrated several third-party APIs to fetch real-time internship data, enriching the application's database with up-to-date listings from multiple sources.",
      "Migrated the frontend from React to Angular, optimized the application for performance across all devices, and aligned with the latest Express.js standards to enhance API security, resulting in a 30% improvement in overall application performance.",
      "Leveraged GIT for version control, ensuring effective change tracking and team collaboration, Created and developed continuous integration and delivery (CI/CD) pipelines using GitLab, Azure DevOps.",
    ],
  },
  {
    title: "Application Engineer",
    company_name: "Deloitte",
    icon: Deloitte,
    iconBg: "#FFFFFF",
    date: "July 2023 - December 2023",
    points: [
      "Collaborated with clients and cross-Functional teams to understand business needs, gather requirements, and develop customized solutions to address issues with existing systems.",
      "Enhanced existing backend logic written in .NET by rewriting SQL procedure logic and optimizing LINQ queries, resulting in an 80% reduction in request processing time.",
      "Integrated Hang fire jobs and Azure functions for efficient background jobs processing.",
      "Developed frontend web templates using Telerik Ul components for Blazor UI for multiple products, resulting in improved efficiency and productivity acrossthe organization.",
      "Leveraged Azure services to unlock additional features, Contributing to improved application capabilities. Such as application insights, key vaults, containers,Azure Active Directory, etc.",
      "Reviewed, debugged, tested, documented, and provided technical support for developed products.",
      "Designed, developed, tested, and managed full-stack business system solutions,spanning extraction, storage, Quicker registrations."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Capgemini",
    icon: Capgemini,
    iconBg: "#FFFFFF",
    date: "September 2021 - July 2023",
    points: [
      "Developed new functionalities and features in line with functional specifications and business requirements using .NET Framework, Angular and SQL Server.",
      "Designed and delivered User Interface of applications as per client requirements using Angular, HTML, CSS.",
      "Developed a.NET desktop App that effectively manipulates Excel data and carries out complex procedures, boosting email functionality.",
      "Key role in designing & implementing migration strategies for traditional systems on Azure.",
      "Hands on experience on Microsoft Azure of creating CI/CD Pipelines, key vault setup, DR setup.",
      "Good understanding of software development process: Requirement gathering & analysis, design, development and debugging."
    ],
  },
  {
    title: "Student Developer Intern",
    company_name: "Crio.Do",
    icon: Crio,
    iconBg: "#2df7c5",
    date: "December 2019 - April 2020",
    points: [
      "Engineered a robust review mechanism leveraging Facebook, Pinterest, and Clarifai APIs, enhancing user interaction and experience within the food delivery application.",
      "Designed and implemented a secure file sharing platform, delving into new technologies such as shell scripting and computer networking to ensure top-notch data protection and seamless sharing capabilities.",
      "Actively contributed to the development and enhancement of real-world applications, gaining hands-on experience in solving practical challenges and implementing innovative solutions.",
      "Leveraged Java programming in conjunction with REST API to build scalable and efficient application.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TechShop",
    description:
      "An e-commerce platform designed to deliver customers an intuitive interface, personalized recommendations, ensuring a seamless online shopping experience.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "PrimeNG",
        color: "pink-text-gradient",
      },
    ],
    image: techshop,
    source_code_link: "https://github.com/shaikafroz016/TechShop-Heroku",
  },
  {
    name: "Campus Dynamics",
    description:
      "An advanced ERP solution that empowers educational institutions with comprehensive features, delivering an efficient and user-friendly platform for Campus.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SQlite",
        color: "pink-text-gradient",
      },
    ],
    image: campus,
    source_code_link: "https://github.com/shaikafroz016/Campus-Dynamics-Heroku",
  },
  {
    name: "My GitHub",
    description:
      "Delve into my GitHub portfolio, a compilation of projects that showcase my dedication to application development. Explore with me the realm of coding expertise and innovation.",
    tags: [
      {
        name: "code-portfolio",
        color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
      },
      {
        name: "open-source",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: mygithub,
    source_code_link: "https://github.com/shaikafroz016/"
  },
];

const resume = "https://drive.google.com/file/d/1AJ6nHCCcGVf0Y_hj89tcPtsCksQQvVA-/view?usp=sharing"
 
export { services, technologies, experiences, testimonials, projects, resume };
