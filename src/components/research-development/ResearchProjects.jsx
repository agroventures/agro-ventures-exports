import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Clock,
  Tag,
  ChevronRight,
  Beaker,
  Zap,
  Leaf,
  Gauge,
  ScanSearch,
  Droplets,
  HeartPulse,
  Dumbbell,
  Award,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "energy", label: "Energy Drinks" },
  { id: "functional", label: "Functional Beverages" },
  { id: "natural", label: "Natural & Organic" },
  { id: "technology", label: "Process Technology" },
];

const projects = [
  {
    id: 1,
    title: "Zero-Sugar Performance Energy Line",
    category: "energy",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700",
    image: "/images/research-development/project-energy.jpg",
    icon: Zap,
    iconColor: "bg-amber-100 text-amber-600",
    duration: "2024 - Ongoing",
    location: "Beverage Innovation Lab",
    team: "9 Scientists",
    description:
      "Developing a next-generation zero-sugar energy drink range powered by natural caffeine from green tea and guarana, enhanced with B-vitamins, L-theanine, and electrolytes for sustained energy without the crash.",
    objectives: [
      "Achieve clean energy boost lasting 6+ hours",
      "Zero artificial sweeteners - stevia & monk fruit only",
      "Launch 4 flavor variants by Q3 2025",
    ],
    progress: 55,
    tags: ["Natural Caffeine", "Zero Sugar", "Sports Nutrition"],
    featured: true,
  },
  {
    id: 2,
    title: "Adaptogen-Infused Relaxation Drinks",
    category: "functional",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700",
    image: "/images/research-development/project-adaptogen.jpg",
    icon: HeartPulse,
    iconColor: "bg-purple-100 text-purple-600",
    duration: "2024 - Ongoing",
    location: "Functional Ingredients Lab",
    team: "6 Scientists",
    description:
      "Creating a calming beverage line featuring ashwagandha, reishi mushroom, and magnesium glycinate designed to reduce stress, improve sleep quality, and promote mental clarity without drowsiness.",
    objectives: [
      "Clinically validate stress-reduction claims",
      "Develop 3 ready-to-drink SKUs",
      "Achieve 12-month ambient shelf life",
    ],
    progress: 40,
    tags: ["Adaptogens", "Mental Wellness", "Functional"],
    featured: true,
  },
  {
    id: 3,
    title: "Plant-Based Protein Shakes",
    category: "natural",
    status: "Pilot Phase",
    statusColor: "bg-amber-100 text-amber-700",
    image: "/images/research-development/project-protein.jpg",
    icon: Dumbbell,
    iconColor: "bg-green-100 text-green-600",
    duration: "2023 - Ongoing",
    location: "Nutrition Science Center",
    team: "7 Researchers",
    description:
      "Formulating high-protein plant-based shakes using pea, hemp, and brown rice protein isolates with optimized taste and texture - delivering 30g protein per serving with no chalky aftertaste.",
    objectives: [
      "Achieve smooth mouthfeel comparable to whey shakes",
      "Complete amino acid profile per serving",
      "Secure organic and vegan certifications",
    ],
    progress: 68,
    tags: ["Plant Protein", "Vegan", "Sports Recovery"],
    featured: false,
  },
  {
    id: 4,
    title: "AI-Driven Flavor Optimization Platform",
    category: "technology",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700",
    image: "/images/research-development/project-ai-flavor.jpg",
    icon: ScanSearch,
    iconColor: "bg-blue-100 text-blue-600",
    duration: "2024 - Ongoing",
    location: "Digital Innovation Lab",
    team: "5 Data Scientists",
    description:
      "Building a machine learning platform that analyzes thousands of flavor compound interactions, consumer preference data, and market trends to predict winning flavor combinations before physical prototyping.",
    objectives: [
      "Reduce formulation cycles from 6 months to 6 weeks",
      "Predict consumer acceptance with 90%+ accuracy",
      "Integrate with sensory panel feedback loops",
    ],
    progress: 35,
    tags: ["Machine Learning", "Flavor Science", "Consumer Insights"],
    featured: false,
  },
  {
    id: 5,
    title: "Cold-Pressed Botanical Energy Waters",
    category: "natural",
    status: "Field Trials",
    statusColor: "bg-green-100 text-green-700",
    image: "/images/research-development/project-botanical.jpg",
    icon: Leaf,
    iconColor: "bg-emerald-100 text-emerald-600",
    duration: "2023 - Ongoing",
    location: "Botanical Extraction Facility",
    team: "8 Scientists",
    description:
      "Developing a line of lightly caffeinated botanical waters using cold-pressed extraction from hibiscus, yuzu, ginger, and green coffee cherry - delivering subtle energy with zero sugar and natural flavor.",
    objectives: [
      "Perfect cold-press process at commercial scale",
      "Maintain bioactive compound integrity post-processing",
      "Launch 5 botanical SKUs for health-conscious consumers",
    ],
    progress: 72,
    tags: ["Botanicals", "Cold-Pressed", "Clean Label"],
    featured: false,
  },
  {
    id: 6,
    title: "Sustainable Can & Packaging Initiative",
    category: "technology",
    status: "Completed",
    statusColor: "bg-emerald-100 text-emerald-700",
    image: "/images/research-development/project-packaging.jpg",
    icon: Droplets,
    iconColor: "bg-teal-100 text-teal-600",
    duration: "2022 - 2024",
    location: "Packaging Engineering Lab",
    team: "4 Engineers",
    description:
      "Designed and implemented a fully recyclable, plant-based lined aluminum can and compostable carton packaging system - reducing packaging carbon footprint by 45% across the entire product portfolio.",
    objectives: [
      "Transition 100% of SKUs to recyclable packaging",
      "Reduce packaging carbon footprint by 45%",
      "Achieve cradle-to-cradle certification",
    ],
    progress: 100,
    tags: ["Sustainability", "Packaging", "Carbon Reduction"],
    featured: false,
  },
];

