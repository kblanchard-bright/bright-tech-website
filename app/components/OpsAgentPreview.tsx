import ConversationMockup from './ConversationMockup';

interface OpsAgentPreviewProps {
  variant?: 'light' | 'dark';
}

export default function OpsAgentPreview({
  variant = 'dark',
}: OpsAgentPreviewProps) {
  const isLight = variant === 'light';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Copy */}
      <div>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isLight ? 'text-gray-400' : 'text-gray-400'}`}>
          Ops Agent
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-bright-orange mb-4">
          Your Staff Works Their Way. Every Detail Is Tracked.
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {['SMS', 'WhatsApp'].map((ch) => (
            <span key={ch} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-bright-orange/10 text-bright-orange border border-bright-orange/20">
              {ch}
            </span>
          ))}
        </div>
        <p
          className={`text-xl mb-6 leading-relaxed ${
            isLight ? 'text-gray-700' : 'text-gray-600'
          }`}
        >
          Your team texts two words. BrightOS turns it into structured ops data — room status, maintenance, workload — all feeding your Guest Agent in real time. No apps. No training.
        </p>
        <div className="space-y-4 mb-8">
          {[
            'Works on the phone your staff already has',
            'New hires productive on day one',
            'Real-time data feeds directly to Guest Agent',
          ].map((item) => (
            <div key={item} className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-bright-orange flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className={isLight ? 'text-gray-700' : 'text-gray-600'}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <a
          href="/platform#ops-agent"
          className={`inline-flex items-center space-x-2 font-semibold transition-colors ${
            isLight ? 'text-bright-orange hover:text-bright-orange/80' : 'text-bright-orange hover:text-bright-orange/80'
          }`}
        >
          <span>Learn more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Conversation mockup */}
      <ConversationMockup
        variant={variant}
        title="BrightOS Ops Agent"
        messages={[
          { sender: 'staff', text: '204 clean' },
          {
            sender: 'ai',
            text: 'Got it. Room 204 marked ready. 3 rooms left on your list.',
          },
          { sender: 'staff', text: 'Status?' },
          {
            sender: 'ai',
            text: '12 rooms remaining. 8 in progress. ETA: 2:30 PM.',
          },
        ]}
      />
    </div>
  );
}
