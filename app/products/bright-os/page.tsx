import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export const metadata = {
  title: 'BrightOS - Bright Technology',
  description: 'The complete operating system for hotels. Manage operations, staff, and guest experiences from one platform.',
};

export default function BrightOS() {
  return (
    <>
      <Header />

      <Hero
        subtitle="BrightOS"
        title="Your Hotel's Central Nervous System"
        description="The complete operating system that unifies every aspect of hotel management into one elegant platform"
        gradient="from-bright-black via-blue-900/20 to-bright-black"
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
              One Platform. Infinite Possibilities.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              BrightOS is more than software—it's the foundation of modern hotel operations. From front
              desk to housekeeping, from revenue management to guest services, everything works together
              seamlessly in one intuitive system.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Built for efficiency, designed for excellence, and crafted to grow with your business.
            </p>
          </div>

          {/* Core Modules */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-semibold text-bright-black mb-8 text-center">
              Comprehensive Hotel Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Guest Management
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete profiles, preferences, and history at your fingertips
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Room Operations
                </h4>
                <p className="text-gray-600 text-sm">
                  Real-time status, housekeeping coordination, maintenance tracking
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Revenue & Billing
                </h4>
                <p className="text-gray-600 text-sm">
                  Automated invoicing, payment processing, financial reporting
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Staff Coordination
                </h4>
                <p className="text-gray-600 text-sm">
                  Shift scheduling, task assignment, communication tools
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Analytics & Reports
                </h4>
                <p className="text-gray-600 text-sm">
                  Real-time insights, custom dashboards, performance metrics
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-bright-orange/5 to-transparent rounded-xl border border-bright-orange/20">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                  Integrations
                </h4>
                <p className="text-gray-600 text-sm">
                  Connect with POS, channel managers, door locks, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why BrightOS */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-12 text-center">
            Built for the Modern Hotel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                Intuitive Interface
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No extensive training required. Our clean, modern design makes complex operations simple.
                Your staff will love using it from day one.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                Cloud-Native Architecture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Access your data anywhere, anytime. Automatic updates, built-in redundancy, and
                enterprise-grade security keep your operations running smoothly.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                Scalable & Flexible
              </h3>
              <p className="text-gray-300 leading-relaxed">
                From boutique properties to multi-location chains, BrightOS grows with you. Add modules,
                users, and properties as your business expands.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Hotels never sleep, and neither do we. Our dedicated support team is always ready to
                help keep your operations running at peak performance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
            Experience the Future of Hotel Management
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            See BrightOS in action at The Bright Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>See Live Implementation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#products"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-black hover:bg-bright-black hover:text-white text-bright-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>Explore Other Products</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
