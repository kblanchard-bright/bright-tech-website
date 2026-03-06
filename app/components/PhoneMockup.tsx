'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'guest' | 'ai' | 'system';
  text: string;
}

interface PhoneMockupProps {
  title?: string;
  messages: Message[];
}

export default function PhoneMockup({ title = 'Guest Messages', messages }: PhoneMockupProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          playMessages();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playMessages = () => {
    let i = 0;
    const show = () => {
      if (i >= messages.length) {
        setTypingIndex(null);
        return;
      }
      if (messages[i].sender === 'ai') {
        setTypingIndex(i);
        setTimeout(() => {
          setTypingIndex(null);
          setVisibleCount(i + 1);
          i++;
          setTimeout(show, 800);
        }, 1200);
      } else {
        setVisibleCount(i + 1);
        i++;
        setTimeout(show, 600);
      }
    };
    setTimeout(show, 500);
  };

  return (
    <div ref={containerRef} className="max-w-sm mx-auto">
      <div className="rounded-[2.5rem] p-3 bg-gray-200 shadow-2xl shadow-gray-400/30">
        <div className="rounded-[2rem] overflow-hidden bg-white">
          {/* Notch + header */}
          <div className="relative px-6 pt-3 pb-2 bg-gray-50">
            <div className="w-20 h-5 bg-black rounded-full mx-auto mb-2" />
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-bright-orange to-bright-orange/70 flex items-center justify-center shadow-sm shadow-bright-orange/20">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-800">{title}</p>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-3 min-h-[280px]">
            {messages.slice(0, visibleCount).map((message, index) => {
              const isOutgoing = message.sender === 'guest';
              const isSystem = message.sender === 'system';
              const isAI = message.sender === 'ai';

              if (isSystem) {
                return (
                  <div key={index} className="text-center my-2 animate-msg-in">
                    <span className="text-xs px-3 py-1 rounded-full inline-flex items-center space-x-1 bg-gray-100 text-gray-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span>{message.text}</span>
                    </span>
                  </div>
                );
              }

              return (
                <div key={index} className="animate-msg-in">
                  <p className={`text-[10px] mb-1 text-gray-400 ${isOutgoing ? 'text-right' : 'text-left'}`}>
                    {isAI ? (
                      <span className="inline-flex items-center space-x-1">
                        <svg className="w-2.5 h-2.5 text-bright-orange" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                        </svg>
                        <span className="text-bright-orange font-semibold">BrightOS AI</span>
                      </span>
                    ) : 'Guest'}
                  </p>
                  <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      isOutgoing
                        ? 'bg-bright-orange text-white rounded-br-sm'
                        : isAI
                          ? 'bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 text-gray-800 rounded-bl-sm border border-bright-orange/15'
                          : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {typingIndex !== null && (
              <div className="animate-msg-in">
                <p className="text-[10px] mb-1 text-left">
                  <span className="inline-flex items-center space-x-1">
                    <svg className="w-2.5 h-2.5 text-bright-orange" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                    <span className="text-bright-orange font-semibold">BrightOS AI</span>
                  </span>
                </p>
                <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-bright-orange/10 to-bright-orange/5 rounded-2xl rounded-bl-sm px-4 py-3 flex space-x-1.5 border border-bright-orange/15">
                    <span className="w-2 h-2 bg-bright-orange/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-bright-orange/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-bright-orange/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="rounded-full px-4 py-2 text-xs bg-gray-100 text-gray-400">
              Message...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
