import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Evan Cheng",
  initials: "EC",
  location: "El Monte, CA",
  locationLink: "https://www.google.com/maps/place/El+Monte,+CA",
  about: "Software Engineer dedicated to building high-quality, scalable full-stack applications.",
  summary: (
    <>
      Software Engineer with experience in .NET, TypeScript, and distributed systems. Skilled in building full-stack features for complex enterprise systems, managing data pipelines, and optimizing search performance with ElasticSearch and MySQL.
    </>
  ),
  avatarUrl: "https://github.com/echeng8.png",
  personalWebsiteUrl: "https://evancheng.dev",
  contact: {
    email: "evancheng42@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/echeng8",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/echeng8/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of California, Irvine",
      degree: "Bachelor of Science in Computer Science",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Fulgent Genetics",
      link: "https://www.fulgentgenetics.com/",
      badges: [".NET Core 8", "EF Core", "MS SQL", "Razor", "jQuery", "HL7"],
      title: "Full Stack Software Engineer",
      start: "2025",
      end: null,
      description: (
        <>
          Developing full-stack features for the Lab Information System (LIS) to support complex enterprise workflows and medical data management.
          <ul className="list-inside list-disc">
            <li>Built a "Worklist" Custom Query Engine allowing lab technicians to execute user-generated logic for advanced data filtering.</li>
            <li>Developed Specimen Inventory Tracking feature with Bartender Label API integration for tracking storage and status.</li>
            <li>Provide production support and debugging for web apps, background daemons, and HL7 data ingress for enterprise clients.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Fulgent Genetics",
      link: "https://www.fulgentgenetics.com/",
      badges: [".NET", "MS SQL", "jQuery", "Audit Logging"],
      title: ".NET Developer",
      start: "2024",
      end: "2025",
      description: (
        <>
          Built corporate compliance 'Audit Logging' pages to track data versioning and developed a PCR Plate Tracking system using flexible JSON-mapped configuration.
        </>
      ),
    },
    {
      company: "GoLinks Enterprises (YC W19)",
      link: "https://www.golinks.io/",
      badges: ["PHP", "MySQL", "Node.js", "OpenAI API", "ElasticSearch", "OAuth"],
      title: "Software Engineer I",
      start: "2022",
      end: "2024",
      description: (
        <>
          Developed RESTful APIs for **Agentic search** AI Chatbots using **RAG** patterns with OpenAI API and real-time data streaming.
          <ul className="list-inside list-disc">
            <li>Built asynchronous ETL pipelines in Node.js to index Google Drive and Jira via OAuth and webhooks.</li>
            <li>Optimized search performance with MySQL Full Text Search and ElasticSearch Vector Search.</li>
            <li>Designed Relational Schemas for SaaS features including Okta SSO/SCIM, Metabase BI, and OAuth.</li>
          </ul>
        </>
      ),
    },
    {
      company: "GoLinks Enterprises (YC W19)",
      link: "https://www.golinks.io/",
      badges: ["PHP", "RESTful API", "JSON", "OAuth", "Google Apps Script"],
      title: "Software Engineer Intern",
      start: "2022",
      end: "2022",
      description: "Developed external RESTful APIs for customer access and integrated Google Workspace APIs with core SaaS app.",
    },
  ],
  skills: [
    "C#",
    ".NET Core 6/8",
    "TypeScript",
    "JavaScript",
    "SQL (T-SQL)",
    "PHP",
    "Python",
    "C/C++",
    "React",
    "Node.js",
    "Entity Framework (EF Core)",
    "MS SQL Server",
    "AWS (S3, RDS, EC2)",
    "RESTful APIs",
    "ElasticSearch",
    "Docker",
    "Redis",
    "Git",
  ],
  projects: [
    {
      title: "Skeleton Hell",
      techStack: ["C#", "Unity3D", "Steam Works"],
      description:
        "Technical Hobby Project: Game developed with C# and Unity3D; 27,000+ downloads on Steam.",
      link: {
        label: "store.steampowered.com",
        href: "https://store.steampowered.com/app/3082170/Skeleton_Hell/",
      },
    },
    {
      title: "Self Hosted Media Server",
      techStack: ["Docker", "Linux", "Self-hosting"],
      description:
        "Technical Hobby Project: Deployed open source media server solutions via Docker and Linux environments.",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      techStack: ["AWS", "Cloud Infrastructure"],
      description:
        "Professional certification covering cloud infrastructure and core services.",
      link: {
        label: "credly.com",
        href: "https://www.credly.com/badges/3249c78f-d429-4282-a8a8-237f871bacaa",
      },
    },
  ],
} as const;

