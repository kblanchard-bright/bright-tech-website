import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero
        subtitle="Powering The Future of Hospitality"
        title="Bright Technology"
        description="We create elegant, innovative solutions that transform how hotels operate and delight their guests."
      />

      {/* Products Section */}
      <Section background="gradient" id="products">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Our <span className="text-bright-orange">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative technology solutions designed for modern hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Bright Booking"
            description="A revolutionary booking system that streamlines reservations and enhances guest experience with intelligent automation and seamless integration."
            href="/products/bright-booking"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />

          <ProductCard
            title="BrightOS"
            description="The complete operating system for hotels. Manage operations, staff, and guest experiences from one powerful, intuitive platform built for efficiency."
            href="/products/bright-os"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <ProductCard
            title="Bright Boost"
            description="AI-powered revenue optimization that maximizes your profitability through dynamic pricing, demand forecasting, and intelligent upselling."
            href="/products/bright-boost"
            comingSoon={true}
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>
      </Section>

      {/* Partnership Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
              Partnered with Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our journey began with{' '}
              <a
                href="https://thebrighthotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright-orange font-medium hover:underline"
              >
                The Bright Hotel
              </a>
              , where we pioneered technology solutions that redefine hospitality standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This partnership drives our innovation, ensuring every product we create is tested in real-world hospitality environments and built to exceed industry expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-12 border border-bright-orange/20">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-display font-bold text-bright-orange mb-4">
                The Bright Hotel
              </div>
              <p className="text-gray-600 text-lg">
                Where technology meets hospitality
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Ready to Transform Your Hotel?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us in shaping the future of hospitality technology
          </p>
          <a
            href="/hotels"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
          >
            <span>Explore Our Hotels</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
