import React from "react";
import {
    ChevronDown,
    Microscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const ResearchHero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/research-development/hero.jpg"
                    alt="Research and Development Laboratory"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-gray-900/35 via-gray-900/45 to-gray-900/70" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-gray-900/40" />
            </div>

            <div className="container-custom relative z-10 pt-32 pb-20 flex justify-center">
                <div className="max-w-4xl text-center">
                    {/* Breadcrumb */}
                    <nav className="flex justify-center items-center space-x-2 text-sm text-white/60 mb-8">
                        <Link to="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-primary-400">Research & Development</span>
                    </nav>

                    <div className="max-w-4xl">
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-primary-200">
                                    Innovation & Scientific Excellence
                                </span>
                            </div>

                            {/* Heading */}
                            <div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                                    Crafting the
                                    <span className="block text-primary-400">
                                        Future of Beverages
                                    </span>
                                </h1>
                                <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                                    Our dedicated R&D team blends cutting-edge food science with
                                    consumer insight to develop next-generation energy drinks,
                                    functional beverages, and health-focused refreshments -
                                    pushing the boundaries of taste, performance, and sustainability.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex justify-center flex-wrap gap-4">
                                <a
                                    href="#research-overview"
                                    className="btn-primary bg-amber-500 hover:bg-amber-600 shadow-amber-500/30 text-gray-900 group"
                                >
                                    Explore Our Research
                                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
                <span className="text-xs uppercase tracking-widest mb-2">
                    Discover our innovations
                </span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default ResearchHero;