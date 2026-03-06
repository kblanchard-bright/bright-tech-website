import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import ProofBar from '../../components/ProofBar';

export const metadata = {
  title: 'Bright Check-in - BrightOS Extension',
  description: 'Add Bright Check-in and your Guest Agent can guide guests through ID verification, offer add-ons, issue room keys, and handle check-in issues — all before they walk through your door.',
};

export default function BrightCheckIn() {
  return (
    <>
      <Header />

      <PageHeader
        subtitle="BrightOS Extension"
        title="Give Your Agent Check-In Capabilities"
        description="Add Bright Check-in and your Guest Agent can guide guests through ID verification, offer add-ons, issue room keys, and handle check-in issues — all before they walk through your door."
      />

      {/* The Problem */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">The Reality</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
                The Front Desk Bottleneck
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Every guest arrives at roughly the same time. They stand in line, hand over an ID, sign a form, get a key. Your front desk staff is overwhelmed at 3 PM and idle at 3 AM.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Meanwhile, guests just want to get to their room. They've been traveling all day. The last thing they want is a queue.
              </p>
            </div>
            <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl p-8 border border-bright-orange/20">
              <div className="space-y-5">
                {[
                  'Long lines during peak check-in hours',
                  'Manual ID checks slow everything down',
                  'Staffing the desk for every arrival is expensive',
                  'Upsell opportunities lost in the rush',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-gray-700 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">The Flow</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Four Steps. One Minute.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Guests complete check-in on their phone before they ever walk through your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-bright-orange/20">
              <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Get the Link
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Guest receives a check-in link via SMS or email before arrival.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-bright-orange/20">
              <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Verify Identity
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Selfie + ID photo verified by Persona. Automated, secure, and fast.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-bright-orange/20">
              <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Choose Add-ons
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Late checkout, parking, breakfast, room upgrades — purchased right in the flow.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-6 border border-bright-orange/20">
              <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">4</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Get Room & Key
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Room assigned, key issued. Guest walks straight to their room.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">The Numbers</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              It Just Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real numbers from real properties running Bright Check-in today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                ~80%
              </div>
              <div className="text-lg font-medium text-bright-black mb-2">
                Complete Without Help
              </div>
              <p className="text-gray-600 text-sm">
                80-85% of guests finish check-in without any manual support from staff.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                97%
              </div>
              <div className="text-lg font-medium text-bright-black mb-2">
                Pass ID Verification
              </div>
              <p className="text-gray-600 text-sm">
                Persona ID verification works the first time for nearly every guest.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">
                1:28
              </div>
              <div className="text-lg font-medium text-bright-black mb-2">
                Average Completion
              </div>
              <p className="text-gray-600 text-sm">
                From opening the link to having a room key — under 90 seconds.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Why It Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Fewer Front Desk Staff Needed
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                When most guests check in on their phone, you don't need three people at the desk during peak hours. Redeploy staff where they actually improve the guest experience.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Upsell Revenue from Add-ons
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Late checkout, parking passes, breakfast packages, room upgrades. Guests purchase add-ons during check-in without any staff involvement.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Faster Arrivals, Happier Guests
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                No lines, no waiting, no paperwork. Guests walk in and go straight to their room. First impressions start before they reach the lobby.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20">
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                Data Flows to Your Agents
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Check-in data feeds directly to your agents. Guest Agent knows who has checked in, what add-ons they purchased, and can respond to check-in questions. Staff Agent knows which rooms need turning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Expand What Your Agent Can Do
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Add Bright Check-in to BrightOS and give your agents check-in capabilities.
          </p>
          <ProofBar
            variant="light"
            points={[
              { value: '~80%', label: 'Self-Service Rate' },
              { value: '97%', label: 'ID Verification' },
              { value: '1:28', label: 'Avg. Completion' },
            ]}
          />
          <a
            href="/signup"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50 mt-10"
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
