import Header from '../components/Header';
import Section from '../components/Section';
import ProofBar from '../components/ProofBar';

export const metadata = {
  title: 'Our Hotels - BrightOS',
  description: 'The Bright Hotel runs 5 properties on BrightOS — from an 8-room boutique to a 335-room airport hotel. Every feature was built to solve real operating challenges.',
};

export default function Hotels() {
  return (
    <>
      <Header />

      {/* Hero Stats */}
      <Section background="gradient">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Our Properties</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            We Run Hotels on BrightOS
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We built them because we needed them — and they run our 5 properties every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-bright-orange/50 transition-colors">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                5
              </div>
              <div className="text-lg text-gray-900 font-medium">
                Properties
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-bright-orange/50 transition-colors">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                1,000+
              </div>
              <div className="text-lg text-gray-900 font-medium">
                Rooms Under Management
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-bright-orange/50 transition-colors">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                4-5
              </div>
              <div className="text-lg text-gray-900 font-medium">
                Star Guest Ratings
              </div>
              <p className="text-sm text-gray-500 mt-2">
                With lean, AI-supported teams
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Properties */}
      <Section background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-4">
              The <span className="text-bright-orange">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              From an 8-room Michelin-adjacent boutique to a 335-room airport hotel — BrightOS adapts to every property type and scale.
            </p>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-bright-orange/10 to-bright-orange/5 border border-bright-orange/20 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-bright-orange flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">1,000+ rooms across 5 properties managed by <span className="text-bright-orange font-semibold">1-2 virtual guest experience staff</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Hollywood Hills Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-1">Los Angeles, California &middot; 8 rooms</p>
              <p className="text-xs font-semibold text-bright-orange mb-3">Entirely self-service &middot; No on-site staff</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                A boutique hilltop property with 600-year-old Japanese gardens and city views. Fully self-service — no front desk, no on-site staff. BrightOS handles every guest interaction, from booking through checkout.
              </p>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">0</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">On-Site Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">92%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">AI-Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">4.9</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Memphis Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-1">Memphis, Tennessee &middot; 319 rooms</p>
              <p className="text-xs font-semibold text-bright-orange mb-3">1 on-site operations staff</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                A full-service property near Memphis International Airport. One person on-site manages the physical operation. BrightOS handles guest communication, digital check-in, and ops coordination across the entire property.
              </p>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">1</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">On-Site Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">85%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">AI-Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">4.5</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Kodo
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-1">Downtown Los Angeles &middot; 8 rooms</p>
              <p className="text-xs font-semibold text-bright-orange mb-3">Entirely self-service &middot; No on-site staff</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                An intimate sanctuary in a century-old firehouse with Japanese wabi-sabi aesthetics and a Michelin-recognized restaurant. Fully self-service — BrightOS manages every guest touchpoint.
              </p>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">0</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">On-Site Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">95%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">AI-Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">5.0</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Dayton Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-1">Dayton, Ohio &middot; 287 rooms</p>
              <p className="text-xs font-semibold text-bright-orange mb-3">1 on-site operations staff</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Connected to the Dayton Convention Center via skywalk. Rooftop bar, 16,000+ sq ft of event space. One person on-site manages the physical operation while BrightOS runs guest services, ops, and direct bookings.
              </p>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">1</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">On-Site Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">82%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">AI-Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">4.6</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">
                  Orlando Vitality Hotel
                </h3>
                <svg className="w-8 h-8 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-1">Orlando, Florida &middot; 335 rooms</p>
              <p className="text-xs font-semibold text-bright-orange mb-3">1 on-site operations staff</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                Near Orlando International Airport and major theme parks. One person on-site, BrightOS handling high-volume guest communication, check-in, and direct bookings year-round.
              </p>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">1</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">On-Site Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">84%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">AI-Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-display font-bold text-bright-orange">4.8</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Guest Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 md:p-12 border-2 border-bright-orange/30">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-semibold text-bright-black mb-2">
                What Runs at Every Property
              </h3>
              <p className="text-gray-600">
                The same platform, the same products, adapted to each hotel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Guest Agent', desc: 'AI guest communication, 24/7' },
                { name: 'Ops Agent', desc: 'SMS-based hotel operations' },
                { name: 'Bright Booking', desc: 'Direct bookings, zero OTA commission' },
                { name: 'Bright Check-in', desc: 'Digital mobile check-in with ID verification' },
                { name: 'BrightOS Platform', desc: 'PMS sync, shared intelligence, one dashboard' },
                { name: 'Bright Locks', desc: 'Integrates with major lock providers' },
              ].map((item) => (
                <div key={item.name} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-bright-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-bright-black block text-sm">{item.name}</span>
                    <span className="text-gray-500 text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Want This at Your Hotel?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The same technology running 1,000+ rooms across 5 properties is available for yours.
          </p>
          <ProofBar
            variant="dark"
            points={[
              { value: '5', label: 'Hotels' },
              { value: '1,000+', label: 'Rooms' },
              { value: '2024', label: 'Live Since' },
            ]}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
