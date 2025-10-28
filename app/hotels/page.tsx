import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';

export const metadata = {
  title: 'Our Hotels - Bright Technology',
  description: 'Discover The Bright Hotel, our flagship partner where innovation meets hospitality.',
};

export default function Hotels() {
  return (
    <>
      <Header />

      <Hero
        subtitle="Our Partner Hotels"
        title="Excellence in Hospitality"
        description="Showcasing the future of hotel technology through our partnership with The Bright Hotel"
        gradient="from-bright-black via-gray-800 to-bright-black"
      />

      {/* The Bright Hotel Feature */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-bright-black mb-6">
              The <span className="text-bright-orange">Bright Hotel</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our flagship partnership and innovation laboratory
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <h3 className="font-heading text-3xl font-semibold text-bright-black">
                Where Innovation Meets Hospitality
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Bright Hotel serves as our proving ground for cutting-edge hospitality technology.
                Every product we develop is rigorously tested and refined in this real-world environment,
                ensuring our solutions meet the highest standards of excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This partnership allows us to understand the nuances of hotel operations from the inside out,
                creating technology that truly serves the needs of modern hospitality.
              </p>
              <a
                href="https://thebrighthotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-bright-orange font-semibold hover:underline text-lg"
              >
                <span>Visit The Bright Hotel</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 border border-bright-orange/20">
              <h4 className="font-heading text-2xl font-semibold text-bright-black mb-6">
                Technology in Action
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-bright-black">Bright Booking System</span>
                    <p className="text-gray-600">Seamless reservation management</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-bright-black">BrightOS Platform</span>
                    <p className="text-gray-600">Centralized operations dashboard</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-bright-black">Guest Experience Tech</span>
                    <p className="text-gray-600">Modern check-in and concierge services</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-bright-black">Smart Automation</span>
                    <p className="text-gray-600">AI-powered efficiency tools</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gradient">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            Innovation by the Numbers
          </h2>
          <p className="text-xl text-gray-300">
            Real results from our partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-4">
              100%
            </div>
            <div className="text-xl text-white font-medium mb-2">
              Digital Operations
            </div>
            <p className="text-gray-400">
              Fully integrated technology stack
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-4">
              24/7
            </div>
            <div className="text-xl text-white font-medium mb-2">
              Smart Systems
            </div>
            <p className="text-gray-400">
              Always-on intelligent automation
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-4">
              ∞
            </div>
            <div className="text-xl text-white font-medium mb-2">
              Innovation
            </div>
            <p className="text-gray-400">
              Continuous improvement and updates
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-black mb-6">
            Ready to Bring This Innovation to Your Hotel?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Discover how our proven technology can transform your operations
          </p>
          <a
            href="/#products"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
          >
            <span>Explore Our Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
