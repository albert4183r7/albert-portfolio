import { Cloud, Server, Layers, ShieldCheck, Code2, Terminal, Database, Globe, Layout, Zap } from 'lucide-react';

export const CONTENT = {
  name: "ALBERT",
  role: "IT Engineer", // Updated Role
  location: "Medan, Indonesia",
  availability: "Open to Work",
  email: "albertlie8338@gmail.com",
  cvLink: "/Albert_CV.pdf",
  social: {
    github: "https://github.com/albert4183r7",
    linkedin: "https://linkedin.com/in/a-albert"
  },
  // RE-STRUCTURED SKILLS with SVG URLs
  skills: {
    // Row 1: Languages & Frameworks
    languages: [
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    // Row 2: Cloud Services
    cloud: [
      { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Oracle Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
      { name: "Alibaba Cloud", url: "https://s.yimg.com/zb/imgv1/57bdc457-6fc9-3b30-ba29-d0ee1cf76490/t_500x300" },
      { name: "Huawei Cloud", url: "https://tse2.mm.bing.net/th/id/OIP.UUDTJPbOHaNmAoM4A6M1agHaHg?pid=Api&P=0&h=220" },
      { name: "Vercel", url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
      { name: "Render", url: "https://images.seeklogo.com/logo-png/53/1/render-logo-png_seeklogo-532232.png" },
    ],
    // Row 3: Tools & Databases
    tools: [
      { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", url: "https://tse4.mm.bing.net/th/id/OIP.-bzossAUdF_YFDw4LPNcfwHaHa?pid=Api&P=0&h=220"},
      { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", url: "https://tse2.mm.bing.net/th/id/OIP.wiWMLZ1gAGJiE-7QvueH0gHaFj?pid=Api&P=0&h=220" },
      { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ]
  },
  certifications: [
    { 
      name: "Oracle Cloud Infrastructure 2025 Multicloud Certified Professional", 
      date: "Oct 2025", 
      issuer: "Oracle",
      image: "/certifications/OCI-multicloud.jpg" 
    },
    { 
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", 
      date: "Sep 2025", 
      issuer: "Oracle",
      image: "/certifications/OCI-Foundations.jpg" 
    },
    { 
      name: "Google Cloud Certified - Associate Cloud Engineer", 
      date: "May 2025", 
      issuer: "Google",
      image: "/certifications/Google.jpg"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Cloud Computing", 
      date: "Feb 2024", 
      issuer: "Alibaba",
      image: "/certifications/ACA-Cloud.jpg"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Big Data", 
      date: "May 2024", 
      issuer: "Alibaba",
      image: "/certifications/ACA-Big-Data.jpg"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Database", 
      date: "Aug 2024", 
      issuer: "Alibaba",
      image: "/certifications/ACA-Database.png"
    },
    { 
      name: "Huawei Certified ICT Associate - Cloud Service", 
      date: "Dec 2023", 
      issuer: "Huawei",
      image: "/certifications/Huawei.jpg"
    }
  ],
  projects: [
    {
      title: "PromptBill - AI Powered Full-Stack SaaS Application",
      category: "GenAI + Full-Stack",
      description: "Automating financial workflows. A smart SaaS platform that leverages Generative AI to draft, format, and send professional invoices in seconds, wrapped in a sleek React dashboard.",
      tech: ["React", "Node.js", "Express.js ","MongoDB", "Gemini API"],
      gradient: "/projects-images/AI-Invoice.png",
      link: "https://github.com/albert4183r7/ai-invoice-generator"
      prod-live: "link"
    },
    {
      title: "Egglyze - AI Egg Quality Classification via Shell Analysis System",
      category: "Cloud Computing + Backend Development",
      description: "A real-time egg quality prediction system designed for industrial scale. Engineered a Flask-based ML brain running on Google Compute Engine, utilizing Firestore for sub-second data syncing.",
      tech: ["GCP Compute Engine", "Python Flask (API)", "GCP Firestore"],
      gradient: "/projects-images/Egglyze.jpg",
      link: "https://github.com/Capstone-Egglyze/Cloud-Computing"
    },
    {
      title: "Global E-Commerce Cloud Architecture",
      category: "Cloud Computing",
      description: "Multi-region E-Commerce architecture on GCP designed to withstand massive traffic spikes. Features auto-scaling Managed Instance Groups and Global Load Balancing that survived 200% CPU stress testing.",
      tech: ["GCP", "auto-scaling", "load-balancing", "instance group", "cloud monitoring"],
      gradient: "/projects-images/GCP-Cloud.png",
      link: "https://github.com/albert4183r7/gcp-global-ecommerce-architecture"
    },
    {
      title: "Cloud-Based Student Data Management System (AWS)",
      category: "CRUD API + Cloud Computing",
      description: "A full-stack CRUD prototype deployed on AWS to demonstrate core cloud architecture patterns and backend API integration.",
      tech: ["React", "Java", "AWS EC2", "AWS RDS", "AWS S3", "AWS Route 53"],
      gradient: "/projects-images/AWS-Cloud.png",
      link: "https://github.com/albert4183r7/Cloud-Based-Student-Data-Management-System"
      demo: "/projects-demo/video-demo.mp4, please remove the audio"
    }
  ]
};