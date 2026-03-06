import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

export const metadata = {
  title: 'Integrations - BrightOS',
  description: 'BrightOS connects to your PMS and starts working. Live integrations with Cloudbeds and Oracle Opera. Mews, Guesty, Hostfully, and more coming soon.',
};

export default function IntegrationsPage() {
  return (
    <>
      <Header />

      <PageHeader
        subtitle="Integrations"
        title="Plug In Your PMS. BrightOS Handles the Rest."
        description="BrightOS syncs with your property management system in real time — pulling reservations, room inventory, and guest profiles so everything stays connected."
      />

      {/* Live Integrations */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Live Now</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Connected and Operational
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These integrations are live across our properties. Real-time sync, tested at scale, running every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Cloudbeds */}
            <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 md:p-10 border-2 border-bright-orange/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">Cloudbeds</h3>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Live</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Full two-way sync with the Cloudbeds PMS. Reservations, room status, guest profiles, and rate plans flow into BrightOS automatically. Changes in either system stay in sync.
              </p>
              <div className="space-y-3">
                {[
                  'Real-time reservation sync',
                  'Room inventory and availability',
                  'Guest profiles and preferences',
                  'Rate plans and pricing',
                  'Booking confirmations written back to PMS',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Oracle Opera */}
            <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 md:p-10 border-2 border-bright-orange/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl font-semibold text-bright-black">Oracle Opera</h3>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Live</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Enterprise-grade integration with Oracle Opera PMS. Built for full-service and large-scale properties that run on Oracle's hospitality platform.
              </p>
              <div className="space-y-3">
                {[
                  'Real-time reservation sync',
                  'Room inventory and availability',
                  'Guest profiles and stay history',
                  'Rate plans and pricing',
                  'Booking confirmations written back to PMS',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Coming Soon */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">On the Roadmap</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              More PMS Integrations Coming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building integrations with the PMS platforms independent hotels use most. If yours isn't listed, let us know — it moves up the list.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Mews', desc: 'Cloud-native PMS for modern hotels' },
              { name: 'Guesty', desc: 'Multi-channel property management' },
              { name: 'Hostfully', desc: 'Property management for hospitality' },
              { name: 'RoomRaccoon', desc: 'All-in-one hotel management' },
              { name: 'innRoad', desc: 'PMS for independent properties' },
              { name: 'StayNTouch', desc: 'Mobile-first hotel PMS' },
            ].map((pms) => (
              <div key={pms.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg font-semibold text-gray-900">{pms.name}</h3>
                  <span className="text-xs bg-bright-orange/20 text-bright-orange px-2.5 py-0.5 rounded-full font-medium">Coming Soon</span>
                </div>
                <p className="text-gray-500 text-sm">{pms.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-2">Don't see your PMS?</p>
            <a
              href="/signup"
              className="text-bright-orange font-semibold hover:underline"
            >
              Join the waitlist and tell us what you use →
            </a>
          </div>
        </div>
      </Section>

      {/* How Integration Works */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your PMS stays the system of record. BrightOS reads from it and powers everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Connect Once
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Authenticate your PMS and BrightOS imports your property data — rooms, rates, reservations, and guest profiles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Stays in Sync
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Changes in your PMS reflect in BrightOS immediately. New bookings, cancellations, room moves — everything stays current.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">
                Writes Back
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Direct bookings through Bright Booking are written back into your PMS automatically. No double entry. No reconciliation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Works With Your PMS
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Already on Cloudbeds or Oracle Opera? You can be live on BrightOS in days. On something else? Join the waitlist and we'll prioritize your platform.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
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
