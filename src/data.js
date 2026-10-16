import {
  Mic2, Presentation, Trophy, Handshake, Stethoscope, Network,
  Landmark, Users, PlaneTakeoff, Compass,
  Lightbulb, Link2, Briefcase, Scale,
  Sparkles, Store, UserRound, GraduationCap,
} from 'lucide-react'

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
  'Activate a local-to-global mindset within the Osun youth population',
  'Reduce youth migration by creating viable entrepreneurial and career opportunities within the state',
  'Build a strong innovation ecosystem that supports early-stage ideas, student-led startups, and sector-based growth',
  'Influence public policy that improves the ease of doing business in Osun',
  'Foster meaningful B2B and B2P interactions',
  'Establish long-term structures, such as the Osun Business Network (OBN), for year-round support',
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
    title: 'No Unified Economic Vision for Youths (18–45)',
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
    items: ['Masterclasses and training sessions', 'Innovation Pitch Grant (₦1,000,000 total)', 'Mentorship sessions', 'Access to local and global knowledge', 'SME capacity-building programs'],
  },
  {
    icon: Link2,
    title: 'Collaboration & Network Building',
    items: ['B2B Matchmaking', 'B2P Matchmaking', 'Professional and business networking lounges', 'Diaspora-to-local partnership sessions', 'The Osun Business Network (OBN) for year-round engagement'],
  },
  {
    icon: Briefcase,
    title: 'Economic Diversity & Job Creation',
    items: ['Showcasing emerging sectors', 'Encouraging digital careers and remote work', 'Bridging industries: tech, agriculture, fashion, health, retail, finance, creative arts', 'Linking youths to employment opportunities', 'Empowering businesses to hire locally'],
  },
  {
    icon: Scale,
    title: 'Government & Policy Engagement',
    items: ['Conversations with policymakers', 'Advocacy for SME-friendly policies', 'Dialogue on taxes, ease of doing business, permits, and regulation', 'Building a stronger private–public partnership for economic growth'],
  },
]

export const PROGRAMME = [
  { icon: Mic2, title: 'Keynote Sessions', body: 'Experts across business, policy, technology, creative industries, finance, education, and entrepreneurship.' },
  { icon: Presentation, title: 'Workshops & Panels', body: 'Practical sessions and panel conversations addressing real business challenges.' },
  { icon: Trophy, title: 'Innovation Pitch Competition', body: 'Young innovators pitch for a share of ₦1,000,000 in grants.', featured: true },
  { icon: Handshake, title: 'B2B & B2P Matchmaking', body: 'Connecting businesses, professionals, and students to opportunities.' },
  { icon: Stethoscope, title: 'Business Clinic', body: 'Entrepreneurs meet mentors, advisors, professionals, and investors.' },
  { icon: Network, title: 'Osun Business Network Launch', body: 'A year-round digital and physical platform for collaboration and growth.' },
]

export const AUDIENCE = [
  { icon: Sparkles, title: 'Youths (18–45)', body: 'Students, job-seekers, young innovators, creators, freelancers, and aspiring entrepreneurs.' },
  { icon: Store, title: 'Entrepreneurs & Business Owners', body: 'SMEs, startups, traders, creative businesses, digital entrepreneurs, and local service providers.' },
  { icon: UserRound, title: 'Professionals', body: 'Corporate workers in the private and public sector, government agencies, NGOs, banking, tech, education, and more.' },
  { icon: GraduationCap, title: 'Higher Institution Students', body: 'Those with ideas, innovation projects, or early-stage startups who need a platform and support to grow.' },
]

export const SPEAKER_TRACKS = ['Business', 'Policy', 'Technology', 'Creative Industries', 'Finance', 'Education', 'Entrepreneurship', 'Diaspora']

export const STANDS_FOR = [
  "Empowering Osun's economic backbone (youths & SMEs)",
  'Retaining talent and building new opportunities',
  'Creating a thriving local market',
  'Scaling businesses from Osogbo to the world',
  'Driving sustainable wealth creation',
  'Supporting business-friendly policy reforms',
  'Building a connected, innovative Osun',
]

export const MARQUEE = ['Business', 'Innovation', 'Collaboration', 'Local to Global', 'Jobs', 'Investment', 'Policy', 'Youth', 'SMEs', 'Diaspora']

export const FAQS = [
  {
    q: 'What is OLEC?',
    a: 'The Osun Local Economy Conference is a yearly, impact-driven conference designed to catalyze economic transformation in Osun State by empowering youths, entrepreneurs, professionals, innovators, and policymakers with the tools, partnerships, networks, and mindset to build sustainable businesses and careers within the state.',
  },
  {
    q: 'Who should attend?',
    a: 'Youths aged 18–45, entrepreneurs and business owners, professionals across the private and public sector, and higher institution students with ideas or early-stage startups. Investors, policymakers, and Osun professionals in the diaspora are also key participants.',
  },
  {
    q: "I'm an Osun indigene living outside the state or abroad. Is OLEC for me?",
    a: 'Absolutely. OLEC brings together local and diaspora Osun professionals, and includes dedicated diaspora-to-local partnership sessions to connect global experience with local opportunity.',
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
    a: 'Launching at OLEC, the OBN is a year-round digital and physical platform for collaboration and growth. It keeps the momentum going long after the conference ends.',
  },
  {
    q: 'How can my organisation partner or sponsor?',
    a: 'We welcome partners who share our vision of a self-sustaining Osun economy. Download the partnership & sponsorship deck from this page, or send us an email and our team will walk you through the options.',
  },
]
