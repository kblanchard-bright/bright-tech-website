'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function OnboardingSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);

  const bookingEngineUrl = 'https://book.thebrighthotel.com';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push('/dashboard');
    }
  }, [countdown, router]);

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingEngineUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-bright-black via-gray-900 to-bright-black pt-32 pb-16 px-4 flex items-center">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Success Icon with Animation */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto relative z-10 animate-bounce">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Celebration Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-bright-orange/30 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Your Booking Engine is Live!
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Congratulations! Your custom booking experience is ready to accept reservations.
          </p>

          {/* Booking Engine URL Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-600 mb-1">Your Booking Engine</p>
                <p className="text-lg font-mono text-bright-orange break-all">{bookingEngineUrl}</p>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 px-6 py-3 border-2 border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                {copied ? (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Link</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Auto-redirect Message */}
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Redirecting to your dashboard in {countdown} second{countdown !== 1 ? 's' : ''}...</span>
          </div>
        </div>
      </div>
    </>
  );
}
