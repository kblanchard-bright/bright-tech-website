import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';

export const metadata = {
  title: 'Bright Booking - BrightOS Extension',
  description: 'Add Bright Booking and your Guest Agent can help guests book direct, extend stays, and modify reservations — all in conversation. Plus a conversion-optimized engine for your website and Google Hotel Search.',
};

export default function BrightBooking() {
  return (
    <>
      <Header />

      <PageHeader
        subtitle="BrightOS Extension"
        title="Give Your Agent the Power to Book"
        description="Add Bright Booking and your Guest Agent can help guests book direct, extend stays, and modify reservations — all in conversation. Plus a conversion-optimized engine for your website and Google Hotel Search."
      />

      {/* Overview */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">The Opportunity</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Your Guests Are Already Looking for You
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
              Travelers search your hotel name on Google. They visit your website. They want to book direct — but if your booking experience is clunky, slow, or confusing, they go back to Expedia. Bright Booking makes sure they don't.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Instant Confirmation
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Real-time PMS sync means accurate availability and instant booking confirmation. No lag, no "we'll get back to you." Guests book and know immediately.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Google Hotel Search
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Show up in Google with real-time rates alongside OTAs — but when guests book through your listing, you pay zero commission. Intercept demand before it reaches Booking.com.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Mobile-First
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Over 60% of hotel searches happen on mobile. Bright Booking is designed for thumbs first, desktops second. Fast load, clean flow, fewer abandoned bookings.
              </p>
            </div>

            <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                PMS Connected
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Live with Cloudbeds and Oracle Opera, <a href="/integrations" className="text-bright-orange hover:underline">more coming soon</a>. Reservations flow straight into your system. No double-entry, no manual reconciliation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BrightOS Included */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">What Your Agent Gains</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Your Guest Agent Gets Smarter
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bright Booking has two sides: a booking engine for your website, and new capabilities for your Guest Agent.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-xl font-semibold text-bright-orange mb-3">
                Conversational Booking
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Guest texts about availability, agent checks inventory, shares rates, can complete the booking. No forms, no friction — just a conversation.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-xl font-semibold text-bright-orange mb-3">
                Stay Modifications
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Guests extend, change dates, or upgrade through the agent instead of calling the front desk. Fewer calls, happier guests, same outcome.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-2xl border border-bright-orange/20 text-left">
              <h3 className="font-heading text-xl font-semibold text-bright-orange mb-3">
                Revenue You Keep
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every booking that comes through Bright Booking instead of an OTA is revenue you keep. Same guest, same room, same stay — you just don't pay the middleman.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Give Your Agent Booking Power
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Add Bright Booking and expand what your Guest Agent can do.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
          >
            <span>Join the Waitlist</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
