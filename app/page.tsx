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
        subtitle="The Bright Operating System"
        title="BrightOS"
        description="The AI-powered operating system for modern hotels. Integrated booking, communications, operations, and revenue management—all in one intelligent platform."
      />

      {/* Products Section */}
      <Section background="white" id="products">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-bright-orange mb-6">
            Technology That Transforms
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            An integrated ecosystem of intelligent tools that redefine what's possible in hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Bright Booking"
            description="Conversion-engineered booking platform that eliminates OTA dependency. Maximize direct revenue with intelligent automation that turns visitors into guests."
            href="/products/bright-booking"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />

          <ProductCard
            title="Bright Ops"
            description="Guest communications and operations management built on the BrightOS platform. Streamline your workflows and elevate guest experiences. Free with Bright Booking."
            href="/products/bright-ops"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <ProductCard
            title="Bright Boost"
            description="Intelligent revenue optimization leveraging AI for dynamic pricing, demand prediction, and automated upselling. The future of hotel revenue management."
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

      {/* Pricing Innovation Section */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Revolutionary Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The industry's first fully integrated booking and operations platform with transparent, performance-driven pricing
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border-2 border-bright-orange/30">
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 text-center">
                Bright Ops is Free
              </h3>
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                Subscribe to Bright Booking and get Bright Ops included at no additional cost—complete communications and operations management powered by the BrightOS platform
              </p>
              <div className="bg-bright-black/50 rounded-xl p-4 border border-bright-orange/20">
                <p className="text-sm text-gray-400 text-center">
                  Guest communications • Operations management • AI automation • Built on BrightOS
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-bright-orange/20">
              <h3 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4 text-center">
                Performance-Based Booking
              </h3>
              <p className="text-gray-300 leading-relaxed text-center mb-6">
                Pay only a percentage on confirmed bookings through Bright Booking—no setup fees, no monthly minimums
              </p>
              <div className="bg-bright-orange/10 rounded-xl p-4 border border-bright-orange/20">
                <p className="text-sm text-gray-400 text-center">
                  Commission-free direct bookings • Transparent pricing • No hidden costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Innovation Lab
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              At{' '}
              <a
                href="https://thebrighthotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright-orange font-medium hover:underline"
              >
                The Bright Hotel
              </a>
              , our technology isn't just deployed—it's battle-tested daily. Every feature is refined
              in the crucible of real guest interactions and operational demands.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              This living laboratory approach ensures we're not building for hypothetical hotels.
              We're engineering solutions proven to work in the real world, creating technology that
              evolves with the industry's future.
            </p>
          </div>
          <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-12 border border-bright-orange/20">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-display font-bold text-bright-orange mb-4">
                The Bright Hotel
              </div>
              <p className="text-gray-600 text-lg">
                Where tomorrow's hospitality happens today
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            The Future Starts Now
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            See next-generation hospitality technology in action
          </p>
          <a
            href="/hotels"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
          >
            <span>Experience Tomorrow's Hotel</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
