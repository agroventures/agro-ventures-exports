import {
  Package,
  Truck,
  Shield,
  FileCheck,
  HeadphonesIcon,
  Globe,
  Warehouse,
  FlaskConical,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      "Vanilla-Pods-Extraction-Grade",
      "Vanilla-Pods-Gourmet-Grade",
      "Vanilla Seeds",
      "Vanilla Extracts",
      "Vanilla Powder",
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Vanilla Process", href: "/vanilla-process" },
  { name: "Contact", href: "/contact" },
];

// export const products = [
//   { name: "Vanilla-Pods-Extraction-Grade", href: "#" },
//   { name: "Vanilla-Pods-Gourmet-Grade", href: "#" },
//   { name: "Vanilla Seeds", href: "#" },
//   { name: "Vanilla Extracts", href: "#" },
//   { name: "Vanilla Powder", href: "#" }
// ];

export const products = [
  {
    id: 1,
    name: "Vanilla-Pods-Extraction-Grade",
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    description: "Premium quality turmeric with high curcumin content",
    rating: 4.9,
    origin: "Kerala, India",
  },
  {
    id: 2,
    name: "Basmati Rice",
    category: "grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    description: "Extra long grain premium basmati rice",
    rating: 4.8,
    origin: "Punjab, India",
  },
  {
    id: 3,
    name: "Red Chili Powder",
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=600&q=80",
    description: "Vibrant red chili with perfect heat level",
    rating: 4.7,
    origin: "Guntur, India",
  },
  {
    id: 4,
    name: "Green Cardamom",
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    description: "Aromatic green cardamom pods",
    rating: 4.9,
    origin: "Kerala, India",
  },
  {
    id: 5,
    name: "Chickpeas (Kabuli)",
    category: "pulses",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&q=80",
    description: "Large white chickpeas, export quality",
    rating: 4.6,
    origin: "Madhya Pradesh, India",
  },
  {
    id: 6,
    name: "Groundnut Oil",
    category: "oils",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    description: "Cold pressed natural groundnut oil",
    rating: 4.8,
    origin: "Gujarat, India",
  },
  {
    id: 7,
    name: "Cumin Seeds",
    category: "spices",
    image:
      "https://images.unsplash.com/photo-1599909533353-f2b1fb90a76a?w=600&q=80",
    description: "Premium quality whole cumin seeds",
    rating: 4.7,
    origin: "Rajasthan, India",
  },
  {
    id: 8,
    name: "Yellow Lentils",
    category: "pulses",
    image:
      "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=600&q=80",
    description: "Split yellow lentils (Toor Dal)",
    rating: 4.5,
    origin: "Maharashtra, India",
  },
];

export const support = [
  { name: "Contact Us", href: "#contact" },
  { name: "FAQ", href: "#" },
  { name: "Shipping Info", href: "#" },
  { name: "Request Quote", href: "#" },
  { name: "Track Order", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

export const services = [
  {
    icon: Package,
    title: "Creating Awareness",
    excerpt:
      "The Sri Lankan Vanilla Initiative is one of the leading pioneers.",
    description:
      "The Sri Lankan Vanilla Initiative is one of the leading pioneers in the cultivation and processing of Vanilla in Sri Lanka. With more than two decades of experience in Vanilla production, this esteemed group is committed to sustainable cultivating and carefully oversees each process from start to finish with a hands-on approach. Through contract farming partnerships and their improved techniques, the Sri Lankan Vanilla Initiative provides small and large farmers with an opportunity for success through vanilla cultivation. The Initiative also guarantees 100% buyback at the farm gate prices that are competitive within the market and assurances of a Minimum Support Price. With their expertise, passion, and dedication, the Indian Vanilla Initiative has become a trusted leader in many communities throughout Sri Lanka.",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Quality Planting Material",
    excerpt:
      "SLVI's nursery is at the forefront of the effort to keep vanilla farming alive.",
    description:
      "SLVI's nursery is at the forefront of the effort to keep vanilla farming alive and well in Sri Lanka. The nursery provides healthy, robust vanilla vines to farmers for cultivation each year, offering an annual supply capacity of 400,000 saplings. Our experienced field officers deliver these saplings directly to farmers in order to maximize the success rate of cultivation. Since its inception, SLVI's nursery has been dedicated to providing only the highest quality vanilla vines so that farmers can increase their yields and farmers can participate in this lucrative opportunity that has been a cornerstone of Indian culture for centuries.",
    color: "secondary",
  },
  {
    icon: FileCheck,
    title: "Vanilla Cultivation",
    excerpt:
      "SLVI has been dedicated to bringing the highest quality products to customers.",
    description:
      "SLVI has been dedicated to bringing the highest quality products to customers around the world for two decades. It takes passion, commitment and an ongoing dedication to knowledge, both the science of cultivation and the practical aspects of farming, to make that happen. SLVI is continually upgrading their methods and technology while also being open to feedback from farmers in order to deliver fruits and vegetables that embody farm-fresh flavor and nutrition. Experience global farm-to-table freshness with SLVI.",
    color: "primary",
  },
  {
    icon: Warehouse,
    title: "Contract Farming",
    excerpt:
      "SLVI's mission is to empower farmers across Sri Lanka by providing them all tools.",
    description:
      "SLVI's mission is to empower farmers across Sri Lanka by providing them with the tools and resources needed to produce high-quality vanilla crops. Through interactive sessions, SLVI familiarizes farmers with the benefits of vanilla cultivation and offers a farming contract that guarantees 100% crop purchase and a minimum selling price. Our team of experts ensures that each step of the process meets with world-class standards, from growing and harvesting all the way through distillation and export, making sure each batch of vanilla produced is of optimal quality and freshness. We are committed to bringing our customers an unbeatable selection of premium vanilla products sourced directly from our trusted network of family-run farms.",
    color: "secondary",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Hassan",
    position: "Import Manager",
    company: "Gulf Foods Trading, UAE",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "AgroVentures has been our trusted partner for over 5 years. Their spices are of exceptional quality and the delivery is always on time. Highly recommended for any import business.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    position: "Procurement Head",
    company: "Organic Foods UK",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "The quality of basmati rice we receive from AgroVentures is unmatched. Their attention to quality control and documentation makes importing hassle-free.",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CEO",
    company: "Asian Spice Imports, Singapore",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "Working with AgroVentures has transformed our supply chain. Their team is responsive, professional, and always delivers what they promise.",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    position: "Operations Director",
    company: "Sabores del Mundo, Spain",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Exceptional service and premium quality products. AgroVentures understands the European market requirements perfectly.",
  },
];
