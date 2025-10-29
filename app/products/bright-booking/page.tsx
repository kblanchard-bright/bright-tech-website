import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export const metadata = {
  title: 'Bright Booking - Bright Technology',
  description: 'Revolutionary booking system that streamlines reservations and enhances guest experience.',
};

export default function BrightBooking() {
  return (
    <>
      <Header />

      <Hero
        subtitle="Bright Booking"
        title="The Future of Direct Bookings"
        description="Intelligent booking technology that converts visitors into guests while reducing your dependence on OTAs"
        gradient="from-gray-900 to-bright-black"
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Direct Bookings, Redefined
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed mb-6 max-w-3xl mx-auto">
              Bright Booking is where cutting-edge technology meets conversion optimization. Every element
              is designed to reduce friction, build trust, and turn browsers into bookers—maximizing your
              direct booking revenue while elevating the guest experience.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated seamlessly with BrightOS, it creates an end-to-end hospitality platform that works
              in perfect harmony.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">
                Instant Confirmation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Real-time availability and instant booking confirmation. No waiting, no uncertainty—just
                immediate results that keep guests satisfied.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">
                Mobile-First Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Optimized for every device, our responsive interface ensures a flawless booking
                experience whether guests use phones, tablets, or desktops.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">
                Smart Analytics
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gain deep insights into booking patterns, guest preferences, and revenue trends
                with our comprehensive analytics dashboard.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">
                Seamless Integration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Connect effortlessly with your existing systems including PMS, payment gateways,
                and channel managers for unified operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-12">
            The Competitive Advantage
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                Escape the OTA Trap
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Cut commission costs by 15-25% with conversion-engineered booking flows that make
                direct reservations irresistible. Every booking becomes profit you keep, not revenue
                you share.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                Automation That Scales
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Intelligent workflows handle confirmations, payments, and guest communications
                automatically—letting you manage more bookings with the same team. Technology
                that works while you sleep.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                First Impressions That Convert
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast performance, intuitive navigation, and trust-building design create
                booking experiences that guests remember—before they even check in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Metasearch Integration */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Dominate Google Search
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your hotel will show up and rank highly on Google, capturing travelers at the moment they're searching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3 text-center">
                Premium Visibility
              </h3>
              <p className="text-gray-600 text-center">
                Appear in Google Hotel Search results with real-time rates and availability
              </p>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3 text-center">
                Higher Rankings
              </h3>
              <p className="text-gray-600 text-center">
                Optimized integration ensures your property ranks competitively against OTAs
              </p>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3 text-center">
                Zero Commission
              </h3>
              <p className="text-gray-600 text-center">
                Direct bookings from Google with no OTA commissions—keep 100% of your revenue
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 border-2 border-bright-orange/30 text-center">
            <p className="text-lg text-gray-700 font-medium">
              Intercept travelers before they reach OTA sites—appear in Google search results with competitive rates and instant booking
            </p>
          </div>
        </div>
      </Section>

      {/* PMS Integrations */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Works With Your PMS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bright Booking integrates seamlessly with leading Property Management Systems,
              creating a unified reservation ecosystem
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-bright-orange/20 mb-12">
            <h3 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
              Compatible PMS Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">Opera PMS</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">Mews</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border-2 border-bright-orange">
                <p className="font-semibold text-white mb-2">Cloudbeds</p>
                <span className="inline-block text-xs bg-bright-orange text-white px-2 py-1 rounded font-semibold">Available Today</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">Guesty</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">Hostfully</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">RMS Cloud</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">Stayntouch</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <div className="text-center p-4 bg-bright-black rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300 mb-2">And More</p>
                <span className="inline-block text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-bright-orange/20 to-bright-orange/10 rounded-2xl p-8 border-2 border-bright-orange/30">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="font-heading text-2xl font-semibold text-white">
                Get BrightOS Free
              </h3>
            </div>
            <p className="text-lg text-gray-200 text-center leading-relaxed">
              Subscribe to Bright Booking and unlock BrightOS at no additional cost—combining booking
              power with complete operational management in one integrated platform.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Own Your Distribution
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the direct booking revolution at The Bright Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>See It Live</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/#products"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-orange hover:bg-bright-orange hover:text-white text-bright-orange font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>Explore Our Ecosystem</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
