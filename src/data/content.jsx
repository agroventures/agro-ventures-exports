import {
  Package,
  Truck,
  Shield,
  FileCheck,
  HeadphonesIcon,
  Globe,
  Warehouse,
  FlaskConical,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Award,
  Users,
  Target,
  Leaf,
} from "lucide-react";

// Navigation Links
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

// Products
export const products = [
  {
    id: 1,
    name: "Non-Alcoholic Vanilla Extract",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    description: (
      <>
        <p className="text-sm text-justify">
          Indulge in the exquisite essence of{" "}
          <span className="font-semibold">
            pure, hand-selected Sri Lankan vanilla beans
          </span>
          , meticulously extracted through a gentle alcohol-free process.
          Infused in{" "}
          <span className="font-semibold">
            plant-based vegetable glycerin and purified water
          </span>
          , this extract captures the rich, creamy aroma and delicate floral
          notes of authentic vanilla in its most natural form. <br /> Free from
          artificial additives, sugars, and preservatives, our{" "}
          <span className="font-semibold">
            plant-based vegetable glycerin and purified water
          </span>
          is the perfect choice for{" "}
          <span className="font-semibold">
            gourmet baking, fine beverages, confectionery, skincare, and
            aromatherapy formulations
          </span>{" "}
          that demand uncompromising purity and flavor excellence. Experience
          the{" "}
          <span className="font-semibold">
            true taste of nature — crafted to perfection in Sri Lanka
          </span>
          .
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Purified Water</li>
        <li>Vegetable Glycerin (Plant-Based)</li>
        <li>Natural Vanilla Bean Extractives</li>
        <p>(No Alcohol, No Artificial Flavours, No Preservatives)</p>
      </ul>
    ),
  },
  {
    id: 2,
    name: "Alcoholic Vanilla Extract",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    description: (
      <>
        <p className="text-sm text-justify">
          Experience the rich, complex aroma of{" "}
          <span className="font-semibold">
            hand-selected Sri Lankan vanilla beans
          </span>
          carefully macerated in{" "}
          <span className="font-semibold">high-quality food-grade alcohol</span>
          to create a truly authentic vanilla extract. This classic extraction
          method ensures maximum flavor intensity, capturing the deep, sweet,
          and creamy notes that only natural vanilla can offer.
          <br /> Perfect for
          <span className="font-semibold">
            gourmet baking, confections, beverages, and culinary creations,
          </span>
          our{" "}
          <span className="font-semibold">
            Premium Alcoholic Vanilla Extract
          </span>{" "}
          brings the elegance and depth of real vanilla to every recipe. Crafted
          with care, it represents the finest standards of flavor and purity.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Food-Grade Alcohol</li>
        <li>Natural Vanilla Bean Extractives</li>
        <li>Purified Water (optional, to adjust strength)</li>
      </ul>
    ),
  },
  {
    id: 3,
    name: "Natural Vanilla Paste",
    image:
      "https://images.unsplash.com/photo-1599909533681-74570b4f8a66?w=600&q=80",
    description: (
      <>
        <p className="text-sm text-justify">
          Experience the rich, full-bodied flavor of{" "}
          <span className="font-semibold">
            hand-harvested Sri Lankan vanilla beans
          </span>{" "}
          in a convenient, ready-to-use paste. Our{" "}
          <span className="font-semibold">Natural Vanilla Paste</span> combines{" "}
          <span className="font-semibold">
            finely ground vanilla seeds, natural vanilla extract, and a smooth,
            food-grade binder
          </span>{" "}
          to deliver the true essence of vanilla in every spoonful. Perfect for{" "}
          <span className="font-semibold">
            gourmet baking, desserts, sauces, ice creams, and specialty
            beverages
          </span>
          , this paste ensures consistent flavor, beautiful specks of real
          vanilla, and the aromatic richness of authentic beans — without any
          artificial additives.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Natural Vanilla Beans</li>
        <li>Natural Vanilla Extract (Alcohol or Glycerin-Based, depending on formulation)</li>
        <li>Natural Thickening/Binder (e.g., Gum Acacia or Corn Syrup)</li>
      </ul>
    ),
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

//Support Links
export const support = [
  { name: "Contact Us", href: "#contact" },
  { name: "FAQ", href: "#" },
  { name: "Shipping Info", href: "#" },
  { name: "Request Quote", href: "#" },
  { name: "Track Order", href: "#" },
  { name: "Terms & Conditions", href: "#" },
];

//Services
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

//Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Mr. Udara Madushanka",
    image: "/src/assets/reviews/testimonials_01.jpg",
    rating: 5,
    text: "They gave me a far greater service than I had expected, as well as paying the returns on time, so I'm extremely happy with Agro Ventures Plantations.",
  },
  {
    id: 2,
    name: "Mr. Withthamperuma Arachchige Yasendra",
    image: "/src/assets/reviews/testimonials_02.jpg",
    rating: 5,
    text: "I got my first profit payment right on time from Agro Ventures Plantations. Looking forward to the future to come. Thank you Agro Ventures!",
  },
  {
    id: 3,
    name: "Mr. Malyoganam Ilayarajah",
    image: "/src/assets/reviews/testimonials_03.jpg",
    rating: 5,
    text: "I receive the monthly payments on time, and I'm happy to say that this is a great investment choice for anyone.",
  },
  {
    id: 4,
    name: "Mr. G N Udaya Kumara",
    image: "/src/assets/reviews/testimonials_04.jpg",
    rating: 5,
    text: "Agro Ventures is a company you can trust for your investments. Great service and timely returns.",
  },
  {
    id: 5,
    name: "Mr. Manjula Wimalasena",
    image: "/src/assets/reviews/testimonials_05.jpg",
    rating: 5,
    text: "I live in South Korea and found Agro Ventures to be a reliable investment partner. Highly recommended.",
  },
];

