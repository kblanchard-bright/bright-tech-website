'use client';

export default function AgentFlowDiagram() {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-12">
      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* PMS to BrightOS */}
        <line x1="100" y1="100" x2="300" y2="100" stroke="url(#pulse-gradient)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
        {/* BrightOS to Guest Agent */}
        <line x1="300" y1="100" x2="500" y2="50" stroke="url(#pulse-gradient)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-delayed" />
        {/* BrightOS to Ops Agent */}
        <line x1="300" y1="100" x2="500" y2="150" stroke="url(#pulse-gradient)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-delayed-2" />
        {/* Animated pulse dots */}
        <circle r="4" fill="#F28123" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M100,100 L300,100" />
        </circle>
        <circle r="4" fill="#F28123" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M300,100 L500,50" begin="0.5s" />
        </circle>
        <circle r="4" fill="#F28123" opacity="0.9">
          <animateMotion dur="2s" repeatCount="indefinite" path="M300,100 L500,150" begin="1s" />
        </circle>
        <circle r="3" fill="#F28123" opacity="0.5">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M500,50 L300,100" begin="0.3s" />
        </circle>
        <circle r="3" fill="#F28123" opacity="0.5">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M500,150 L300,100" begin="0.8s" />
        </circle>
        <defs>
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F28123" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#F28123" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F28123" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="relative flex items-center justify-between px-4">
        {/* PMS Node */}
        <div className="flex flex-col items-center z-10">
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Your PMS</span>
        </div>

        {/* BrightOS Core */}
        <div className="flex flex-col items-center z-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bright-orange to-bright-orange/80 shadow-xl shadow-bright-orange/20 flex items-center justify-center mb-2 relative">
            <div className="absolute inset-0 rounded-full bg-bright-orange/20 animate-ping-slow" />
            <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-bright-orange uppercase tracking-wider">BrightOS</span>
        </div>

        {/* Agent Nodes */}
        <div className="flex flex-col items-center space-y-6 z-10">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-bright-orange/30 shadow-lg flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guest Agent</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-white border-2 border-bright-orange/30 shadow-lg flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ops Agent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