const ProjectCard = ({ project, featured = false }) => {
  if (featured) {
    return (
      <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${project.iconColor}`}
              >
                <project.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {project.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  {project.team}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Gauge className="w-4 h-4 mr-2 text-gray-400" />
                  {project.progress}% Complete
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Key Objectives */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Objectives
                </h4>
                <ul className="space-y-2">
                  {project.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-primary-500 shrink-0 mt-0.5" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags & CTA */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group/btn">
                View Full Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor}`}
          >
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <div
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-sm bg-white/90 ${project.iconColor}`}
          >
            <project.icon className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Meta */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              {project.duration}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-2 text-gray-400" />
              {project.team}
            </div>
          </div>

          {/* Progress */}
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="font-semibold text-gray-700">
                {project.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ${
                  project.progress === 100
                    ? "bg-emerald-500"
                    : "bg-primary-500"
                }`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/btn">
          View Details
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ResearchProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="research-projects" className="py-20 lg:py-28 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Beaker className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Active R&D Initiatives
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Innovation
            <span className="text-primary-600"> In the Lab</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From zero-sugar energy formulas to adaptogen-infused wellness drinks
            and AI-powered flavor design, explore the projects shaping the
            future of functional beverages.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Beaker className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              No projects match the selected category. Try a different filter.
            </p>
          </div>
        )}

        {/* Bottom Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-4">
              <Clock className="w-7 h-7 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {projects.filter((p) => p.status === "In Progress").length}
            </div>
            <div className="text-gray-500 font-medium">In Development</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-50 rounded-2xl mb-4">
              <Gauge className="w-7 h-7 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {
                projects.filter(
                  (p) =>
                    p.status === "Field Trials" || p.status === "Pilot Phase"
                ).length
              }
            </div>
            <div className="text-gray-500 font-medium">In Testing</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 rounded-2xl mb-4">
              <Award className="w-7 h-7 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {projects.filter((p) => p.status === "Completed").length}
            </div>
            <div className="text-gray-500 font-medium">Launched</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;