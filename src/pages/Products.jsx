import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductsHero from '../components/products/ProductsHero'
import ProductCategories from '../components/products/ProductCategories'
import FeaturedProducts from '../components/products/FeaturedProducts'
import ProductGrid from '../components/products/ProductGrid'
import ProductModal from '../components/products/ProductModal'
import Footer from '../components/Footer'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProductModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="overflow-hidden">
      <Navbar />
      <ProductsHero />
      {/* <ProductCategories />
      <FeaturedProducts onProductClick={openProductModal} /> */}
      <ProductGrid onProductClick={openProductModal} />
      <Footer />
      
      {/* <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      /> */}
    </div>
  )
}

export default Products