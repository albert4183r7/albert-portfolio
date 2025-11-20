import { Cloud, Server, Layers, ShieldCheck, Code2, Terminal, Database, Globe, Layout, Zap } from 'lucide-react';

export const CONTENT = {
  name: "ALBERT",
  role: "IT Engineer", // Updated Role
  location: "Medan, Indonesia",
  availability: "Open to Work",
  email: "albertlie8338@gmail.com",
  cvLink: "/Albert_CV.pdf", // Assumes file is in public/ folder
  social: {
    github: "https://github.com/albert4183r7",
    linkedin: "https://linkedin.com/in/a-albert"
  },
  // RE-STRUCTURED SKILLS with SVG URLs
  skills: {
    // Row 1: Languages & Frameworks (Faster Speed)
    languages: [
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
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
      { name: "Alibaba Cloud", url: "https://img.icons8.com/color/48/alibaba-cloud.png" },
      { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Vercel", url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ],
    // Row 3: Tools & Databases
    tools: [
      { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", url: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
      { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ]
  },
  certifications: [
    { 
      name: "Oracle Cloud Infrastructure 2025 Multicloud Certified Professional", 
      date: "Oct 2025", 
      issuer: "Oracle",
      image: "https://placehold.co/600x400/2c0b0e/fa3e3e?text=Oracle+Multicloud+Cert" 
    },
    { 
      name: "Google Cloud Certified - Associate Cloud Engineer", 
      date: "May 2025", 
      issuer: "Google",
      image: "https://placehold.co/600x400/0f172a/3b82f6?text=GCP+Associate+Cert"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Cloud Computing", 
      date: "Feb 2024", 
      issuer: "Alibaba",
      image: "https://placehold.co/600x400/1c1917/f97316?text=Alibaba+Cloud+Computing"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Big Data", 
      date: "May 2024", 
      issuer: "Alibaba",
      image: "https://placehold.co/600x400/1c1917/f97316?text=Alibaba+Big+Data"
    },
    { 
      name: "Alibaba Cloud Certified Associate - Cloud Database", 
      date: "Aug 2024", 
      issuer: "Alibaba",
      image: "https://placehold.co/600x400/1c1917/f97316?text=Alibaba+Database"
    },
    { 
      name: "Huawei Certified ICT Associate - Cloud Service", 
      date: "Dec 2023", 
      issuer: "Huawei",
      image: "https://placehold.co/600x400/270a0a/ef4444?text=Huawei+HCIA+Cloud"
    }
  ],
  projects: [
    {
      title: "Egglyze AI System",
      category: "IoT + Cloud Computing",
      description: "A real-time egg quality prediction system designed for industrial scale. Engineered a Flask-based ML brain running on Google Compute Engine, utilizing Firestore for sub-second data syncing.",
      tech: ["GCP Compute", "Python Flask", "Firestore"],
      gradient: "from-blue-600 to-cyan-500",
      link: "https://github.com/albert4183r7"
    },
    {
      title: "Global Cloud Architecture",
      category: "High-Availability Infra",
      description: "Multi-region E-Commerce architecture on GCP designed to withstand massive traffic spikes. Features auto-scaling Managed Instance Groups and Global Load Balancing that survived 200% CPU stress testing.",
      tech: ["Google Cloud", "Terraform", "Auto-scaling"],
      gradient: "from-indigo-600 to-blue-500",
      link: "https://github.com/albert4183r7/gcp-global-ecommerce-architecture"
    },
    {
      title: "AI Invoice Generator",
      category: "SaaS Application",
      description: "Automating financial workflows. A smart SaaS platform that leverages Generative AI to draft, format, and send professional invoices in seconds, wrapped in a sleek React dashboard.",
      tech: ["React", "Node.js", "OpenAI API"],
      gradient: "from-violet-600 to-indigo-500",
      link: "https://github.com/albert4183r7/ai-invoice-generator"
    }
  ],
  experience: [
    { company: "PT. ZTE Indonesia", role: "Service Delivery Engineer Intern", period: "Jul 2024 — Oct 2024", description: "Managed critical data center infrastructure (BMS). Solved complex connectivity puzzles using VLAN segmentation and CLI configuration, ensuring 99.9% monitoring uptime." },
    { company: "Bangkit Academy", role: "Cloud Computing Cohort", period: "Feb 2024 — Dec 2024", description: "Selected as a top-tier cohort member. Led the cloud architecture for a capstone project, mastering containerization and microservices deployment on GCP." },
    { company: "Institut Teknologi Bandung", role: "B.S. Telecommunication Engineering", period: "Aug 2021 — Jul 2025", description: "Thesis on V2V (Vehicle-to-Vehicle) communication optimization using Deep Reinforcement Learning. GPA: 3.67/4.00." }
  ]
};