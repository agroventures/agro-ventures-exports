import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/content";

const Products = () => {
  return (
    <section id="products" className="section-padding bg-white relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size:[20px_20px] opacity-50" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Premium Export Quality
            <span className="block gradient-text">Vanilla Products</span>
          </h2>
          <p className="text-lg text-gray-600">
            We export a wide range of agricultural products that meet
            international quality standards and are sourced directly from
            certified farmers across Sri Lanka.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 uppercase">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {product.excerpt?.split(" ").slice(0, 10).join(" ")}...
                </p>
                <div className="flex items-center text-primary-600 gap-2 pt-3 border-t border-gray-100">
                  <span className="text-md group-hover:underline group-hover:cursor-pointer">View</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="/products" className="btn-primary">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
