import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Package,
  ExternalLink,
  Filter,
} from "lucide-react";
import { projects } from "../../data/content";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  return (
    <section
      id="projects"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <Package className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Success Stories &
            <span className="block gradient-text">Latest Initiatives</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest projects that showcase our commitment to quality
            exports, sustainable practices, and community development.
          </p>
        </div>

        <div
          className={`mb-16 gap-8 ${
            projects.length === 1
              ? "flex justify-center"
              : "grid md:grid-cols-2"
          }`}
        >
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover ${
                projects.length === 1 ? "max-w-3xl w-full" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{project.description}</p>
              </div>

              <div className="flex items-center gap-3 text-primary-700 cursor-pointer p-6">
                <p className="font-semibold group-hover:underline">View Details</p>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {projects.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setVisibleCount(projects.length);
              }}
              className="btn-primary inline-flex items-center"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
