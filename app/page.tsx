import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProductCard from './components/ProductCard';
import ConversationMockup from './components/ConversationMockup';
import OpsAgentPreview from './components/OpsAgentPreview';

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <Hero
        subtitle="AI Agents for Hotels"
        title="The Hotel That Runs Itself"
        description="AI agents that handle guest communication across every channel, run ops through text, and capture direct bookings — all powered by your PMS. Connect and go live in days."
      />

      {/* The Problem */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Connect Your PMS. Let AI Run the Rest.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stop managing software. Start managing outcomes. BrightOS turns your PMS into the brain behind every guest interaction, every ops update, every booking — with AI agents that follow your rules and get smarter every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guest Agent */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">Guest Agent</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['SMS', 'Email', 'WhatsApp', 'Voice'].map((ch) => (
                  <span key={ch} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-bright-orange/10 text-bright-orange border border-bright-orange/20">
                    {ch}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every channel. Every language. Every hour. Your Guest Agent handles inbound communication wherever your guests reach out — and responds with full PMS context in seconds.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Instant responses across all channels',
                  'Follows your property\'s specific policies',
                  'Escalates with full conversation + PMS data',
                  'Covers pre-arrival through post-stay',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/platform#guest-agent" className="inline-flex items-center space-x-2 text-bright-orange font-semibold hover:text-bright-orange/80 transition-colors">
                <span>See how it works</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Ops Agent */}
            <div className="bg-gradient-to-br from-bright-grey to-white rounded-2xl p-8 border border-gray-200 hover:border-bright-orange/40 transition-all duration-300">
              <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-black mb-3">Ops Agent</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['SMS', 'WhatsApp'].map((ch) => (
                  <span key={ch} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-bright-orange/10 text-bright-orange border border-bright-orange/20">
                    {ch}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your ops layer. Housekeeping, maintenance, and status updates flow in through the channels your team already uses. Every text becomes structured data — no apps, no logins, no training.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Works on any phone your staff already has',
                  'New hires productive on day one',
                  'Room status, maintenance, workload — tracked automatically',
                  'Feeds real-time data to Guest Agent',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/platform#ops-agent" className="inline-flex items-center space-x-2 text-bright-orange font-semibold hover:text-bright-orange/80 transition-colors">
                <span>See how it works</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Guest Agent in Action */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Every Channel. One Agent.</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
                Instant Answers. Zero Hold Time.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A guest texts asking about late checkout. Another emails about parking. A third messages on WhatsApp in Spanish. Your agent handles all three — simultaneously, in seconds, with full PMS context.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { channel: 'SMS', desc: 'Most common' },
                  { channel: 'Email', desc: 'Pre & post-stay' },
                  { channel: 'WhatsApp', desc: 'International' },
                  { channel: 'Voice', desc: 'Coming soon' },
                ].map((ch) => (
                  <div key={ch.channel} className="flex items-center space-x-2 bg-bright-grey rounded-full px-4 py-2 border border-gray-200">
                    <div className="w-2 h-2 rounded-full bg-bright-orange"></div>
                    <span className="text-sm font-medium text-bright-black">{ch.channel}</span>
                    <span className="text-xs text-gray-400">{ch.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <ConversationMockup
              variant="light"
              title="Guest Messages"
              messages={[
                { sender: 'guest', text: 'What time is checkout?' },
                { sender: 'ai', text: 'Checkout is at 11am. Would you like a late checkout? I can check availability for you.' },
                { sender: 'guest', text: 'Yes please, until 1pm' },
                { sender: 'ai', text: 'Done! Your late checkout is confirmed until 1pm. Enjoy your morning.' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Ops Agent Preview */}
      <Section background="grey">
        <div className="max-w-5xl mx-auto">
          <OpsAgentPreview variant="light" />
        </div>
      </Section>

      {/* Capabilities */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Keep More Revenue. Cut More Lines.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn on Bright Booking to capture direct revenue. Add Bright Check-in to eliminate the front desk bottleneck. Each one makes your agents — and your hotel — smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard
              title="Bright Booking"
              description="Your own booking engine for your website and Google Hotel Search. Guests book direct, you keep the commission. Your Guest Agent can complete bookings, modify stays, and extend reservations — all in conversation."
              href="/platform#capabilities"
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />

            <ProductCard
              title="Bright Check-in"
              description="Guests check in from their phone before they arrive — ID verification, add-on purchases, and room keys in under 90 seconds. 80% complete without any staff help."
              href="/platform#check-in"
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
          </div>
        </div>
      </Section>

      {/* Social Proof — Outcomes */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Not a demo. Not a pilot.</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              This Is How We Run Our Hotels
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              <a href="https://thebrighthotel.com/" target="_blank" rel="noopener noreferrer" className="text-bright-orange font-medium hover:underline">The Bright Hotel</a> operates 5 properties on BrightOS — from an 8-room boutique to a 335-room airport hotel. Every feature exists because we needed it ourselves.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-4xl md:text-5xl font-display font-bold text-bright-orange mb-2">85%</div>
              <div className="text-sm font-medium text-bright-black">Fully AI-Managed</div>
              <p className="text-gray-500 text-xs mt-1">Guest conversations handled without staff</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-4xl md:text-5xl font-display font-bold text-bright-orange mb-2">&lt;4%</div>
              <div className="text-sm font-medium text-bright-black">Escalation Rate</div>
              <p className="text-gray-500 text-xs mt-1">Only the hard stuff reaches your team</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-4xl md:text-5xl font-display font-bold text-bright-orange mb-2">18s</div>
              <div className="text-sm font-medium text-bright-black">Avg. Response</div>
              <p className="text-gray-500 text-xs mt-1">Guests get answers in seconds, not minutes</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="text-4xl md:text-5xl font-display font-bold text-bright-orange mb-2">4.8</div>
              <div className="text-sm font-medium text-bright-black">Guest Rating</div>
              <p className="text-gray-500 text-xs mt-1">Average across all 5 properties</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-bright-grey rounded-2xl p-8 md:p-10 border border-gray-200 max-w-3xl mx-auto text-center">
            <svg className="w-8 h-8 text-bright-orange/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "We used to have three people at the front desk during peak check-in. Now Guest Agent handles the routine, Bright Check-in gets guests to their rooms, and our team focuses on the moments that actually matter. It's a completely different operation."
            </p>
            <div>
              <p className="font-semibold text-bright-black">Operations Manager</p>
              <p className="text-sm text-gray-500">335-room Airport Hotel, Orlando</p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Live in Days. Not Months.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No consultants. No six-month rollout. Three steps and your agents are working.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                Connect Your PMS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                BrightOS syncs with Cloudbeds and Oracle Opera — reservations, rooms, and guest profiles flow in automatically. <a href="/integrations" className="text-bright-orange hover:underline">More integrations</a> coming.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                Set Your Policies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell your agents how your hotel works — what to say, when to escalate, which rules apply to which property. You stay in control.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                Go Live
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your agents start handling guest communication across every channel and ops via text — immediately. Add Booking and Check-in when you're ready.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Your Hotel, Running Itself
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Same guests, same staff, same property — less overhead, less repetition, more revenue. See what BrightOS looks like at your hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              href="/hotels"
              className="inline-flex items-center justify-center space-x-2 border-2 border-bright-orange hover:bg-bright-orange hover:text-white text-bright-orange font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <span>See It Running at Our Hotels</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
