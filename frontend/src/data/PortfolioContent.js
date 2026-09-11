import Project1 from "../assets/images/Api.png";
import Project2 from "../assets/images/Auth.png";
import Project3 from "../assets/images/block.jpg";
import Project4 from "../assets/images/ecom.jpg";
import Project5 from "../assets/images/portfolio.png";
import Project6 from "../assets/images/doctor.png";
import ReactBasicCert from "../assets/images/certifications/react_basic.jpg";
import JsBasicCert from "../assets/images/certifications/javascript_basic.jpg";
import JsInterCert from "../assets/images/certifications/javascript_inter.jpg";
import NodeBasicCert from "../assets/images/certifications/node_basic.jpg";
import FrontendCert from "../assets/images/certifications/frontend_cert.jpg";
import Avatar from "../assets/images/avatar.png";

export const PortfolioContent = {
  about: {
    tag: "About Me",
    title: "Passionate about creating",
    titleHighlight: "digital experiences",
    paragraphs: [
      "I'm a Full Stack Developer with a passion for building elegant, responsive, and user-friendly web applications. With over 4 years of experience, I've worked on various projects ranging from startup MVPs to enterprise-level applications.",
      "My approach combines clean code with beautiful design, ensuring that every project I work on is both functional and visually appealing. I believe in continuous learning and staying up-to-date with the latest technologies.",
    ],
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects" },
      { number: "12", label: "Technologies" },
    ],
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Next.js", level: 88 },
      { name: "MongoDB", level: 82 },
    ],
  },

  hero: {
    badge: "Available for work",
    greeting: "Hey, I'm",
    name: "Uzair",
    title: "MERN Stack Developer",
    description:
      "I craft elegant digital experiences and build robust web applications with modern technologies.",
    buttons: {
      primary: "Download CV",
      secondary: "View Projects",
    },
    stats: [
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects Done" },
      { number: "12+", label: "Tech Stack" },
      { number: "500+", label: "Commits" },
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
    avatar: Avatar,
  },

  skills: {
    tag: "Expertise",
    title: "My",
    titleHighlight: "Skills",
    description:
      "A comprehensive overview of my technical skills and expertise across different domains of software development.",
    categories: [
      { id: "all", label: "All Skills" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "database", label: "Database" },
      { id: "tools", label: "Tools & Others" },
    ],
    skills: {
      frontend: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 95,
          description: "Hooks, Context, Redux",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 92,
          description: "ES6+, Async/Await, DOM",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          level: 90,
          description: "Semantic HTML, Accessibility",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          level: 88,
          description: "Flexbox, Grid, Animations",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          level: 85,
          description: "Utility-first CSS",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          level: 82,
          description: "Responsive Design",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: 90,
          description: "Express, REST APIs, Middleware",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          level: 90,
          description: "Routing, Authentication",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 75,
          description: "Flask, Django Basics",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          level: 60,
          description: "Basics",
        },
      ],
      database: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: 85,
          description: "Mongoose, Aggregation",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 80,
          description: "Queries, Relationships",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
          level: 78,
          description: "Firestore, Auth",
        },
      ],
      tools: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: 85,
          description: "Version Control, GitHub",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: 70,
          description: "Containerization",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
          level: 85,
          description: "Deployment, CI/CD, Serverless Functions",
        },
        {
          name: "Backblaze B2",
          icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/backblaze.svg",
          level: 70,
          description: "Cloud Storage, CDN Integration, File Hosting",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          level: 90,
          description: "IDE, Extensions",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          level: 75,
          description: "Command Line, Bash",
        },
      ],
    },
    summary: [
      { number: "12+", label: "Technologies" },
      { number: "2+", label: "Years Experience" },
      { number: "20+", label: "Projects Delivered" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "Featured",
    titleHighlight: "Projects",
    description:
      "Here are some of the projects I've worked on. Each one represents a unique challenge and solution.",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "frontend", label: "Frontend" },
      { id: "fullstack", label: "Full Stack" },
      { id: "other", label: "Others" },
    ],
    items: [
      {
        id: 1,
        title: "Api Tester v2.0",
        description:
          "A powerful API testing tool with intuitive interface, request history, and response visualization",
        imageUrl: Project1,
        emoji: "🚀",
        category: "fullstack",
        tags: ["React.js", "Css3", "Node.js", "LocalStorage", "Express.js"],
        liveUrl: "https://api-tester-v2-0-frontend.vercel.app",
        githubUrl: "https://github.com/uzair0x7/Api-Tester-v2.0",
      },
      {
        id: 2,
        title: "Auth System MERN",
        description:
          "Production-ready authentication system with account lockout, rate limiting, and secure JWT-based authentication",
        imageUrl: Project2,
        emoji: "🔐",
        category: "fullstack",
        tags: ["React", "Node.js", "MongoDB", "JWT", "Authentication"],
        liveUrl: "https://auth-system-frontend-six.vercel.app/auth",
        githubUrl: "https://github.com/uzair0x7/Auth-System-MERN",
      },
      {
        id: 3,
        title: "MediCart - Online Pharmacy Store",
        description:
          "Modern frontend for an online medicine store with product browsing, shopping cart, and responsive design",
        imageUrl: Project4,
        emoji: "💊",
        category: "frontend",
        tags: [
          "React",
          "CSS",
          "E-Commerce",
          "Responsive",
          "Theme",
          "Animations",
        ],
        liveUrl: "https://ecomerce-store-frontend.vercel.app",
        githubUrl: "",
      },
      {
        id: 4,
        title: "My Portfolio",
        description:
          "Modern 3D portfolio website with interactive UI, glass-morphism design, and immersive user experience",
        imageUrl: Project5,
        emoji: "🧑‍💻",
        category: "frontend",
        tags: [
          "React",
          "Three.js",
          "Framer Motion",
          "3D",
          "Responsive",
          "Animations",
        ],
        liveUrl:
          "https://portfolio-react-git-main-npm-335is-projects.vercel.app",
        githubUrl: "https://github.com/uzair0x7/Portfolio-React",
      },
      {
        id: 5,
        title: "Website Blocker Tool",
        description:
          "Batch script tool to block/unblock websites by editing the hosts file",
        imageUrl: Project3,
        emoji: "🚫",
        category: "other",
        tags: ["Batch Scripting", "Hosts File", "Productivity"],
        liveUrl: "",
        githubUrl: "https://github.com/uzair0x7/Site-Blocker-Batch-Project",
      },
      {
        id: 6,
        title: "Doctor Portfolio",
        description:
          "Professional portfolio website for doctors with appointment booking, patient testimonials, and medical services showcase",
        imageUrl: Project6,
        emoji: "👨‍⚕️",
        category: "frontend",
        tags: ["React", "EmailJS", "Framer Motion", "Responsive"],
        liveUrl: "https://doctor-portfolio-five-beta.vercel.app",
        githubUrl: "",
      },
    ],
  },
  contact: {
    tag: "Contact",
    title: "Let's work",
    titleHighlight: "together",
    description:
      "Have a project in mind? Let's discuss how we can bring it to life. I'm always open to new opportunities and collaborations.",
    info: [
      {
        icon: "email",
        title: "Email",
        value: "uzaaiaamirr@gmail.com",
      },
      {
        icon: "location",
        title: "Location",
        value: "Remote / Worldwide",
      },
      {
        icon: "availability",
        title: "Availability",
        value: "Open to work",
      },
    ],
    social: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/uzair0x7",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: "https://www.linkedin.com/in/uzairdev1/",
      },
      {
        name: "Wellfound",
        icon: "https://cdn.simpleicons.org/wellfound",
        url: "https://wellfound.com/u/uzair-ali-29",
      },
      {
        name: "Fiverr",
        icon: "https://cdn.simpleicons.org/fiverr",
        url: "https://www.fiverr.com/s/WeEZ8Pd",
      },
      {
        name: "Upwork",
        icon: "https://cdn.simpleicons.org/upwork",
        url: "https://www.upwork.com/freelancers/~017c635ee0eaee34ba?mp_source=share",
      },
    ],
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submitText: "Send Message",
    },
  },

  certifications: {
    tag: "Credentials",
    title: "My ",
    titleHighlight: "Certifications",
    description:
      "A showcase of my professional qualifications and continuous learning journey.",
    items: [
      {
        id: 1,
        title: "React (Basic) Certificate",
        issuer: "HackerRank",
        logoUrl: "https://cdn.simpleicons.org/hackerrank/2EC866",
        imageUrl: ReactBasicCert,
        description:
          "Validates foundational knowledge of React, including JSX, components, state, and props.",
        link: "https://www.hackerrank.com/certificates/f494d748c54b",
      },
      {
        id: 2,
        title: "JavaScript (Basic) Certificate",
        issuer: "HackerRank",
        logoUrl: "https://cdn.simpleicons.org/hackerrank/2EC866",
        imageUrl: JsBasicCert,
        description:
          "Covers basic JavaScript concepts such as variables, data types, functions, and control flow.",
        link: "https://www.hackerrank.com/certificates/65632d909cb2",
      },

      {
        id: 3,
        title: "Node (Basic) Certificate",
        issuer: "HackerRank",
        logoUrl: "https://cdn.simpleicons.org/hackerrank/2EC866",
        imageUrl: NodeBasicCert,
        description:
          "Validates fundamental Node.js skills, including modules, file system, and basic server creation.",
        link: "https://www.hackerrank.com/certificates/a284db3400d6",
      },
      {
        id: 4,
        title: "JavaScript (Intermediate) Certificate",
        issuer: "HackerRank",
        logoUrl: "https://cdn.simpleicons.org/hackerrank/2EC866",
        imageUrl: JsInterCert,
        description:
          "Advanced JavaScript concepts including closures, prototypes, asynchronous programming, and ES6+ features.",
        link: "https://www.hackerrank.com/certificates/6fb0a4608492",
      },
      {
        id: 5,
        title: "Frontend Developer (React) Certificate",
        issuer: "HackerRank",
        logoUrl: "https://cdn.simpleicons.org/hackerrank/2EC866",
        imageUrl: FrontendCert,
        description:
          "HackerRank-certified in frontend development with hands-on skills in React, JavaScript, and CSS.",
        link: "https://www.hackerrank.com/certificates/0c3026f45db6",
      },
    ],
  },

  footer: {
    brand: "Uzair.",
    text: "Building elegant digital experiences with passion and creativity.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "All rights reserved.",
    heart: "Made with ❤️ By Uzair",
  },

  navbar: {
    brand: "Uzair",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact",
  },
};

export default PortfolioContent;
