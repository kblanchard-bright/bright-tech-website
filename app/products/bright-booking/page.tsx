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
        title="Seamless Reservations, Elevated Experiences"
        description="Transform how guests book and interact with your hotel through intelligent automation and beautiful design"
        gradient="from-bright-black via-orange-900/20 to-bright-black"
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
              Modern Booking for Modern Guests
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Bright Booking reimagines the reservation experience from the ground up. Our system combines
              intuitive design with powerful features to make booking effortless for guests while giving
              you complete control and insights.
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
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-12">
            Why Hotels Choose <span className="text-bright-orange">Bright Booking</span>
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                Increase Direct Bookings
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Reduce reliance on OTAs with a beautiful, conversion-optimized booking engine that
                encourages guests to book directly, saving you commission fees.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                Reduce Administrative Work
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Automated confirmation emails, payment processing, and calendar management mean less
                manual work and fewer errors for your staff.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-left">
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                Delight Your Guests
              </h3>
              <p className="text-gray-300 leading-relaxed">
                From the first click to check-in, provide an experience that's smooth, modern, and
                memorable—setting the tone for their entire stay.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
            Ready to Transform Your Booking Process?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            See how Bright Booking can increase your revenue and guest satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>See It In Action</span>
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
