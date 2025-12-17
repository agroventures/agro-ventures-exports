import React, { useState, useMemo } from "react";
import { Search, ChevronDown, X, SlidersHorizontal, ArrowRight } from "lucide-react";
import { products } from "../../data/content";

const ProductGrid = ({ onProductClick }) => {
  const [visibleProductCount, setVisibleProductCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setVisibleProductCount(result.length)
    }

    return result;
  }, [searchTerm]);

  return (
    <section id="all-products" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Product Catalog
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            All
            <span className="gradient-text"> Products</span>
          </h2>
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search */}
            <div className="relative grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {visibleProductCount}
            </span>{" "}
            products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.slice(0, visibleProductCount).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {product.excerpt?.split(" ").slice(0, 10).join(" ")}...
                  </p>
                </div>

                <div className="flex items-center gap-3 text-primary-700 cursor-pointer p-4">
                  <p className="font-semibold group-hover:underline">
                    View Product
                  </p>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleProductCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setVisibleProductCount(filteredProducts.length);
              }}
              className="btn-secondary"
            >
              Load More Products
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