//Company List
export const companies = [
  { name: "plantations", img: "src/assets/companies/1.png" },
  { name: "development", img: "src/assets/companies/2.png" },
  { name: "hasara", img: "src/assets/companies/3.jpeg" },
  { name: "exports", img: "src/assets/companies/4.png" },
  { name: "vanilla shop", img: "src/assets/companies/5.png" },
];

//Social Links
export const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/agroventuresplantations/" },
  { icon: Twitter, href: "https://twitter.com/agroventuresltd" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/agroventuresplantations/",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCbT0jr2Rj_fC0-WujlURKjA",
  },
];

//Slides
export const slides = [
  {
    title: "Premium Agricultural",
    subtitle: "Exports Worldwide",
    description:
      "Delivering the finest quality spices, grains, and agricultural products from India to global markets.",
    image: "/src/assets/hero/hero1.jpg",
  },
  // {
  //   title: "From Farm to",
  //   subtitle: "Your Doorstep",
  //   description: "Connecting farmers with international buyers through sustainable and ethical practices.",
  //   image: "https://images.unsplash.com/photo-1682482001313-0581da8e2b58?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  {
    title: "Quality Certified",
    subtitle: "Global Standards",
    description:
      "ISO certified export processes ensuring premium quality in every shipment.",
    image: "/src/assets/hero/hero2.avif",
  },
];

// Features
export const features = [
  { icon: Award, text: "ISO Certified" },
  { icon: Truck, text: "Fast Delivery" },
];

// Values
export const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between Indian farmers and global markets, ensuring fair trade and premium quality.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description:
      "To become the most trusted agricultural export company, known for quality, reliability, and sustainability.",
  },
  {
    icon: Leaf,
    title: "Our Values",
    description:
      "Integrity, sustainability, and excellence in every grain we export and every relationship we build.",
  },
];

// Highlights
export const highlights = [
  "Best Quality Productions",
  "Best Quality Vanilla",
  "Natural Healthy Products",
];
