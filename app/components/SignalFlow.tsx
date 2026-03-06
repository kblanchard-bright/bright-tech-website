'use client';

export default function SignalFlow() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Ops Agent node */}
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-bright-orange/10 border-2 border-bright-orange/30 flex items-center justify-center mb-2">
            <svg className="w-7 h-7 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-gray-500">Ops Agent</span>
        </div>

        {/* Signal trail */}
        <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-6">
          <svg className="w-full h-12 hidden md:block" viewBox="0 0 300 48" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Base line */}
            <line x1="0" y1="24" x2="300" y2="24" stroke="#F28123" strokeWidth="2" opacity="0.15" />
            {/* Animated signal pulses */}
            <circle r="6" fill="#F28123" opacity="0.8">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M0,24 L300,24" />
            </circle>
            <circle r="6" fill="#F28123" opacity="0.4">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M0,24 L300,24" begin="0.5s" />
            </circle>
            <circle r="6" fill="#F28123" opacity="0.2">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M0,24 L300,24" begin="1s" />
            </circle>
            {/* Ripple rings at destination */}
            <circle cx="300" cy="24" r="8" fill="none" stroke="#F28123" strokeWidth="1.5">
              <animate attributeName="r" from="8" to="24" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          {/* Mobile: vertical */}
          <svg className="h-16 w-12 md:hidden" viewBox="0 0 48 64" fill="none">
            <line x1="24" y1="0" x2="24" y2="64" stroke="#F28123" strokeWidth="2" opacity="0.15" />
            <circle r="5" fill="#F28123" opacity="0.8">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M24,0 L24,64" />
            </circle>
            <circle r="5" fill="#F28123" opacity="0.4">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M24,0 L24,64" begin="0.5s" />
            </circle>
          </svg>
          {/* Data labels */}
          <div className="flex items-center space-x-3 mt-2">
            <span className="text-[10px] font-semibold text-bright-orange bg-bright-orange/10 px-2 py-0.5 rounded">"204 clean"</span>
            <svg className="w-3 h-3 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-[10px] font-semibold text-bright-orange bg-bright-orange/10 px-2 py-0.5 rounded">Room ready</span>
          </div>
        </div>

        {/* Guest Agent node */}
        <div className="flex flex-col items-center text-center flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-bright-orange/10 border-2 border-bright-orange/30 flex items-center justify-center mb-2 relative">
            <div className="absolute inset-0 rounded-2xl bg-bright-orange/10 animate-ping-slow" />
            <svg className="w-7 h-7 text-bright-orange relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-gray-500">Guest Agent</span>
        </div>
      </div>

      {/* Below: the conversation result */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="space-y-4 max-w-md mx-auto text-left">
          <div className="flex items-start space-x-3">
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded font-semibold mt-0.5 flex-shrink-0">GUEST</span>
            <p className="text-gray-600 text-sm">"Is my room ready yet?"</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-xs bg-bright-orange/20 text-bright-orange px-2 py-0.5 rounded font-semibold mt-0.5 flex-shrink-0 inline-flex items-center space-x-1">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>
              <span>BrightOS AI</span>
            </span>
            <p className="text-gray-600 text-sm">"Yes! Room 204 is ready. You can check in anytime."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
