'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import PMSConnectionModal from '../components/PMSConnectionModal';

const PMS_OPTIONS = [
  { name: 'Cloudbeds', status: 'available', badge: 'Available Now', badgeColor: 'bg-green-600' },
  { name: 'Opera PMS', status: 'beta', badge: 'Beta Access', badgeColor: 'bg-blue-600' },
  { name: 'Mews', status: 'coming-soon', badge: 'Coming Soon', badgeColor: 'bg-gray-400' },
  { name: 'Guesty', status: 'coming-soon', badge: 'Coming Soon', badgeColor: 'bg-gray-400' },
  { name: 'Hostfully', status: 'coming-soon', badge: 'Coming Soon', badgeColor: 'bg-gray-400' },
  { name: 'RMS Cloud', status: 'coming-soon', badge: 'Coming Soon', badgeColor: 'bg-gray-400' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPMS, setSelectedPMS] = useState<string | null>(null);
  const [showPMSModal, setShowPMSModal] = useState(false);
  const [modalPMS, setModalPMS] = useState('');
  const [brandingMethod, setBrandingMethod] = useState<'website' | 'description' | 'upload'>('website');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isGeneratingBranding, setIsGeneratingBranding] = useState(false);
  const [brandingGenerated, setBrandingGenerated] = useState(false);
  const [isGeneratingEngine, setIsGeneratingEngine] = useState(false);

  const totalSteps = 5;

  const handlePMSClick = (pmsName: string, status: string) => {
    if (status === 'coming-soon') return;
    setModalPMS(pmsName);
    setShowPMSModal(true);
  };

  const handlePMSConnect = () => {
    setSelectedPMS(modalPMS);
    // Move to step 2 (syncing data)
    setCurrentStep(2);
    // Auto-advance to step 3 (verification) after syncing
    setTimeout(() => {
      setCurrentStep(3);
    }, 4000);
  };

  const handleVerificationContinue = () => {
    setCurrentStep(4);
  };

  const handleGenerateBranding = () => {
    setIsGeneratingBranding(true);
    setTimeout(() => {
      setIsGeneratingBranding(false);
      setBrandingGenerated(true);
    }, 4000);
  };

  const handleUseBranding = () => {
    setCurrentStep(5);
    setIsGeneratingEngine(true);
    setTimeout(() => {
      router.push('/onboarding/success');
    }, 4000);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-bright-black via-gray-900 to-bright-black pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step <= currentStep
                        ? 'bg-bright-orange text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 5 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all ${
                        step < currentStep ? 'bg-bright-orange' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-gray-400 text-sm">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Step 1: Link Your PMS */}
          {currentStep === 1 && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4 text-center">
                Link Your Property Management System
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Connect your PMS to automatically sync rates, availability, and reservations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PMS_OPTIONS.map((pms) => (
                  <button
                    key={pms.name}
                    onClick={() => handlePMSClick(pms.name, pms.status)}
                    disabled={pms.status === 'coming-soon'}
                    className={`p-6 border-2 rounded-xl text-left transition-all ${
                      pms.status === 'coming-soon'
                        ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                        : 'border-gray-300 hover:border-bright-orange hover:shadow-lg cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{pms.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded text-white ${pms.badgeColor}`}>
                        {pms.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {pms.status === 'coming-soon' ? 'Integration in development' : 'Click to connect'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Syncing Data */}
          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 border-4 border-bright-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4">
                  Syncing Your Data
                </h1>
                <p className="text-gray-600 mb-8">
                  We're pulling your information from {selectedPMS}
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                  {['Pulling rate information', 'Syncing availability', 'Importing room types', 'Configuring settings'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}...</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Data Verification */}
          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4 text-center">
                Verify Your Property Data
              </h1>
              <p className="text-gray-600 text-center mb-8">
                We've imported your information from {selectedPMS}. Please review to ensure everything looks correct.
              </p>

              {/* Rooms Imported */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rooms Imported (6)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Deluxe King', capacity: '2 guests', rate: '$199/night' },
                    { name: 'Standard Queen', capacity: '2 guests', rate: '$149/night' },
                    { name: 'Suite', capacity: '4 guests', rate: '$299/night' },
                    { name: 'Double Queen', capacity: '4 guests', rate: '$179/night' },
                    { name: 'Executive King', capacity: '2 guests', rate: '$249/night' },
                    { name: 'Studio', capacity: '2 guests', rate: '$129/night' },
                  ].map((room, index) => (
                    <div key={index} className="bg-bright-grey border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{room.name}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {room.capacity}
                        </p>
                        <p className="font-medium text-bright-orange">{room.rate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rate Plans */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rate Plans (3)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Standard Rate', description: 'Year-round base pricing' },
                    { name: 'Peak Season', description: 'Summer & Holiday rates' },
                    { name: 'Last Minute', description: 'Special discounts' },
                  ].map((plan, index) => (
                    <div key={index} className="bg-bright-grey border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{plan.name}</h4>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleVerificationContinue}
                className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Looks Good! Continue
              </button>
            </div>
          )}

          {/* Step 4: Branding Setup */}
          {currentStep === 4 && !brandingGenerated && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4 text-center">
                Setup Your Branding
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Let us create a beautiful booking experience that matches your hotel's brand
              </p>

              {/* Branding Method Tabs */}
              <div className="flex space-x-2 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setBrandingMethod('website')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    brandingMethod === 'website'
                      ? 'border-bright-orange text-bright-orange'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  From Website
                </button>
                <button
                  onClick={() => setBrandingMethod('description')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    brandingMethod === 'description'
                      ? 'border-bright-orange text-bright-orange'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Describe Your Hotel
                </button>
                <button
                  onClick={() => setBrandingMethod('upload')}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    brandingMethod === 'upload'
                      ? 'border-bright-orange text-bright-orange'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Upload Assets
                </button>
              </div>

              {/* Branding Input Forms */}
              <div className="mb-8">
                {brandingMethod === 'website' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Hotel's Website URL
                    </label>
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://yourhotel.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent outline-none"
                    />
                  </div>
                )}

                {brandingMethod === 'description' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Hotel's Style
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us about your hotel's atmosphere, style, target guests..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent outline-none"
                    />
                  </div>
                )}

                {brandingMethod === 'upload' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Logo or Brand Guide
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-bright-orange transition-colors cursor-pointer">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                )}
              </div>

              {!isGeneratingBranding ? (
                <button
                  onClick={handleGenerateBranding}
                  disabled={brandingMethod === 'website' && !websiteUrl}
                  className="w-full bg-bright-orange hover:bg-bright-orange/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Generate Branding
                </button>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 border-4 border-bright-orange border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Analyzing your brand...</p>
                  <p className="text-sm text-gray-500">Extracting colors • Generating palette • Creating theme</p>
                </div>
              )}
            </div>
          )}

          {/* Step 4b: Branding Preview */}
          {currentStep === 4 && brandingGenerated && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4 text-center">
                Your Generated Branding
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Here's the look and feel we've created for your booking engine
              </p>

              <div className="space-y-6 mb-8">
                {/* Color Palette */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Color Palette</h3>
                  <div className="flex space-x-3">
                    <div className="flex-1 h-20 bg-blue-600 rounded-lg shadow"></div>
                    <div className="flex-1 h-20 bg-blue-400 rounded-lg shadow"></div>
                    <div className="flex-1 h-20 bg-gray-800 rounded-lg shadow"></div>
                    <div className="flex-1 h-20 bg-gray-200 rounded-lg shadow"></div>
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Typography</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-3xl font-bold mb-2">Heading Font</p>
                    <p className="text-lg">Body text font for comfortable reading</p>
                  </div>
                </div>

                {/* Mini Preview */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Booking Page Preview</h3>
                  <div className="border-2 border-gray-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
                    <div className="h-8 bg-blue-600 rounded w-1/3 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleUseBranding}
                className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Use This Branding
              </button>
            </div>
          )}

          {/* Step 5: Generating Booking Engine */}
          {currentStep === 5 && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 border-4 border-bright-orange border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-bright-black mb-4">
                  Building Your Booking Engine
                </h1>
                <p className="text-gray-600 mb-8">
                  This will only take a moment...
                </p>

                <div className="space-y-4 max-w-md mx-auto mb-8">
                  {['Creating pages', 'Applying branding', 'Configuring checkout', 'Finalizing setup'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}...</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-bright-orange h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PMS Connection Modal */}
      <PMSConnectionModal
        pmsName={modalPMS}
        isOpen={showPMSModal}
        onClose={() => setShowPMSModal(false)}
        onConnect={handlePMSConnect}
      />
    </>
  );
}
