import { BrainCircuit, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export type FocusArea = {
  slug: string;
  number: string;
  icon: typeof ShieldCheck;
  title: string;
  short: string;
  color: 'blue' | 'green' | 'orange' | 'red';
  tagline: string;
  intro: string;
  sections: { heading: string; body: string }[];
  outcomes: string[];
};

export const focusAreas: FocusArea[] = [
  {
    slug: 'cybersecurity',
    number: '01',
    icon: ShieldCheck,
    title: 'Cybersecurity education',
    short: 'We teach kids and teens how to stay safe online, understand cyber threats, and explore ethical hacking.',
    color: 'blue',
    tagline: 'Safe online, confident offline',
    intro:
      'Our cybersecurity education track gives young people the knowledge to protect themselves and their communities in the digital age. Through interactive workshops, real-world scenarios, and hands-on challenges, we turn online safety into a habit — not a reaction.',
    sections: [
      {
        heading: 'Digital safety fundamentals',
        body: 'Students learn how to create strong passwords, recognize phishing attempts, manage privacy settings, and understand the footprint they leave online. We use age-appropriate scenarios so every child can relate the lessons to their own devices and apps.',
      },
      {
        heading: 'Understanding cyber threats',
        body: 'We break down common threats — malware, social engineering, data breaches — in plain language. Young people learn how attacks work so they can spot warning signs and respond calmly instead of panicking.',
      },
      {
        heading: 'Ethical hacking basics',
        body: 'For teens ready to go deeper, we introduce ethical hacking: thinking like an attacker to find weaknesses before bad actors do. We cover permission, responsibility, and the difference between protecting systems and breaking them.',
      },
    ],
    outcomes: [
      'Recognize and avoid phishing and social engineering',
      'Build strong, reusable password habits',
      'Understand privacy settings across popular platforms',
      'Explore ethical hacking as a future career path',
    ],
  },
  {
    slug: 'green-technology',
    number: '02',
    icon: Leaf,
    title: 'EV & green technology',
    short: 'From solar kits to electric vehicle models, we introduce youth to renewable energy and sustainable innovation.',
    color: 'green',
    tagline: 'Powering a sustainable future',
    intro:
      'Our green technology track introduces young people to renewable energy, electric mobility, and climate-friendly innovation. We believe Africa can lead the green transition — and that starts with giving the next generation the tools to understand, build, and improve sustainable technology.',
    sections: [
      {
        heading: 'Solar energy workshops',
        body: 'Students work with small solar kits to understand how sunlight becomes electricity. They assemble simple circuits, measure energy output, and see firsthand how renewable energy can power everyday devices.',
      },
      {
        heading: 'Electric vehicle models',
        body: 'We use EV models and components to explain how electric mobility works — batteries, motors, charging. Young people learn why EVs matter for the climate and how Africa can build its own clean transport future.',
      },
      {
        heading: 'Sustainable innovation challenges',
        body: 'Through design challenges, students brainstorm green solutions for their own communities: solar-powered phone charging, efficient lighting, waste-to-energy ideas. We connect sustainability to real problems they see every day.',
      },
    ],
    outcomes: [
      'Understand how solar energy is generated and stored',
      'Explain how electric vehicles work and why they matter',
      'Design simple renewable energy solutions',
      'Connect climate action to everyday life',
    ],
  },
  {
    slug: 'ai-for-nonprofits',
    number: '03',
    icon: Sparkles,
    title: 'AI for nonprofits',
    short: 'We help mission-driven organizations use AI for donor management, reporting, and outreach.',
    color: 'orange',
    tagline: 'Amplifying impact with AI',
    intro:
      'Nonprofits do some of the most important work in our communities — often with limited resources and staff. Our AI for nonprofits track helps these organizations use artificial intelligence to work smarter, reach more people, and spend more time on their mission instead of admin.',
    sections: [
      {
        heading: 'AI for donor management',
        body: 'We show nonprofits how AI tools can help track donor relationships, personalize communications, and identify giving patterns. The goal is stronger relationships and more sustainable funding — without losing the human touch.',
      },
      {
        heading: 'Reporting and storytelling',
        body: 'AI can help turn raw data into clear reports and compelling stories. We train organizations to use AI for impact reports, grant applications, and donor updates — so they can show their work without spending days on formatting.',
      },
      {
        heading: 'Outreach and engagement',
        body: 'From social media to email campaigns, AI tools can help nonprofits reach the right audiences with the right messages. We cover practical, accessible tools that small organizations can start using right away.',
      },
    ],
    outcomes: [
      'Use AI tools to manage donor relationships',
      'Generate reports and impact stories faster',
      'Plan smarter outreach with AI-assisted content',
      'Save hours of admin time each week',
    ],
  },
  {
    slug: 'ai-literacy-schools',
    number: '04',
    icon: BrainCircuit,
    title: 'AI literacy in schools',
    short: 'Through curriculum modules and gamified projects, we demystify AI for students and teachers.',
    color: 'red',
    tagline: 'Understanding AI, not just using it',
    intro:
      'Artificial intelligence is already part of young people’s lives — from search results to social media feeds. Our AI literacy track helps students and teachers understand how AI works, what it can and can’t do, and how to think critically about the technology shaping their world.',
    sections: [
      {
        heading: 'Curriculum modules',
        body: 'We provide ready-to-use modules that fit into existing classes. Students learn what AI is, how models learn from data, and where the boundaries of today’s technology lie — all in language that connects to their everyday experiences.',
      },
      {
        heading: 'Gamified projects',
        body: 'Learning by doing. Students train simple models, play with AI-generated content, and test the limits of chatbots. Through hands-on projects, they see for themselves how AI works — and where it gets things wrong.',
      },
      {
        heading: 'Critical thinking and ethics',
        body: 'We help young people ask the right questions: Who built this AI? What data does it use? Who might it harm? The goal isn’t to fear AI, but to understand it deeply enough to use it responsibly and hold it accountable.',
      },
    ],
    outcomes: [
      'Explain how AI models learn from data',
      'Recognize bias and limitations in AI systems',
      'Use AI tools responsibly and critically',
      'Teach others about AI in everyday language',
    ],
  },
];

export const programs = [
  ['CyberKids Bootcamps', 'Hands-on training in cybersecurity basics.'],
  ['Green Tech Labs', 'Workshops on EVs, solar energy, and sustainability.'],
  ['AI for Impact', 'Practical AI training tailored for nonprofits.'],
  ['School AI Clubs', 'Interactive clubs where students experiment with AI projects.'],
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/cyberkidsafrica/',
  instagram: 'https://www.instagram.com/cyber_kidsafrica/',
  twitter: 'https://twitter.com/cyberkidsafrica',
};
