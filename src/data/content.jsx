import {
  Package,
  Truck,
  Shield,
  FileCheck,
  Heart,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Award,
  Users,
  Target,
  Leaf,
  Tractor,
  Sparkles,
  CheckCircle,
  Calendar,
  Eye,
  Scissors,
  ThumbsUp,
  Sun,
  Wind,
  Moon,
  Ruler,
  Droplets,
  Star,
} from "lucide-react";
import { FaWrench } from "react-icons/fa";
import { LuTrendingUp } from "react-icons/lu";

// Navigation Links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Vanilla Process", href: "/vanilla-process" },
  { name: "Contact", href: "/contact" },
];

export const establishedYear = 2022;

export const yearsOfExperience = 3;

// Products
export const products = [
  {
    id: 1,
    name: "Non-Alcoholic Vanilla Extract",
    image: "/src/assets/products/NON_ALCOHOLIC_VANILLA_EXTRACT.jpg",
    excerpt:
      "Indulge in the exquisite essence of pure, hand-selected Sri Lankan vanilla beans, meticulously extracted through a gentle alcohol-free process.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
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
        <span>(No Alcohol, No Artificial Flavours, No Preservatives)</span>
      </ul>
    ),
  },
  {
    id: 2,
    name: "Alcoholic Vanilla Extract",
    image: "/src/assets/products/ALCOHOLIC_VANILLA_EXTRACT.jpg",
    excerpt:
      "Experience the rich, complex aroma of hand-selected Sri Lankan vanilla beans carefully macerated in high-quality food-grade alcohol to create a truly authentic vanilla extract.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
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
    image: "/src/assets/products/VANILLA_PASTE.jpg",
    excerpt:
      "Experience the rich, full-bodied flavor of hand-harvested Sri Lankan vanilla beans in a convenient, ready-to-use paste.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
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
        <li>
          Natural Vanilla Extract (Alcohol or Glycerin-Based, depending on
          formulation)
        </li>
        <li>Natural Thickening/Binder (e.g., Gum Acacia or Corn Syrup)</li>
      </ul>
    ),
  },
  {
    id: 4,
    name: "Natural Vanilla Powder ",
    image: "/src/assets/products/VANILLA_POWDER.png",
    excerpt:
      "Discover the delicate, aromatic essence of hand-selected Sri Lankan vanilla beans in a finely ground, convenient powder form.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Discover the delicate, aromatic essence of{" "}
          <span className="font-semibold">
            hand-selected Sri Lankan vanilla beans
          </span>{" "}
          in a finely ground, convenient powder form. Our{" "}
          <span className="font-semibold">Natural Vanilla Powder</span>is made
          by carefully dehydrating and grinding the highest-quality vanilla
          beans, preserving the rich flavor and intoxicating aroma of pure
          vanilla.
          <br />
          Ideal for{" "}
          <span className="font-semibold">
            baking, desserts, beverages, chocolate, and specialty culinary
            creations,
          </span>{" "}
          this powder offers the authentic taste of vanilla without any
          artificial additives or alcohol. Perfect for chefs, gourmet bakers,
          and confectioners who demand{" "}
          <span className="font-semibold">
            purity, convenience, and consistent flavor.
          </span>
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li> Natural Vanilla Beans (Finely Ground)</li>
        <li>
          Anti-Caking Agent (Food-Grade, e.g., Maltodextrin or Rice Flour)
        </li>

        <span>
          (100% Natural, No Artificial Flavours or Colors, Alcohol-Free){" "}
        </span>
      </ul>
    ),
  },
  {
    id: 5,
    name: "Natural Vanilla Syrup  ",
    image: "/src/assets/products/VANILLA_SYRUP.jpg",
    excerpt:
      "Indulge in the smooth, rich sweetness of hand-selected Sri Lankan vanilla beans infused into a velvety natural syrup.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Indulge in the smooth, rich sweetness of{" "}
          <span className="font-semibold">
            hand-selected Sri Lankan vanilla beans
          </span>{" "}
          infused into a{" "}
          <span className="font-semibold">velvety natural syrup.</span>Our{" "}
          <span className="font-semibold">Natural Vanilla Syrup</span> blends{" "}
          <span className="font-semibold">
            pure vanilla extract, natural sweeteners, and purified water
          </span>{" "}
          to create a luxurious, alcohol-free syrup that captures the authentic
          aroma and flavor of real vanilla.
          <br /> Perfect for{" "}
          <span className="font-semibold">
            gourmet beverages, cocktails, desserts, pancakes, ice creams, and
            specialty coffee creations,
          </span>{" "}
          this syrup delivers consistent quality and natural flavor without any
          artificial additives. {""}
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Purified Water </li>
        <li>Natural Vanilla Extract (Alcohol or Glycerin-Based)</li>
        <li>Natural Sweeteners (e.g., Cane Sugar, Glucose, or Stevia)</li>
        <li>Natural Preservative (optional, e.g., Citric Acid)</li>
      </ul>
    ),
  },
  {
    id: 6,
    name: "100% Vanilla Bathing Bar – SKIN AND WELLNESS",
    image: "/src/assets/products/VANILLA_BATHING_BAR.png",
    excerpt:
      "Experience the luxury of pure vanilla-infused skincare with our 100% Vanilla Bathing Bars — crafted to cleanse, nourish, and rejuvenate your skin naturally.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Experience the luxury of{" "}
          <span className="font-semibold">pure vanilla-infused skincare</span>{" "}
          with our{" "}
          <span className="font-semibold">100% Vanilla Bathing Bars</span>—
          crafted to cleanse, nourish, and rejuvenate your skin naturally. Made
          with{" "}
          <span className="font-semibold">
            premium natural vanilla extract and high-quality botanical
            ingredients,
          </span>{" "}
          each bar transforms your daily bath into a spa-like indulgence,
          leaving your skin soft, fragrant, and radiant.
        </p>
      </>
    ),
    brands:
      "Natural Vanilla | Vanilla & Charcoal | Vanilla & Rosette | Vanilla & Aloe Vera",
    ingredients: (
      <ul>
        <li>Natural Vanilla Extract</li>
        <li>
          Saponified Oils (Coconut Oil, Palm Oil, Olive Oil, or Shea Butter)
        </li>
        <li>Botanical Additives (Charcoal / Rose Extract / Aloe Vera)</li>
        <li>Natural Glycerin</li>
        <li>Essential Oils (optional, depending on variant)</li>
      </ul>
    ),
  },
  {
    id: 7,
    name: "Hand Made Vanilla Based Soap",
    image: "/src/assets/products/HAND_MADE_SOAP.jpg",
    excerpt:
      "Indulge in the luxurious care of handmade soaps enriched with premium natural vanilla.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Indulge in the luxurious care of{" "}
          <span className="font-semibold">
            {" "}
            handmade soaps enriched with premium natural vanilla.
          </span>{" "}
          Each bar is thoughtfully crafted using{" "}
          <span className="font-semibold">
            pure vanilla extract and nourishing botanical oils,{" "}
          </span>
          offering a gentle cleanse while leaving the skin soft, hydrated, and
          delicately scented.
          <br /> Perfect for{" "}
          <span className="font-semibold">
            daily use, spa treatments, or gifting,
          </span>{" "}
          these artisanal soaps provide a natural, aromatic bathing experience
          that transforms everyday routines into moments of indulgence.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Natural Vanilla Extract</li>
        <li>
          Saponified Oils (Coconut Oil, Palm Oil, Olive Oil, or Shea Butter)
        </li>
        <li>Natural Glycerin</li>
        <li>Essential Oils (optional, depending on variant)</li>
        <li>
          Botanical Additives (optional: Aloe Vera, Charcoal, Rose Extract,
          etc.)
        </li>
      </ul>
    ),
  },
  {
    id: 8,
    name: "Natural Vanilla Mood Fixing Spray",
    image: "/src/assets/products/MOOD_FIXING_SPRAY.jpg",
    excerpt:
      "Elevate your senses and enhance your mood with our Natural Vanilla-Based Mood Fixing Spray.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Elevate your senses and enhance your mood with our{" "}
          <span className="font-semibold">
            {" "}
            Natural Vanilla-Based Mood Fixing Spray.
          </span>{" "}
          Infused with{" "}
          <span className="font-semibold">
            pure Sri Lankan vanilla extract and aromatic botanical essences,{" "}
          </span>
          this spray delivers a calming, uplifting fragrance that refreshes the
          mind and soothes the soul. <br />
          Perfect for{" "}
          <span className="font-semibold">
            home, office, or personal use,
          </span>{" "}
          it creates a serene and comforting atmosphere, turning any space into
          a sanctuary of relaxation and positivity.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Purified Water </li>
        <li>Natural Vanilla Extract</li>
        <li>
          Botanical Essential Oils (optional: Lavender, Rose, or Citrus for
          added aromatherapy benefits)
        </li>
        <li>
          Natural Preservatives (optional, e.g., Citric Acid or Potassium
          Sorbate)
        </li>
      </ul>
    ),
  },
  {
    id: 9,
    name: "Natural Vanilla Infused Tea",
    image: "/src/assets/products/VANILLA_TEA.jpg",
    excerpt:
      "Savor the exquisite taste of premium Ceylon tea leaves, renowned worldwide for their bright, brisk flavor and natural freshness, delicately infused with pure Sri Lankan vanilla.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Savor the exquisite taste of{" "}
          <span className="font-semibold">
            premium Ceylon tea leaves, renowned worldwide for their bright,
            brisk flavor and natural freshness, delicately infused with{" "}
            <span className="font-semibold">pure Sri Lankan vanilla.</span> Our{" "}
            <span className="font-semibold">
              Natural Vanilla-Infused Ceylon Tea
            </span>{" "}
            delivers a smooth, aromatic experience with subtle sweet notes and
            the comforting fragrance of vanilla, offering a luxurious tea ritual
            in every cup. <br />
            Perfect for{" "}
            <span className="font-semibold">
              morning rejuvenation, afternoon relaxation, or gifting,
            </span>{" "}
            this tea combines the finest
            <span className="font-semibold"></span>world-class Ceylon tea
          </span>{" "}
          with natural vanilla to create a harmonious blend of flavor and
          wellness.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Premium Ceylon Tea Leaves (Black or Green)</li>
        <li>Natural Vanilla Extract or Vanilla Beans</li>
        <li>Optional Natural Flavor Enhancers (e.g., Cinnamon, Cardamom)</li>
      </ul>
    ),
  },
  {
    id: 10,
    name: "Natural Vanilla Infused Tea Sachet Pack – 30",
    image: "/src/assets/products/TEA_SACHET.png",
    excerpt:
      "Enjoy the convenience of 30 individually packed sachets of premium Ceylon tea, delicately infused with pure Sri Lankan vanilla.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Enjoy the convenience of{" "}
          <span className="font-semibold">
            30 individually packed sachets of premium Ceylon tea,
          </span>{" "}
          delicately infused with
          <span className="font-semibold"> pure Sri Lankan vanilla.</span> Each
          sachet delivers the bright, brisk flavor and natural freshness of
          <span className="font-semibold">world-renowned Ceylon tea,</span>{" "}
          enriched with the sweet, aromatic notes of authentic vanilla. <br />
          Perfect for
          <span className="font-semibold">
            {" "}
            daily indulgence, office breaks, travel, or gifting,
          </span>{" "}
          this sachet pack ensures a luxurious and consistent tea experience
          anytime, anywhere.
        </p>
      </>
    ),
    ingredients: (
      <ul>
        <li>Premium Ceylon Tea Leaves (Black or Green)</li>
        <li>Natural Vanilla Extract or Vanilla Beans</li>
        <li>Optional Natural Flavor Enhancers (e.g., Cinnamon, Cardamom)</li>
      </ul>
    ),
  },
  {
    id: 11,
    name: "Premium Quality Vanilla Pods",
    image: "/src/assets/products/VANILLA_PODS.jpg",
    excerpt:
      "Experience the unmatched richness of hand-selected Sri Lankan vanilla pods, cultivated under ideal conditions to ensure superior aroma, flavor, and moisture content.",
    description: (
      <>
        <p className="text-gray-600 text-sm mb-3 text-justify">
          Experience the unmatched richness of{" "}
          <span className="font-semibold">
            hand-selected Sri Lankan vanilla pods,
          </span>{" "}
          cultivated under ideal conditions to ensure{" "}
          <span className="font-semibold">
            superior aroma, flavor, and moisture content.
          </span>{" "}
          Our{" "}
          <span className="font-semibold">Premium Quality Vanilla Pods</span>{" "}
          are naturally cured to perfection, delivering the authentic, deep, and
          sweet aroma of pure vanilla in every pod. <br />
          Perfect for{" "}
          <span className="font-semibold">
            culinary creations, desserts, beverages, baking, or flavoring syrups
            and extracts,
          </span>{" "}
          these pods represent the finest standard of vanilla, sought after by
          gourmet chefs and premium brands worldwide.
        </p>
      </>
    ),
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
    id: "creating-awareness",
    icon: Sparkles,
    title: "Creating Awareness",
    shortDesc:
      "The Sri Lankan Vanilla Initiative is one of the leading pioneers in the cultivation and processing of Vanilla in Sri Lanka.",
    image: "/src/assets/services/img2.png",
    color: "primary",
  },
  {
    id: "quality-planting-material",
    icon: Leaf,
    title: "Quality Planting Material",
    shortDesc:
      "SLVI's nursery is at the forefront of the effort to keep vanilla farming alive and well in Sri Lanka.",
    image: "/src/assets/services/img5.jpg",
    color: "secondary",
  },
  {
    id: "vanilla-cultivation",
    icon: Users,
    title: "Vanilla Cultivation",
    shortDesc:
      "SLVI has been dedicated to bringing the highest quality products to customers around the world for two decades.",
    image: "/src/assets/services/img7.png",
    color: "green",
  },
  {
    id: "contract-farming",
    icon: FileCheck,
    title: "Contract Farming",
    shortDesc:
      "SLVI's mission is to empower farmers across Sri Lanka by providing them with the tools and resources needed to produce high-quality vanilla crops.",
    image: "/src/assets/services/img8.png",
    color: "blue",
  },
];

