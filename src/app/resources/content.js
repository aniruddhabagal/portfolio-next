
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aniruddha",
  lastName: "Bagal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "India",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, AI innovation, and share insights on community building and development.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aniruddhabagal",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aniruddhabagal/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bagalaniruddha@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer & Community Builder</>,
  subline: (
    <>
      I'm a tech enthusiast and problem solver at heart, driven by the intersection of AI innovation and community impact.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a tech enthusiast and problem solver at heart, driven by the intersection of AI innovation and community impact. My journey spans from crafting scalable full-stack applications to pioneering AI-powered solutions that push the boundaries of what's possible. With a foundation in computer science and a passion for education, I've dedicated myself to building technology that makes complex systems more accessible and efficient.
      </>
    ),
  },
  work: {
    display: true,
    title: "Leadership & Community Impact",
    experiences: [
      {
        company: "Google Developer Student Clubs",
        role: "Lead",
        timeframe: "2022 - Present",
        achievements: [
          "Selected as one of 350 Google Developer Student Club Leads across India",
          "Led technical workshops and mentored 400+ students in DSA and modern tech stacks",
          "Organized multiple community events and developer meetups"
        ]
      },
      {
        company: "GitHub Campus Expert",
        role: "Technical Community Leader",
        timeframe: "2022 - Present",
        achievements: [
          "Fostering open-source collaboration and knowledge sharing",
          "Built and managed the Open Source Lab community at VVCE",
          "Active contributor to open-source projects and documentation"
        ]
      },
      {
        company: "UiPath",
        role: "Student Developer Champion",
        timeframe: "2022 - Present",
        achievements: [
          "Selected among 82 champions across 5 countries",
          "Mentored students in modern web technologies and cloud computing",
          "Regular speaker at tech conferences and community events"
        ]
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills & Achievements",
    skills: [
      {
        title: "Full Stack Development",
        description: "Experienced in modern JavaScript frameworks and cloud technologies, building scalable applications and SaaS platforms."
      },
      {
        title: "AI/ML Development",
        description: "Created Genius - a comprehensive AI SaaS platform with multi-modal generation capabilities. Pioneered AI-powered content generation systems improving efficiency by 40%."
      },
      {
        title: "System Architecture",
        description: "Developed enterprise-grade evaluation systems handling thousands of concurrent users. Built innovative ML-based extensions for false information detection."
      },
      {
        title: "Community Building",
        description: "Founded and grew multiple technical communities, organized 20+ workshops, and mentored 400+ students in various technologies."
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Technical Insights & Experiences",
  description: `Read what ${person.name} has been exploring in tech and community building`,
};

const work = {
  label: "Work",
  title: "Projects & Contributions",
  description: `Technical projects and community initiatives by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Community Events & Tech Workshops",
  description: `Moments from technical workshops and community events by ${person.name}`,
  images: []
};

export { person, social, newsletter, home, about, blog, work, gallery };
