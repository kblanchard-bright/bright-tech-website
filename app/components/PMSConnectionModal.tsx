'use client';

import { useState } from 'react';

interface PMSConnectionModalProps {
  pmsName: string;
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export default function PMSConnectionModal({
  pmsName,
  isOpen,
  onClose,
  onConnect,
}: PMSConnectionModalProps) {
  const [showAuth, setShowAuth] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  if (!isOpen) return null;

  const handleConnect = () => {
    setShowAuth(true);
  };

  const handleSignIn = () => {
    setIsConnecting(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);

      // Close modal and notify parent after showing success
      setTimeout(() => {
        onConnect();
        onClose();
        setShowAuth(false);
        setIsConnected(false);
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Close button */}
        {!isConnecting && !isConnected && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="text-center">
          {!showAuth && !isConnecting && !isConnected && (
            <>
              <div className="w-20 h-20 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-bright-black mb-3">
                Connect to {pmsName}
              </h2>
              <p className="text-gray-600 mb-6">
                We'll securely connect to your {pmsName} account to sync rates, availability, and reservations.
              </p>
              <button
                onClick={handleConnect}
                className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-bright-orange/50"
              >
                Connect to {pmsName}
              </button>
            </>
          )}

          {showAuth && !isConnecting && !isConnected && (
            <>
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-bold text-blue-600">{pmsName.charAt(0)}</div>
              </div>
              <h2 className="font-display text-2xl font-semibold text-bright-black mb-3">
                Sign in to {pmsName}
              </h2>
              <p className="text-gray-600 mb-6">
                <strong>BrightOS</strong> wants to access your {pmsName} account
              </p>

              {/* Permissions List */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm font-medium text-gray-700 mb-3">This will allow BrightOS to:</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Read property and room data</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access rates and availability</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Manage reservations</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sync guest information</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSignIn}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg"
              >
                Authorize Connection
              </button>
              <p className="text-xs text-gray-500 mt-4">
                You'll be able to revoke access at any time from your {pmsName} account settings
              </p>
            </>
          )}

          {isConnecting && (
            <>
              <div className="w-20 h-20 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 border-4 border-bright-orange border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h2 className="font-display text-2xl font-semibold text-bright-black mb-3">
                Connecting to {pmsName}...
              </h2>
              <p className="text-gray-600">
                Please wait while we establish a secure connection.
              </p>
            </>
          )}

          {isConnected && (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-bright-black mb-3">
                Successfully Connected!
              </h2>
              <p className="text-gray-600">
                Your {pmsName} account is now connected.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
