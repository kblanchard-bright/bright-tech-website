import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';

export const metadata = {
  title: 'BrightOS Platform - The Bright Operating System',
  description: 'The AI-powered platform foundation connecting your PMS and powering all Bright products for modern hotel management.',
};

export default function PlatformPage() {
  return (
    <>
      <Header />

      <Hero
        subtitle="The Platform"
        title="BrightOS: The Foundation of Modern Hospitality"
        description="AI-powered platform connecting your PMS and powering every Bright product—the intelligent backbone of next-generation hotel technology"
        gradient="from-gray-900 to-bright-black"
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              The Platform That Powers Everything
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              BrightOS isn't just another product—it's the intelligent foundation that connects your
              Property Management System and powers all Bright products. Think of it as the operating
              system for your entire hotel technology stack.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Bright product is built on BrightOS, giving you a unified, AI-powered platform that
              works seamlessly across booking, operations, and revenue management.
            </p>
          </div>

          {/* Three Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                PMS Integration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Seamlessly connects to your existing Property Management System, creating a unified data
                ecosystem. Real-time synchronization keeps everything perfectly aligned.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                AI Intelligence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Machine learning that understands your property's unique patterns. The AI continuously
                learns and improves, making every Bright product smarter over time.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                Unified Infrastructure
              </h3>
              <p className="text-gray-700 leading-relaxed">
                One platform powering all products—Bright Booking, Bright Ops, and Bright Boost work
                together seamlessly because they share the same intelligent foundation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Products Built on BrightOS */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6 text-center">
            Products Built on BrightOS
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Every Bright product runs on the BrightOS platform, giving you integrated functionality
            that just works
          </p>

          <div className="space-y-6">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">Bright Booking</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your booking engine leverages BrightOS to sync with your PMS in real-time, ensuring
                    accurate availability and instant confirmations. The platform's AI helps optimize
                    conversion rates and streamline the guest booking experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">Bright Ops</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Communications and operations management powered by BrightOS AI. Automates guest
                    messaging, coordinates workflows, and learns from every interaction to serve your
                    property better. Free with Bright Booking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20 opacity-60">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                    Bright Boost <span className="text-sm text-bright-orange">(Coming Soon)</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Revenue optimization uses BrightOS data and AI to predict demand, optimize pricing,
                    and maximize profitability—all automatically integrated with your booking engine
                    and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PMS Integration */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Connects With Your PMS
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              BrightOS integrates with leading Property Management Systems, creating the foundation
              for all Bright products to work seamlessly with your existing infrastructure
            </p>
          </div>

          <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 md:p-12 border border-bright-orange/20 mb-12">
            <h3 className="font-heading text-2xl font-semibold text-bright-black mb-8 text-center">
              Supported PMS Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border-2 border-blue-500">
                <p className="font-semibold text-gray-800 mb-2">Opera PMS</p>
                <span className="inline-block text-xs bg-blue-600 text-white px-2 py-1 rounded font-semibold">Beta Access</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Mews</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border-2 border-bright-orange">
                <p className="font-semibold text-gray-800 mb-2">Cloudbeds</p>
                <span className="inline-block text-xs bg-bright-orange text-white px-2 py-1 rounded font-semibold">Available Today</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Guesty</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Hostfully</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">RMS Cloud</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Stayntouch</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">And More</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-12 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Connect Your PMS
              </h3>
              <p className="text-gray-300 leading-relaxed">
                BrightOS securely connects to your Property Management System, creating a unified
                data foundation for all products.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Add Products
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Choose the Bright products you need—Booking, Ops, Boost. They all work together
                seamlessly on the BrightOS platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                AI Learns & Optimizes
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The platform's AI continuously learns from your property's patterns, making every
                product smarter and more effective over time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Get Started with BrightOS
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Subscribe to Bright Booking and get the BrightOS platform foundation at no additional cost
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>Add Your Hotel</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-orange hover:bg-bright-orange hover:text-white text-bright-orange font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>See It Live</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
