import Header from '../components/Header';
import Section from '../components/Section';

export const metadata = {
  title: 'Our Hotels - BrightOS',
  description: 'Discover The Bright Hotel\'s portfolio of technology-powered properties across the United States.',
};

export default function Hotels() {
  return (
    <>
      <Header />

      {/* Stats Banner */}
      <Section background="gradient">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-6">
            Where Innovation Lives
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Real hotels. Real results. Real transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-bright-orange/30 hover:border-bright-orange/50 transition-colors">
              <div className="text-6xl font-display font-bold text-bright-orange mb-3">
                1000+
              </div>
              <div className="text-xl text-white font-medium">
                Rooms Managed
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-bright-orange/30 hover:border-bright-orange/50 transition-colors">
              <div className="text-6xl font-display font-bold text-bright-orange mb-3">
                10x
              </div>
              <div className="text-xl text-white font-medium">
                Operational Efficiency
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Productivity gains vs. traditional hotels
              </p>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-bright-orange/30 hover:border-bright-orange/50 transition-colors">
              <div className="text-6xl font-display font-bold text-bright-orange mb-3">
                4-5★
              </div>
              <div className="text-xl text-white font-medium">
                Guest Ratings
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Properties Showcase */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
              Our <span className="text-bright-orange">Hotels</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Real properties. Real results. Real proof that intelligent automation transforms hospitality.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five unique properties across the United States, each maintaining 4-5 star guest ratings with just one staff member per hotel—while our technology handles everything from bookings to operations seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Hollywood Hills Hotel */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Hollywood Hills Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-3">Los Angeles, California</p>
              <p className="text-gray-700 leading-relaxed">
                Our flagship property blends boutique luxury with invisible technology in a historic hillside sanctuary featuring 600-year-old Japanese gardens and panoramic city views. Just minutes from the Sunset Strip, this tech-enabled retreat delivers 4-5 star experiences through contactless check-in, 24/7 virtual concierge, and seamless automation—all while maintaining the tranquil ambiance of its cultural heritage.
              </p>
            </div>

            {/* Memphis Vitality Hotel */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Memphis Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-3">Memphis, Tennessee</p>
              <p className="text-gray-700 leading-relaxed">
                This fully renovated 319-room property near Memphis International Airport proves that 4-star comfort and smart value can coexist with automation. Featuring digital check-in, smartphone room keys, heated pools, and the on-site Vera Italian Restaurant, it's where Southern hospitality meets technology-driven efficiency—just minutes from Graceland and Beale Street's legendary music scene.
              </p>
            </div>

            {/* Kodo */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Kodo
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-3">Downtown Arts District, Los Angeles</p>
              <p className="text-gray-700 leading-relaxed">
                An intimate 8-room sanctuary housed in a century-old firehouse, Kodō blends Japanese wabi-sabi aesthetics with hidden technology. Featuring ryokan-style accommodations, tatami details, and a Michelin-recognized restaurant, this boutique property delivers spiritual renewal through minimalist luxury and seamless digital experiences—our most refined expression of invisible automation in hospitality.
              </p>
            </div>

            {/* Dayton Vitality Hotel */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Dayton Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-3">Dayton, Ohio</p>
              <p className="text-gray-700 leading-relaxed">
                Connected directly to the Dayton Convention Center via skywalk, this modern 287-room property brings tech-enabled lifestyle hospitality to Ohio's revitalized downtown. With a rooftop bar offering panoramic views, 16,000+ square feet of event space, and seamless digital operations, it's where business meets bright energy—demonstrating how our technology scales across diverse markets.
              </p>
            </div>

            {/* Orlando Vitality Hotel */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Orlando Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-gray-600 mb-3">Orlando, Florida</p>
              <p className="text-gray-700 leading-relaxed">
                Just 10 minutes from Orlando International Airport and minutes from world-famous theme parks, this 335-room property blends cutting-edge technology with mindful wellness. Featuring hassle-free self-check-in, 24/7 digital concierge, contemporary pool facilities, and complimentary breakfast, it serves both business and leisure travelers—proving our technology scales effortlessly with high-volume tourism demand.
              </p>
            </div>
          </div>

          {/* Technology Showcase Box */}
          <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 md:p-12 border-2 border-bright-orange/30">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-semibold text-bright-black mb-4">
                Powered by BrightOS
              </h3>
              <p className="text-lg text-gray-700">
                Every property runs on our complete technology stack
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-bright-black block">Bright Booking</span>
                  <span className="text-gray-600 text-sm">Direct bookings maximized</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-bright-black block">BrightOS</span>
                  <span className="text-gray-600 text-sm">AI-powered platform foundation</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-bright-black block">Bright Locks</span>
                  <span className="text-gray-600 text-sm">Keyless entry system</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-medium text-bright-black block">Bright Check-in</span>
                  <span className="text-gray-600 text-sm">Contactless arrival <span className="text-bright-orange">(Coming Soon)</span></span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-bright-black block">AI Automation</span>
                  <span className="text-gray-600 text-sm">24/7 intelligent systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Ready to Bring This Innovation to Your Hotel?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Discover how our proven technology can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#products"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>Explore Our Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://thebrighthotel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-orange hover:bg-bright-orange hover:text-white text-bright-orange font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>Visit The Bright Hotel</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
