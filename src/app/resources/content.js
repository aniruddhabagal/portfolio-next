import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aniruddha",
  lastName: "Bagal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer", // Updated role -  adjust as needed
  avatar: "/images/avatar.jpg", // Replace with Aniruddha's avatar path
  location: "India", // Update location as needed
  languages: ["English", "Hindi"], // Update languages as needed
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
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
  headline: <>Software Engineer and Builder</>, //Updated headline
  subline: (
    <>
      I'm Aniruddha, a software engineer building intuitive user experiences.  After hours, I build my own projects.
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
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aniruddha is a software engineer with a passion for transforming complex challenges into simple, elegant design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      // Add Aniruddha's work experience here
    ],
  },
  studies: {
    display: true, 
    title: "Studies",
    institutions: [
      // Add Aniruddha's education details here
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      // Add Aniruddha's technical skills here
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    // Add Aniruddha's gallery images here
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };