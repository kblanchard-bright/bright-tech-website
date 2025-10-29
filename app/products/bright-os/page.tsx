import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

export const metadata = {
  title: 'BrightOS - Bright Technology',
  description: 'AI-powered hotel operating system managing guest communications, operations, and automation. Free with Bright Booking.',
};

export default function BrightOS() {
  return (
    <>
      <Header />

      <Hero
        subtitle="BrightOS"
        title="The Future of Hotel Operations"
        description="AI-powered platform unifying guest communications, operations management, and intelligent automation"
        gradient="from-gray-900 to-bright-black"
      />

      {/* Overview Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Three Pillars. One Platform.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              BrightOS reimagines hotel management by seamlessly integrating guest communications,
              operational workflows, and AI-powered automation. It's not just software—it's the
              intelligent backbone of next-generation hospitality.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Experience operational excellence where technology anticipates needs, automates repetitive
              tasks, and elevates every guest interaction.
            </p>
            <p className="text-lg text-gray-600 italic">
              You focus on what matters, we focus on what's routine
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                Guest Communications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Intelligent messaging that learns from every interaction. Automated pre-arrival communications,
                real-time guest requests, and personalized follow-ups—all managed by AI.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                Operations Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unified control over housekeeping, maintenance, front desk, and back office. Real-time visibility
                into every aspect of your property with smart task prioritization.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">
                AI Automation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Machine learning that understands your property's unique patterns. Automatically handles routine
                communications and workflows, saving hours every day while continuously improving.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Features */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6 text-center">
            AI That Works For You
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            BrightOS learns your property's unique patterns and continuously evolves to serve you better
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="text-4xl font-bold text-bright-orange mb-2">10+ hrs</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Saved Per Week
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Automate routine guest communications, status updates, and operational workflows—freeing
                your team to focus on exceptional service.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="text-4xl font-bold text-bright-orange mb-2">∞</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Always Learning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The system becomes more intelligent with every interaction, adapting responses and
                workflows to match your property's unique needs.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20">
              <div className="text-4xl font-bold text-bright-orange mb-2">24/7</div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Automated Messaging
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Intelligent guest communication that responds instantly, personalizes automatically, and
                escalates when human attention is needed.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-bright-black rounded-2xl p-8 md:p-12 border border-bright-orange/30">
            <h3 className="font-heading text-3xl font-semibold text-bright-orange mb-6">
              Intelligent Automation Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Pre-arrival check-in reminders with personalized details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Smart housekeeping schedules based on checkout patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Automated responses to common guest questions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Proactive maintenance alerts before issues arise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Post-stay follow-ups with feedback requests</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-bright-orange flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">Task prioritization based on urgency and capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PMS Integrations */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Seamless PMS Integration
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              BrightOS connects with your existing Property Management System to create a unified
              technology ecosystem
            </p>
          </div>

          <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 md:p-12 border border-bright-orange/20 mb-12">
            <h3 className="font-heading text-2xl font-semibold text-bright-black mb-8 text-center">
              Supported PMS Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-2">Opera PMS</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
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
                <p className="font-semibold text-gray-800 mb-2">More...</p>
                <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                Real-Time Sync
              </h4>
              <p className="text-gray-600">
                Instant data synchronization keeps BrightOS and your PMS perfectly aligned
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                Secure Connection
              </h4>
              <p className="text-gray-600">
                Enterprise-grade encryption protects your guest and operational data
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-heading text-lg font-semibold text-bright-black mb-2">
                Easy Setup
              </h4>
              <p className="text-gray-600">
                One-click integration gets you up and running in minutes
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Flexible Pricing
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-bright-black rounded-2xl p-8 md:p-12 border-2 border-bright-orange/30">
            <div className="mb-8">
              <div className="inline-block bg-bright-orange text-white font-bold text-lg px-6 py-3 rounded-full mb-4">
                FREE with Bright Booking
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get BrightOS at no additional cost when you subscribe to Bright Booking. It's our way
                of ensuring you have the complete technology stack to transform your property.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg text-gray-300 mb-4">
                Standalone pricing available for properties using other booking systems.
              </p>
              <a
                href="/hotels"
                className="inline-flex items-center space-x-2 text-bright-orange font-semibold hover:underline"
              >
                <span>See it in action at The Bright Hotel</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Step Into Tomorrow
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Witness BrightOS transforming hospitality in real-time at The Bright Hotel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
            >
              <span>Experience the Future</span>
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
