import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react'

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "Our minimum order quantity varies by product. For spices, the MOQ is typically 500 kg per variety. For rice and pulses, it starts from 1 MT. However, we can accommodate smaller sample orders for new clients to test quality before committing to larger volumes.",
      category: "orders"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including Letter of Credit (L/C), Telegraphic Transfer (T/T), Documents Against Payment (D/P), and Documents Against Acceptance (D/A). For established clients, we also offer flexible credit terms. All payments are processed through secure banking channels.",
      category: "payment"
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times depend on the destination and shipping method. Typically, sea freight to the Middle East takes 7-10 days, to Europe 20-25 days, and to the Americas 25-35 days. We also offer air freight for urgent orders, which can deliver within 3-7 days globally.",
      category: "shipping"
    },
    {
      question: "Do you provide product samples?",
      answer: "Yes, we provide free samples for genuine business inquiries. Standard samples (100-250g) are sent free of cost, with shipping charges applicable. For larger sample quantities, we offer them at competitive prices which can be adjusted against your first order.",
      category: "samples"
    },
    {
      question: "What certifications do your products have?",
      answer: "Our products carry multiple certifications including ISO 22000, HACCP, FSSAI, APEDA registration, and Spices Board certification. Many products are also available with USDA Organic, EU Organic, and Kosher/Halal certifications upon request.",
      category: "quality"
    },
    {
      question: "Can you customize packaging?",
      answer: "Absolutely! We offer complete private labeling and custom packaging solutions. You can choose from various packaging options including bulk bags, retail packs, vacuum packaging, and custom-branded packaging. Our design team can also help create attractive packaging designs.",
      category: "packaging"
    },
    {
      question: "What documents do you provide with shipments?",
      answer: "We provide comprehensive export documentation including Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Certificate of Origin, Phytosanitary Certificate, Health Certificate, Quality/Lab Test Reports, and any other certificates required by your country's customs.",
      category: "documentation"
    },
    {
      question: "How do you ensure product quality?",
      answer: "Quality is ensured through our multi-stage quality control process. This includes inspection at source, laboratory testing at our facility, pre-shipment inspection, and optional third-party inspection (SGS, Bureau Veritas). We maintain complete traceability from farm to shipment.",
      category: "quality"
    },
    {
      question: "Do you offer exclusive distribution rights?",
      answer: "Yes, for qualified partners meeting our volume and market development criteria, we offer exclusive distribution rights in specific territories. This includes marketing support, competitive pricing, and dedicated account management.",
      category: "partnership"
    },
    {
      question: "What if there's a quality issue with my order?",
      answer: "Customer satisfaction is our priority. If you face any quality issues, contact us immediately with documentation. We have a comprehensive claims process and will resolve issues through replacement, credit, or refund based on the situation. All claims are processed within 30 days.",
      category: "support"
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products, services, and export process.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-primary-500 shadow-lg shadow-primary-500/10' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className={`font-semibold text-lg transition-colors ${
                    openIndex === index ? 'text-primary-600' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-primary-500 rotate-180' 
                      : 'bg-gray-100'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try different keywords or{' '}
                <a href="#contact-form" className="text-primary-600 hover:underline">
                  contact us directly
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-primary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-primary-100">
                  Can't find the answer you're looking for? Please chat with our friendly team.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="mailto:support@agroventures.com"
                className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFAQ