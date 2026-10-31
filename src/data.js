import {
  Mic2, Presentation, Trophy, Handshake, Stethoscope, Network,
  Landmark, Users, PlaneTakeoff, Compass,
  Lightbulb, Link2, Briefcase, Scale,
  Sparkles, Store, UserRound, GraduationCap,
} from 'lucide-react'
import durotoye from './assets/img/speakers/durotoye.jpg'
import adeyemo from './assets/img/speakers/adeyemo.jpg'
import ojesanmi from './assets/img/speakers/ojesanmi.jpg'

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#problem', label: 'The Problem' },
  { href: '#pillars', label: 'Pillars' },
  { href: '#programme', label: 'Programme' },
  { href: '#audience', label: "Who It's For" },
  { href: '#faq', label: 'FAQ' },
]

export const BRIDGES = [
  ['Ideas', 'Execution'],
  ['Talents', 'Opportunities'],
  ['Government', 'Citizens'],
  ['Local businesses', 'Global markets'],
]

export const MISSION = [
  'Promote local entrepreneurship and empower SMEs with skills, tools, and networks',
  'Bridge the collaboration gap between businesses, professionals, government, and investors',
  'Activate a local to global mindset within the Osun youth population',
  'Reduce youth migration by creating viable entrepreneurial and career opportunities within the state',
  'Build a strong innovation ecosystem that supports new ideas, startups led by students, and growth across sectors',
  'Influence public policy that improves the ease of doing business in Osun',
  'Foster meaningful B2B and B2P interactions',
  'Establish lasting structures, such as the Osun Business Network (OBN), for support all year round',
]

export const PROBLEMS = [
  {
    icon: Landmark,
    title: 'Overdependence on Federal Allocation',
    body: "For decades, Osun's economy has been heavily dependent on monthly federal allocation. This model is unsustainable and limits the state's economic resilience. Businesses are not thriving at the scale they should, and government revenue remains insufficient for development.",
    points: [],
  },
  {
    icon: Users,
    title: 'Poor B2B & B2P Collaboration',
    body: 'Many businesses operate in silos. By bringing professionals, experts, and entrepreneurs into one space, the conference provides the collaborative environment necessary to accelerate business growth.',
    lead: 'Many businesses lack:',
    points: ['Strategic partnerships', 'Professional expertise', 'Market access', 'Collaborators and mentors', 'Exposure to innovation'],
  },
  {
    icon: PlaneTakeoff,
    title: 'Talent Migration (Brain Drain)',
    body: 'Every year, thousands of Osun students graduate from universities and relocate to Lagos, Abuja, or other states seeking work, better pay, or a more vibrant business environment.',
    lead: 'This leads to:',
    points: ['Loss of skilled manpower', 'Shrinking local private sector', 'Weak innovation ecosystem', 'Lower employment opportunities for youths'],
  },
  {
    icon: Compass,
    title: 'No Unified Economic Vision for Youths (18 to 45)',
    body: "The youth population is the backbone of Osun's future. OLEC provides a unifying platform to equip this demographic and activate their potential.",
    lead: 'Some lack:',
    points: ['Access to mentors', 'Funding', 'Business advisory', 'Digital skills', 'Exposure to global opportunities', 'Networking platforms'],
  },
]

export const REVERSE = [
  'Where you can build global businesses locally',
  'Where professionals can grow',
  'Where youths have opportunities',
  'Where innovation is nurtured',
]

