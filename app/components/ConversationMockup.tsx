interface Message {
  sender: 'guest' | 'ai' | 'staff' | 'system';
  text: string;
}

interface ConversationMockupProps {
  messages: Message[];
  title?: string;
  variant?: 'light' | 'dark';
  agentName?: string;
}

export default function ConversationMockup({
  messages,
  title = 'Text Message',
  variant = 'dark',
}: ConversationMockupProps) {
  const isLight = variant === 'light';

  return (
    <div className="max-w-sm mx-auto">
      {/* Phone frame */}
      <div
        className={`rounded-[2.5rem] p-3 shadow-2xl ${
          isLight
            ? 'bg-gray-200 shadow-gray-400/30'
            : 'bg-white border border-gray-200 shadow-gray-400/30'
        }`}
      >
        {/* Screen */}
        <div
          className={`rounded-[2rem] overflow-hidden ${
            isLight ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          {/* Notch */}
          <div
            className={`relative px-6 pt-3 pb-2 ${
              isLight ? 'bg-gray-50' : 'bg-gray-100'
            }`}
          >
            <div className="w-20 h-5 bg-black rounded-full mx-auto mb-2"></div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-bright-orange to-bright-orange/70 flex items-center justify-center shadow-sm shadow-bright-orange/20">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p
                className={`text-sm font-semibold ${
                  isLight ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {title}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-3 min-h-[280px]">
            {messages.map((message, index) => {
              const isOutgoing =
                message.sender === 'guest' || message.sender === 'staff';
              const isSystem = message.sender === 'system';
              const isAI = message.sender === 'ai';

              if (isSystem) {
                return (
                  <div key={index} className="text-center my-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full inline-flex items-center space-x-1 ${
                        isLight
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span>{message.text}</span>
                    </span>
                  </div>
                );
              }

              return (
                <div key={index}>
                  {/* Sender label */}
                  <p className={`text-[10px] mb-1 ${isOutgoing ? 'text-right' : 'text-left'} ${
                    isLight ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                    {isAI ? (
                      <span className="inline-flex items-center space-x-1">
                        <svg className="w-2.5 h-2.5 text-bright-orange" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                        </svg>
                        <span className="text-bright-orange font-semibold">BrightOS AI</span>
                      </span>
                    ) : message.sender === 'guest' ? 'Guest' : 'Staff'}
                  </p>
                  <div
                    className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        isOutgoing
                          ? 'bg-bright-orange text-white rounded-br-sm'
                          : isAI
                            ? 'bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 text-gray-800 rounded-bl-sm border border-bright-orange/15'
                            : isLight
                              ? 'bg-gray-100 text-gray-800 rounded-bl-sm'
                              : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input bar */}
          <div className={`px-4 py-3 border-t ${isLight ? 'border-gray-100' : 'border-gray-200'}`}>
            <div className={`rounded-full px-4 py-2 text-xs ${isLight ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-400'}`}>
              Message...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
