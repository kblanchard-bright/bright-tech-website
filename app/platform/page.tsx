import Header from '../components/Header';
import PlatformNav from '../components/PlatformNav';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import ConversationMockup from '../components/ConversationMockup';
import ProofBar from '../components/ProofBar';
import AgentFlowDiagram from '../components/AgentFlowDiagram';
import PhoneMockup from '../components/PhoneMockup';
import BeforeAfterOps from '../components/BeforeAfterOps';
import SignalFlow from '../components/SignalFlow';

export const metadata = {
  title: 'BrightOS Platform - AI Agents for Hotels',
  description: 'BrightOS is the intelligence layer between your guests, your staff, and your hotel. AI agents driven by your policies, connected to your PMS, learning from every interaction.',
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <PlatformNav />

      {/* 1. PageHeader */}
      <PageHeader
        subtitle="The Platform"
        title="The Hotel That Runs Itself"
        description="BrightOS is the intelligence layer between your guests, your staff, and your hotel. AI agents driven by your policies, connected to your PMS, learning from every interaction."
      />

      {/* 2. Architecture Overview */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">The Foundation</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
              Your PMS. Your Policies. Agents Do the Rest.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              BrightOS syncs with Cloudbeds and Oracle Opera in real time — pulling reservations, room inventory, and guest profiles. Everything else builds on that connection. <a href="/integrations" className="text-bright-orange hover:underline">See all integrations</a>
            </p>
          </div>

          <AgentFlowDiagram />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">PMS Sync</h3>
              <p className="text-gray-700 leading-relaxed">
                Live with Cloudbeds and Oracle Opera. Reservations, room inventory, and guest profiles flow in automatically. <a href="/integrations" className="text-bright-orange hover:underline">More integrations coming</a>
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">Shared Intelligence</h3>
              <p className="text-gray-700 leading-relaxed">
                Every agent draws from the same knowledge. When one learns something — a guest preference, a room status, a maintenance issue — every other agent knows instantly.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">One Dashboard</h3>
              <p className="text-gray-700 leading-relaxed">
                See what your agents are doing across every channel, every department, in real time. Bookings, guest messages, room status, and maintenance — all visible in a single interface.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-bright-orange mb-3">Policy-Driven</h3>
              <p className="text-gray-700 leading-relaxed">
                Your agents operate based on policies you define. Different properties, different rules, different behavior. Adjust how your agents respond, what they handle, and when they escalate — without writing a line of code.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Guest Agent */}
      <div id="guest-agent" className="scroll-mt-24">
        <Section background="gradient">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-bright-orange uppercase tracking-wider mb-3">Day 1 — Guest Agent Goes Live</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
                Every Channel. Every Language. Every Hour.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                SMS, email, WhatsApp, voice — your Guest Agent meets guests on whatever channel they prefer. It reads every inbound message, checks your PMS for context, and responds in seconds.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { channel: 'SMS', desc: 'Most common' },
                  { channel: 'Email', desc: 'Pre & post-stay' },
                  { channel: 'WhatsApp', desc: 'International' },
                  { channel: 'Voice', desc: 'Coming soon' },
                ].map((ch) => (
                  <div key={ch.channel} className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-bright-orange"></div>
                    <span className="text-sm font-medium text-bright-black">{ch.channel}</span>
                    <span className="text-xs text-gray-400">{ch.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">Resolved Autonomously</h3>
                <p className="text-gray-500 text-sm mb-4">The questions guests ask every day — answered in seconds.</p>
                <div className="space-y-3">
                  {[
                    'Check-in and checkout times',
                    'Parking, WiFi, and access info',
                    'Late checkout requests',
                    'Pre-arrival and post-stay messages',
                    'Directions and local recommendations',
                    'Property amenity questions',
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

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">Escalated with Context</h3>
                <p className="text-gray-500 text-sm mb-4">Some things need a human. Your Guest Agent knows the difference.</p>
                <div className="space-y-3">
                  {[
                    'Room condition issues',
                    'Billing disputes',
                    'Safety or security concerns',
                    'Complex special requests',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-bright-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-bright-grey rounded-xl p-4 border border-gray-200">
                  <p className="text-gray-500 text-sm">
                    Escalations include full conversation history, guest details from your PMS, and suggested responses. Your team picks up with complete context.
                  </p>
                </div>
              </div>
            </div>

            {/* Conversation Example — animated phone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <PhoneMockup
                title="Guest Messages"
                messages={[
                  { sender: 'guest', text: 'Is there parking at the hotel?' },
                  { sender: 'ai', text: 'Yes! Free self-parking is available behind the building. You\'ll see signs when you arrive.' },
                  { sender: 'guest', text: 'Great. Also the AC in 412 isn\'t working' },
                  { sender: 'system', text: 'Escalated to front desk' },
                  { sender: 'ai', text: 'Sorry about that — I\'ve notified our team and someone will be up shortly. Is there anything else I can help with?' },
                ]}
              />
              <div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                  Handles the Routine. Escalates What Matters.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Your Guest Agent responds naturally, resolves what it can, and loops in your team the moment something needs a human touch.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  One agent across every channel — your guests don't think about how to reach you. They just do.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* 4. Ops Agent Problem */}
      <div id="ops-agent" className="scroll-mt-24">
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-bright-orange uppercase tracking-wider mb-3">Week 1 — Add Ops Agent</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Your Team Already Knows How to Text
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {['SMS', 'WhatsApp'].map((ch) => (
                <span key={ch} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-bright-orange/10 text-bright-orange border border-bright-orange/20">
                  {ch}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Hotel ops software fails because it asks people to stop working and start clicking. Ops Agent meets your team where they are — on their phone, in a text thread. Every message becomes structured data that powers your entire operation.
            </p>

            <BeforeAfterOps />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-bright-grey rounded-2xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-bright-black mb-2">Apps Don't Stick</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Your housekeeping staff has 30 rooms to turn. They're not stopping to open an app, log in, and navigate a dashboard between each one.</p>
              </div>
              <div className="bg-bright-grey rounded-2xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-bright-black mb-2">Turnover Kills Training</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Hospitality averages 73% annual turnover. Every new hire is another round of software training that competes with learning the actual job.</p>
              </div>
              <div className="bg-bright-grey rounded-2xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-bright-black mb-2">Blind Operations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">When teams fall back to clipboards and radios, you lose real-time visibility. Rooms sit ready but unassigned. Maintenance requests get lost.</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* 5. Ops Agent "Just Text" */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Just Text
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your staff texts two words. BrightOS does everything else — update the PMS, notify the team, tell the guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ConversationMockup
              variant="light"
              title="Housekeeping"
              messages={[
                { sender: 'staff', text: '204 clean' },
                { sender: 'ai', text: 'Room 204 marked ready. 3 rooms left on your list.' },
              ]}
            />

            <ConversationMockup
              variant="light"
              title="Maintenance"
              messages={[
                { sender: 'staff', text: 'AC unit 307 not cooling' },
                { sender: 'ai', text: 'Ticket created for 307 — AC issue. What part is needed?' },
                { sender: 'staff', text: 'Capacitor' },
                { sender: 'ai', text: 'Updated. Manager notified.' },
              ]}
            />

            <ConversationMockup
              variant="light"
              title="Status Check"
              messages={[
                { sender: 'staff', text: 'Status?' },
                { sender: 'ai', text: '12 rooms remaining. 8 in progress. ETA: 2:30 PM.' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* 6. Ops Agent Tracking */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Visibility Without Effort</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Complete Operations Data — Nobody "Uses Software"
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Every text becomes structured data. You get the dashboards. Your team never changes how they work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Room Status Board', desc: 'Live view of every room — dirty, in-progress, clean, inspected. Updates the second a housekeeper texts.' },
              { title: 'Maintenance Tracking', desc: 'Issues logged with room number, description, and status. Assigned automatically. Tracked to resolution.' },
              { title: 'Turn Times', desc: 'Average cleaning time by housekeeper, by room type, by day. No stopwatches or manual logging.' },
              { title: 'Team Workload', desc: 'See who\'s ahead of pace, who needs support, and where bottlenecks are forming — in real time.' },
            ].map((item) => (
              <div key={item.title} className="bg-bright-grey rounded-2xl p-6 border border-gray-200">
                <h3 className="font-heading text-lg font-semibold text-bright-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. Ops Agent Powers Guest Agent */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">One Intelligence</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Every Agent Shares the Same Brain
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            When a housekeeper texts "204 clean," Guest Agent immediately knows that room is ready. When a guest asks about late checkout, Ops Agent already knows the housekeeping schedule. One platform. Shared intelligence. Every agent makes every other agent smarter.
          </p>
          <SignalFlow />
        </div>
      </Section>

      {/* 8. Capabilities: Bright Booking */}
      <div id="capabilities" className="scroll-mt-24">
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-bright-orange uppercase tracking-wider mb-3">Month 1 — Turn On Direct Revenue</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
                Stop Paying for Bookings You Could Own
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Every booking through an OTA costs you 15-25% in commission. Bright Booking captures that revenue and gives your Guest Agent the ability to book, modify, and extend stays in conversation.
              </p>
            </div>

            {/* Bright Booking */}
            <div className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-semibold text-bright-orange">Bright Booking</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-bright-black mb-3">Instant Confirmation</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Real-time PMS sync means accurate availability and instant booking confirmation. No lag, no "we'll get back to you."
                  </p>
                </div>

                <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-bright-black mb-3">Google Hotel Search</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Show up in Google with real-time rates alongside OTAs — when guests book through your listing, you pay zero commission.
                  </p>
                </div>

                <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-bright-black mb-3">Mobile-First</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Over 60% of hotel searches happen on mobile. Bright Booking is designed for thumbs first, desktops second.
                  </p>
                </div>

                <div className="p-8 bg-bright-grey rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-bright-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-semibold text-bright-black mb-3">PMS Connected</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Live with Cloudbeds and Oracle Opera, <a href="/integrations" className="text-bright-orange hover:underline">more coming soon</a>. Reservations flow straight into your system.
                  </p>
                </div>
              </div>

              {/* Agent Capabilities */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">What Your Agent Gains</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
                    <h4 className="font-heading text-lg font-semibold text-bright-orange mb-2">Conversational Booking</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Guest texts about availability, agent checks inventory, shares rates, can complete the booking. No forms, no friction.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
                    <h4 className="font-heading text-lg font-semibold text-bright-orange mb-2">Stay Modifications</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Guests extend, change dates, or upgrade through the agent instead of calling the front desk. Fewer calls, happier guests.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl border-2 border-bright-orange/30">
                    <h4 className="font-heading text-lg font-semibold text-bright-orange mb-2">Revenue You Keep</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Every booking through Bright Booking instead of an OTA is revenue you keep. Same guest, same stay — no middleman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* 9. Bright Check-in */}
      <div id="check-in" className="scroll-mt-24">
        <Section background="gradient">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-bright-orange uppercase tracking-wider mb-4">Month 2 — Eliminate the Front Desk Bottleneck</p>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-bright-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl font-semibold text-bright-orange">Bright Check-in</h3>
            </div>

            {/* 4-step flow */}
            <div className="text-center mb-10">
              <h4 className="font-display text-2xl font-semibold text-bright-orange mb-3">Four Steps. One Minute.</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Guests complete check-in on their phone before they ever walk through your door.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">1</span>
                </div>
                <h5 className="font-heading text-lg font-semibold text-gray-900 mb-2">Get the Link</h5>
                <p className="text-gray-500 text-sm leading-relaxed">Guest receives a check-in link via SMS or email before arrival.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">2</span>
                </div>
                <h5 className="font-heading text-lg font-semibold text-gray-900 mb-2">Verify Identity</h5>
                <p className="text-gray-500 text-sm leading-relaxed">Selfie + ID photo verified by Persona. Automated, secure, and fast.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <h5 className="font-heading text-lg font-semibold text-gray-900 mb-2">Choose Add-ons</h5>
                <p className="text-gray-500 text-sm leading-relaxed">Late checkout, parking, breakfast, room upgrades — purchased right in the flow.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">4</span>
                </div>
                <h5 className="font-heading text-lg font-semibold text-gray-900 mb-2">Get Room & Key</h5>
                <p className="text-gray-500 text-sm leading-relaxed">Room assigned, key issued. Guest walks straight to their room.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">~80%</div>
                <div className="text-lg font-medium text-bright-black mb-2">Complete Without Help</div>
                <p className="text-gray-600 text-sm">80-85% of guests finish check-in without any manual support from staff.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">97%</div>
                <div className="text-lg font-medium text-bright-black mb-2">Pass ID Verification</div>
                <p className="text-gray-600 text-sm">Persona ID verification works the first time for nearly every guest.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-5xl md:text-6xl font-display font-bold text-bright-orange mb-3">1:28</div>
                <div className="text-lg font-medium text-bright-black mb-2">Average Completion</div>
                <p className="text-gray-600 text-sm">From opening the link to having a room key — under 90 seconds.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h5 className="font-heading text-xl font-semibold text-gray-900 mb-3">Fewer Front Desk Staff Needed</h5>
                <p className="text-gray-600 leading-relaxed text-sm">
                  When most guests check in on their phone, you don't need three people at the desk during peak hours. Redeploy staff where they actually improve the guest experience.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h5 className="font-heading text-xl font-semibold text-gray-900 mb-3">Upsell Revenue from Add-ons</h5>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Late checkout, parking passes, breakfast packages, room upgrades. Guests purchase add-ons during check-in without any staff involvement.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h5 className="font-heading text-xl font-semibold text-gray-900 mb-3">Faster Arrivals, Happier Guests</h5>
                <p className="text-gray-600 leading-relaxed text-sm">
                  No lines, no waiting, no paperwork. Guests walk in and go straight to their room. First impressions start before they reach the lobby.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h5 className="font-heading text-xl font-semibold text-gray-900 mb-3">Data Flows to Your Agents</h5>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Check-in data feeds directly to your agents. Guest Agent knows who has checked in, what add-ons they purchased, and can respond to check-in questions. Ops Agent knows which rooms need turning.
                </p>
              </div>
            </div>

            {/* What Your Agent Gains */}
            <div className="mt-12">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">What Your Agent Gains</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl border-2 border-bright-orange/30">
                  <h5 className="font-heading text-lg font-semibold text-bright-orange mb-2">Check-in Support</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Guest texts "how do I check in?" — your agent sends the link, walks them through it, and troubleshoots issues in real time.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border-2 border-bright-orange/30">
                  <h5 className="font-heading text-lg font-semibold text-bright-orange mb-2">Key & Access Help</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lost key? Didn't get the email? Your agent resends room keys, regenerates access codes, and resolves lockouts — no front desk call needed.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border-2 border-bright-orange/30">
                  <h5 className="font-heading text-lg font-semibold text-bright-orange mb-2">Checkout Handling</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your agent confirms checkout, sends folio summaries, and handles late checkout requests — all through the same conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* 10. How It Works */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-12 text-center">
            Three Steps to Go Live
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">Connect Your PMS</h3>
              <p className="text-gray-600 leading-relaxed">
                Link your PMS — Cloudbeds, Oracle Opera, or <a href="/integrations" className="text-bright-orange hover:underline">others coming soon</a> — and BrightOS imports your property data automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">Your Agents Go Live</h3>
              <p className="text-gray-600 leading-relaxed">
                Guest Agent starts handling communication immediately. Add Bright Booking or Check-in to expand capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-bright-black mb-3">Go Live</h3>
              <p className="text-gray-600 leading-relaxed">
                Guests start getting instant responses, direct bookings flow in, and your team manages everything from one dashboard.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 11. ProofBar + CTA */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <ProofBar
            variant="light"
            points={[
              { value: '5', label: 'Hotels Live' },
              { value: '1,000+', label: 'Rooms' },
              { value: '2024', label: 'Operational Since' },
            ]}
          />

          <div className="text-center mt-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Build the Hotel That Runs Itself
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Connect your PMS, define your policies, and go live in days.
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
                <span>See It Live at Our Hotels</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