export const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Business Development & Innovation',
    items: ['Masterclasses and training sessions', 'Innovation Pitch Grant (₦1,000,000 total)', 'Mentorship sessions', 'Access to local and global knowledge', 'Capacity building programs for SMEs'],
  },
  {
    icon: Link2,
    title: 'Collaboration & Network Building',
    items: ['B2B Matchmaking', 'B2P Matchmaking', 'Professional and business networking lounges', 'Partnership sessions between the diaspora and local businesses', 'The Osun Business Network (OBN) for engagement all year round'],
  },
  {
    icon: Briefcase,
    title: 'Economic Diversity & Job Creation',
    items: ['Showcasing emerging sectors', 'Encouraging digital careers and remote work', 'Bridging industries: tech, agriculture, fashion, health, retail, finance, creative arts', 'Linking youths to employment opportunities', 'Empowering businesses to hire locally'],
  },
  {
    icon: Scale,
    title: 'Government & Policy Engagement',
    items: ['Conversations with policymakers', 'Advocacy for policies that support SMEs', 'Dialogue on taxes, ease of doing business, permits, and regulation', 'Building stronger partnerships between the public and private sectors for economic growth'],
  },
]

export const PROGRAMME = [
  { icon: Mic2, title: 'Keynote Sessions', body: 'Experts across business, policy, technology, creative industries, finance, education, and entrepreneurship.' },
  { icon: Presentation, title: 'Workshops & Panels', body: 'Practical sessions and panel conversations addressing real business challenges.' },
  { icon: Trophy, title: 'Innovation Pitch Competition', body: 'Young innovators pitch for a share of ₦1,000,000 in grants.', featured: true },
  { icon: Handshake, title: 'B2B & B2P Matchmaking', body: 'Connecting businesses, professionals, and students to opportunities.' },
  { icon: Stethoscope, title: 'Business Clinic', body: 'Entrepreneurs meet mentors, advisors, professionals, and investors.' },
  { icon: Network, title: 'Osun Business Network Launch', body: 'A digital and physical platform for collaboration and growth all year round.' },
]

export const AUDIENCE = [
  { icon: Sparkles, title: 'Youths (18 to 45)', body: 'Students, job seekers, young innovators, creators, freelancers, and aspiring entrepreneurs.' },
  { icon: Store, title: 'Entrepreneurs & Business Owners', body: 'SMEs, startups, traders, creative businesses, digital entrepreneurs, and local service providers.' },
  { icon: UserRound, title: 'Professionals', body: 'Corporate workers in the private and public sector, government agencies, NGOs, banking, tech, education, and more.' },
  { icon: GraduationCap, title: 'Higher Institution Students', body: 'Those with ideas, innovation projects, or new startups who need a platform and support to grow.' },
]

export const THEME = 'Economy Beyond Allocation'

// Add a `photo` and `bio` (one string per paragraph) to any speaker and they appear on their card.
export const SPEAKERS = [
  {
    name: 'Prof. Adeolu Durotoye',
    role: 'Keynote Speaker',
    title: 'Global Finance Leader & Founder, AdeJane Foundation',
    photo: durotoye,
    bio: [
      'Professor Adeolu Durotoye is a distinguished global leader, accomplished educator, author, speaker, philanthropist, preacher, and financial advisor whose work spans academia, leadership, community development, financial empowerment, and Christian ministry. With a life dedicated to developing people and strengthening communities, he has become a passionate advocate for education, financial literacy, wealth creation, and the building of enduring legacies across generations.',
      'A prolific scholar, Professor Durotoye has authored books and published numerous academic articles. His scholarly work has attracted citations internationally, contributing to academic discourse and extending the reach of his ideas beyond the institutions in which he has served.',
      'At the heart of Professor Durotoye’s work is a deep commitment to service and improving the lives of others, particularly people facing economic and social disadvantages.',
      'This passion inspired him to establish the AdeJane Foundation, a philanthropic initiative dedicated to empowering individuals and communities and helping people pursue opportunities that can transform their lives.',
      'Through the foundation, Professor Durotoye has championed and supported projects designed to create meaningful and lasting impact. Its work reflects his conviction that achievement carries with it a responsibility to create opportunities for others. Through various initiatives, the AdeJane Foundation has helped individuals pursue their dreams, overcome barriers, and work toward better futures.',
      'Through education, financial empowerment, philanthropy, leadership, and Christian service, Professor Adeolu Durotoye continues to pursue a singular vision: to transform lives, create opportunities, and help build a future in which individuals, families, and communities can thrive for generations to come.',
    ],
  },
  { name: 'Adeniyi Adeyemo', role: 'Convener', title: 'Osun Local Economy Conference', photo: adeyemo },
  { name: 'Adedayo Oderinu', role: 'Speaker', title: 'Founder, Afinju 90.7 FM' },
  { name: 'Arch. Seye Opaleye', role: 'Speaker', title: 'Founder, Joycetech Global' },
  { name: 'Taiwo Olaonipekun', role: 'Speaker', title: 'Founder, Farmfixers' },
  { name: 'Dr. Ishola Modupe Olanrewaju', role: 'Speaker', title: 'Founder, Orokifoods' },
  {
    name: 'Oluwaseyi Jeremiah Ojesanmi',
    role: 'Speaker',
    title: 'Senior Software Engineer & Founder, JASOT Academy',
    photo: ojesanmi,
    bio: [
      'Jeremiah is a technology entrepreneur and senior software engineer with over a decade of experience turning business challenges into practical digital solutions. He founded JASOT Academy, a remote technology education and software solutions company with a distributed team across Nigeria.',
      'A Computer Engineering graduate of LAUTECH, he holds the Kubernetes and Cloud Native Associate (KCNA) certification. His experience includes remote engineering work with Raw Technology in Ireland and contributions to Ledgera, a fintech platform connecting merchants and supporting business management.',
      'Based in Osogbo, Jeremiah is passionate about developing digital talent and helping entrepreneurs use technology to strengthen their businesses, reach wider markets, and create economic opportunities. His work reflects a clear conviction: build from where you are and create value beyond where you live.',
    ],
  },
]

