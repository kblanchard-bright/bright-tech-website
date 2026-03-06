import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';
import ConversationMockup from '../../components/ConversationMockup';

export const metadata = {
  title: 'Staff Agent - BrightOS',
  description: 'The second BrightOS agent. SMS-based operations for housekeeping and maintenance. Staff text updates, the agent tracks everything automatically.',
};

export default function StaffAgent() {
  return (
    <>
      <Header />

      <PageHeader
        subtitle="BrightOS Agent"
        title="Your Team Texts. Everything Gets Done."
        description="Housekeeping, maintenance, and engineering — managed through the SMS app already on every phone. No training. No adoption problem."
      />

      {/* The Problem */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Why This Matters</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Hotel Software Wasn't Built for Your Team
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            You invested in operations software. Your manager learned it. Then your housekeeper quit, the new hire couldn't figure out the login, and within a month the whole team was back to clipboards and walkie-talkies. Sound familiar?
          </p>

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

      {/* How It Works */}
      <Section background="gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
              Just Text
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your staff texts two words. BrightOS does everything else — update the PMS, notify the team, tell the guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ConversationMockup
              variant="dark"
              title="Housekeeping"
              messages={[
                { sender: 'staff', text: '204 clean' },
                { sender: 'ai', text: 'Room 204 marked ready. 3 rooms left on your list.' },
              ]}
            />

            <ConversationMockup
              variant="dark"
              title="Maintenance"
              messages={[
                { sender: 'staff', text: 'AC unit 307 not cooling' },
                { sender: 'ai', text: 'Ticket created for 307 — AC issue. What part is needed?' },
                { sender: 'staff', text: 'Capacitor' },
                { sender: 'ai', text: 'Updated. Manager notified.' },
              ]}
            />

            <ConversationMockup
              variant="dark"
              title="Status Check"
              messages={[
                { sender: 'staff', text: 'Status?' },
                { sender: 'ai', text: '12 rooms remaining. 8 in progress. ETA: 2:30 PM.' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* What Gets Tracked */}
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

      {/* The Connection */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">The Power of One Platform</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-6">
            Staff Agent Powers Guest Agent
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Because Staff Agent is part of BrightOS — not a separate system — everything connects. When a housekeeper texts "204 clean," Guest Agent immediately knows that room is ready.
          </p>
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-bright-orange/20 max-w-lg mx-auto">
            <div className="space-y-5 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-xs bg-bright-orange/20 text-bright-orange px-2 py-0.5 rounded font-semibold mt-0.5 flex-shrink-0">STAFF</span>
                <p className="text-gray-300 text-sm">"204 clean"</p>
              </div>
              <div className="border-t border-white/10 flex items-center justify-center py-1">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded font-semibold mt-0.5 flex-shrink-0">GUEST</span>
                <p className="text-gray-300 text-sm">"Is my room ready yet?"</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xs bg-bright-orange/20 text-bright-orange px-2 py-0.5 rounded font-semibold mt-0.5 flex-shrink-0">AI</span>
                <p className="text-gray-300 text-sm">"Yes! Room 204 is ready. You can check in anytime."</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
            Add Your Hotel
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Staff Agent is built into BrightOS. Add your hotel and your team can start texting updates on day one.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center space-x-2 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-bright-orange/50"
          >
            <span>Add Your Hotel</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
