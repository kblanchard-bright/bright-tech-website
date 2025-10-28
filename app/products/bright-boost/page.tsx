import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export const metadata = {
  title: 'Bright Boost - Coming Soon - Bright Technology',
  description: 'AI-powered revenue optimization coming soon to maximize your hotel profitability.',
};

export default function BrightBoost() {
  return (
    <>
      <Header />

      <Hero
        subtitle="Bright Boost - Coming Soon"
        title="AI-Powered Revenue Optimization"
        description="The future of hotel revenue management is almost here"
        gradient="from-gray-900 to-bright-black"
      />

      {/* Coming Soon Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block bg-bright-orange/10 text-bright-orange font-semibold px-6 py-3 rounded-full mb-8 text-lg">
              Coming Soon
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Maximize Every Revenue Opportunity
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Bright Boost harnesses the power of artificial intelligence to optimize your pricing,
              predict demand, and identify upselling opportunities—automatically increasing your
              revenue while you focus on delighting guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Dynamic Pricing
              </h3>
              <p className="text-gray-700">
                AI algorithms adjust rates in real-time based on demand, competition, and market conditions
              </p>
            </div>

            <div className="p-6 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Demand Forecasting
              </h3>
              <p className="text-gray-700">
                Predictive analytics help you anticipate booking patterns and optimize inventory
              </p>
            </div>

            <div className="p-6 bg-bright-grey rounded-2xl border border-bright-orange/20">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Smart Upselling
              </h3>
              <p className="text-gray-700">
                Personalized upgrade and add-on recommendations that guests actually want
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-12 text-center">
            What to Expect
          </h2>

          <div className="space-y-6">
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-bright-orange rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                    Intelligent Rate Management
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Let AI handle the complexity of pricing strategies. Bright Boost continuously learns
                    from your market and automatically optimizes rates to maximize revenue per available
                    room (RevPAR).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-bright-orange rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                    Predictive Analytics Dashboard
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Visualize future demand, revenue projections, and market trends with beautiful,
                    easy-to-understand dashboards that help you make informed strategic decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-bright-orange rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-3">
                    Seamless Integration
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Works perfectly with Bright Booking and BrightOS, creating a unified revenue
                    optimization ecosystem that requires no manual intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stay Tuned Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Bright Boost is in active development. Stay tuned for updates as we prepare to launch
            this game-changing revenue optimization platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#products"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>Explore Available Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-black hover:bg-bright-black hover:text-white text-bright-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>See Our Technology</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