// Office Details
export const offices = [
  {
    id: 1,
    name: "Corporate Office",
    city: "Colombo",
    address: "No: 48, Sir Marcus Fernando, Colombo 07",
    phone: "+94 11 287 8766",
    mobile: "+94 70 513 0907",
    email: "info@agroventuresexports.com",
    hours: "Mon - Fri: 8.30 Am - 5.00 PM and Sat: 8.30 Am - 12:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8428552445066!2d79.8604089!3d6.9093861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f84c7e64b3%3A0x969f0df303642a7e!2sAgro%20Ventures%20Exports%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1765880963785!5m2!1sen!2slk",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    type: "headquarters",
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

// Agricultural Data
export const agriculturalData = [
  {
    icon: Tractor,
    title: "Harvesting",
    description:
      "Vanilla beans are hand-harvested at peak maturity to preserve aroma, flavor, and quality.",
  },
  {
    icon: LuTrendingUp,
    title: "Growth",
    description:
      "We support sustainable vanilla farming practices that ensure consistent yield and long-term farmer growth.",
  },
  {
    icon: FaWrench,
    title: "Maintenance",
    description:
      "Careful curing, drying, and storage processes are maintained to protect the richness and freshness of vanilla beans.",
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
    image: "/src/assets/home/hero1.jpg",
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
    image: "/src/assets/home/hero2.avif",
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
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the world's most trusted source of premium Indian agricultural products, setting global standards in quality, sustainability, and ethical trade.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge Indian farmers with global markets through transparent partnerships, innovative solutions, and unwavering commitment to excellence in every grain we export.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Our Purpose",
    description:
      "To create lasting value for farmers, partners, and communities while preserving India's agricultural heritage for future generations through sustainable practices.",
    color: "earth",
  },
];

// Home Highlights
export const homeHighlights = [
  "Best Quality Productions",
  "Best Quality Vanilla",
  "Natural Healthy Products",
];

// About Highlights
export const aboutHighlights = [
  "State-of-the-art processing and packaging facilities",
  "ISO 22000 and HACCP certified operations",
  "Sustainable and eco-friendly farming practices",
  "Complete traceability from farm to destination",
  "24/7 customer support",
];

// Projects
export const projects = [
  {
    id: 1,
    title: "20,000 Green Houses for Vanilla Plantation",
    description:
      "We have laid the foundations for a project where we are working to set up 20,000 Greenhouses for Vanilla plantations before the year 2025. Our hope is that this initiative will allow Sri Lanka’s Vanilla export sector to grow to a value of USD 1 Billion, helping bring foreign revenue to the country as well as creating a brand for Sri Lankan vanilla, similar to the popularity of Ceylon Tea. This project will massively boost Sri Lanka’s agro export sector overall as our crops will be organically grown, setting a great example. We will also create many job opportunities over the course of this, and help the economies of the places we have put this project in motion.",
    image: "/src/assets/about/greenhouse.jpg",
    date: "2025",
  },
];

// Certifications
export const certifications = [
  {
    name: "ISO 22000:2018",
    type: "Food Safety Management",
    icon: Shield,
    description: "International standard for food safety management systems",
    color: "primary",
  },
  {
    name: "HACCP",
    type: "Hazard Analysis",
    icon: FileCheck,
    description: "Systematic preventive approach to food safety",
    color: "secondary",
  },
  {
    name: "USDA Organic",
    type: "Organic Certification",
    icon: Leaf,
    description: "Certified organic products for US markets",
    color: "green",
  },
  {
    name: "FSSAI",
    type: "Food Safety License",
    icon: CheckCircle,
    description: "Food Safety and Standards Authority of India",
    color: "blue",
  },
  {
    name: "APEDA",
    type: "Export Registration",
    icon: Globe,
    description: "Agricultural and Processed Food Export Development Authority",
    color: "purple",
  },
  {
    name: "Spices Board",
    type: "Quality Certification",
    icon: Award,
    description: "Certified exporter under Spices Board of India",
    color: "orange",
  },
];

// Products Stats
export const productStats = [
  { icon: Package, value: "10+", label: "Products" },
  { icon: Award, value: "Premium", label: "Quality" },
  { icon: Leaf, value: "Organic", label: "Options" },
];

// Sourcing Criteria
export const sourcingCriteria = [
  {
    icon: Calendar,
    title: "Optimal Timing",
    description:
      "Beans harvested 8-9 months after pollination when tips turn yellow",
  },
  {
    icon: Eye,
    title: "Visual Inspection",
    description:
      "Each bean individually inspected for color, size, and maturity",
  },
  {
    icon: Scissors,
    title: "Careful Harvesting",
    description: "Hand-picked using specialized techniques to prevent damage",
  },
  {
    icon: ThumbsUp,
    title: "Quality Selection",
    description:
      "Only beans meeting our strict criteria are selected for processing",
  },
];

// Sun Drying Steps
export const sundryingSteps = [
  {
    step: 1,
    title: "Hot Water Bath (Killing)",
    duration: "2-3 minutes",
    temp: "60-65°C",
    description:
      "Beans are immersed in hot water to stop vegetative growth and initiate enzymatic processes",
  },
  {
    step: 2,
    title: "Sun Exposure",
    duration: "2-3 hours",
    temp: "Direct sunlight",
    description:
      "Beans are spread on blankets and exposed to direct sunlight for initial moisture reduction",
  },
  {
    step: 3,
    title: "Blanket Wrapping",
    duration: "Overnight",
    temp: "Retained heat",
    description:
      "Hot beans are wrapped in blankets to retain heat and begin the sweating process",
  },
];

// Shade Drying Indicators
export const shadedryingDailyCycle = [
  {
    time: "Morning",
    icon: Sun,
    activity: "Sun Exposure",
    duration: "2-3 hours",
    description: "Beans spread on racks in morning sunlight for gentle warming",
  },
  {
    time: "Afternoon",
    icon: Wind,
    activity: "Shade Rest",
    duration: "Rest period",
    description: "Moved to shaded area to prevent overheating during peak sun",
  },
  {
    time: "Night",
    icon: Moon,
    activity: "Sweating",
    duration: "12-14 hours",
    description: "Wrapped in blankets inside wooden boxes to sweat overnight",
  },
];

// Conditioning Stages
export const conditioningStages = [
  {
    month: "Month 1-2",
    title: "Initial Conditioning",
    moisture: "25-30%",
    description:
      "Beans stored in paper-lined boxes, flavor compounds begin stabilizing",
  },
  {
    month: "Month 3-4",
    title: "Flavor Development",
    moisture: "20-25%",
    description:
      "Complex flavor notes develop, vanilla aroma intensifies significantly",
  },
  {
    month: "Month 5-6",
    title: "Final Maturation",
    moisture: "18-22%",
    description: "Optimal flavor profile achieved, beans ready for grading",
  },
];

// Sorting Criteria
export const sortingCriteria = [
  {
    icon: Ruler,
    title: "Length",
    description: "Beans measured and sorted by length (12-20+ cm)",
  },
  {
    icon: Eye,
    title: "Appearance",
    description: "Visual inspection for color, oiliness, and defects",
  },
  {
    icon: Droplets,
    title: "Moisture",
    description: "Tested to ensure optimal moisture content",
  },
  {
    icon: Star,
    title: "Aroma",
    description: "Evaluated for strength and quality of vanilla scent",
  },
];