export const STANDS_FOR = [
  "Empowering Osun's economic backbone (youths & SMEs)",
  'Retaining talent and building new opportunities',
  'Creating a thriving local market',
  'Scaling businesses from Osogbo to the world',
  'Driving sustainable wealth creation',
  'Supporting policy reforms that favour business',
  'Building a connected, innovative Osun',
]

export const MARQUEE = ['Business', 'Innovation', 'Collaboration', 'Local to Global', 'Jobs', 'Investment', 'Policy', 'Youth', 'SMEs', 'Diaspora']

export const FAQS = [
  {
    q: 'What is OLEC?',
    a: 'The Osun Local Economy Conference is a yearly conference focused on impact, designed to catalyze economic transformation in Osun State by empowering youths, entrepreneurs, professionals, innovators, and policymakers with the tools, partnerships, networks, and mindset to build sustainable businesses and careers within the state.',
  },
  {
    q: 'Who should attend?',
    a: 'Youths aged 18 to 45, entrepreneurs and business owners, professionals across the private and public sector, and higher institution students with ideas or new startups. Investors, policymakers, and Osun professionals in the diaspora are also key participants.',
  },
  {
    q: "I'm an Osun indigene living outside the state or abroad. Is OLEC for me?",
    a: 'Absolutely. OLEC brings together local and diaspora Osun professionals, and includes dedicated partnership sessions between the diaspora and local businesses to connect global experience with local opportunity.',
  },
  {
    q: 'How does the Innovation Pitch competition work?',
    a: 'Young innovators and student founders pitch their ideas for a share of ₦1,000,000 in grants. Message us on WhatsApp to express interest and we will share application details and timelines as they are announced.',
  },
  {
    q: 'What are B2B and B2P matchmaking sessions?',
    a: 'Structured sessions that connect businesses with other businesses (B2B) and with professionals (B2P), opening doors to partnerships, expertise, market access, collaborators, and mentors.',
  },
  {
    q: 'What is the Osun Business Network (OBN)?',
    a: 'Launching at OLEC, the OBN is a digital and physical platform for collaboration and growth all year round. It keeps the momentum going long after the conference ends.',
  },
  {
    q: 'How can my organisation partner or sponsor?',
    a: 'We welcome partners who share our vision of an Osun economy that sustains itself. Download the partnership & sponsorship deck from this page, or send us an email and our team will walk you through the options.',
  },
]
