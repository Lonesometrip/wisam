import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  mathwork,
  eduskill,
  // Car images
  sclass1,
  bmw1,
  vclass1,
} from "../assets";

export const navLinks = [
  {
    id: "carpool",
    title: "Carpool",
    dropdown: [
      { id: "mercedes-sclass", title: "Mercedes S-Class" },
      { id: "bmw-7", title: "BMW 7" },
      { id: "mercedes-vclass", title: "Mercedes V-Class" },
    ],
  },
  {
    id: "services",
    title: "Services",
    dropdown: [
      { id: "chauffeurservice", title: "Chauffeur Service" },
      { id: "airporttransfer", title: "Airport Transfer" },
      { id: "vip-service", title: "VIP Service" },
    ],
  },
  {
    id: "tourism",
    title: "Tourism",
    dropdown: [
      { id: "beliebte-zielorte", title: "Beliebte Zielorte" },
      { id: "shoppingtours", title: "Shopping Tours" },
      { id: "freizeitparks", title: "Freizeitparks" },
      { id: "bauernhofe", title: "Bauernhöfe" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    id: "mercedes-sclass",
    title: "Mercedes S-Class",
    icon: sclass1
  },
  {
    id: "mercedes-vclass",
    title: "Mercedes V-Class",
    icon: vclass1
  },
  {
    id: "bmw-7",
    title: "BMW 7",
    icon: bmw1
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Executive Chauffeur Service",
    company_name: "Premium Chauffeur | Business Travel",
    icon: eduskill,
    iconBg: "#000000",
    date: "Available 24/7",
    points: [
      "Professional chauffeur service for executives and business professionals with luxury Mercedes S-Class and BMW 7 Series vehicles.",
      "Discreet, reliable transportation with experienced drivers who understand the needs of corporate clients.",
      "Complimentary amenities including Wi-Fi, refreshments, and daily newspapers for productive travel time.",
    ],
  },
  {
    title: "Airport Transfer Service",
    company_name: "Premium Chauffeur | Airport Transfers",
    icon: mathwork,
    iconBg: "#000000",
    date: "All Major Airports",
    points: [
      "Seamless airport transfers with flight monitoring and adjusted pickup times for early arrivals or delays.",
      "Meet and greet service with luggage assistance and priority pickup at all major European airports.",
      "Comfortable, stress-free transportation in luxury vehicles after long flights with 60 minutes of complimentary waiting time.",
    ],
  },
  {
    title: "Group Transportation",
    company_name: "Premium Chauffeur | Group Travel",
    icon: edunet,
    iconBg: "#000000",
    date: "Up to 7 Passengers",
    points: [
      "Spacious Mercedes V-Class vehicles for comfortable group transportation with ample luggage space.",
      "Perfect for family vacations, corporate teams, or small group tours with personalized service.",
      "Wheelchair accessible options available with professional assistance for passengers with mobility needs.",
    ],
  },
];

export const projects = [
  {
    name: "Beliebte Zielorte",
    description:
      "Discover Germany's most popular tourist destinations with our luxury transportation services",
    tags: [
      { name: "Sightseeing", color: "blue-text-gradient" },
      { name: "Cultural Tours", color: "green-text-gradient" },
      { name: "Historical Sites", color: "pink-text-gradient" },
      { name: "City Tours", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "",
  },
  {
    name: "Shopping Tours",
    description:
      "Exclusive shopping experiences at Germany's finest retail destinations with VIP transportation and personal shopping assistance.",
    tags: [
      { name: "Luxury Shopping", color: "blue-text-gradient" },
      { name: "Outlet Tours", color: "green-text-gradient" },
      { name: "VIP Experience", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "",
  },
  {
    name: "Freizeitparks",
    description:
      "Visit Germany's best theme parks and amusement attractions with comfortable luxury transportation for families and groups.",
    tags: [
      { name: "Family Fun", color: "blue-text-gradient" },
      { name: "Theme Parks", color: "green-text-gradient" },
      { name: "Group Tours", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "",
  },
  {
    name: "Bauernhöfe",
    description:
      "Experience authentic German farm life and rural traditions with our guided farm tours and countryside excursions",
    tags: [
      { name: "Rural Tourism", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "",
  },
];
