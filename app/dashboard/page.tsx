'use client';

import { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';

const PROPERTIES = [
  {
    id: 1,
    name: 'Hollywood Hills Hotel',
    location: 'Los Angeles, CA',
    occupancy: 0,
    revenue: 0,
    bookings: 0,
    rooms: 6,
    ratePlans: 3,
    pms: 'Cloudbeds',
    bookingEngineUrl: 'https://book.hollywoodhillshotel.com',
  },
];

export default function DashboardPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(PROPERTIES[0].id);
  const selectedProperty = PROPERTIES.find(p => p.id === selectedPropertyId) || PROPERTIES[0];

  return (
    <>
      <DashboardHeader />

      <div className="flex min-h-screen bg-bright-grey pt-16">
        {/* Left Sidebar - Properties List */}
        <div className="fixed left-0 top-16 bottom-0 w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="font-display text-xl font-semibold text-bright-black">
                Your Properties
              </h2>
            </div>

            {/* Properties List */}
            <div className="space-y-3">
              {PROPERTIES.map((property) => (
                <button
                  key={property.id}
                  onClick={() => setSelectedPropertyId(property.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedPropertyId === property.id
                      ? 'border-bright-orange bg-bright-orange/5'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                      {property.name}
                    </h3>
                    {selectedPropertyId === property.id && (
                      <div className="w-2 h-2 bg-bright-orange rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{property.location}</p>
                  <div className="flex items-center space-x-3 text-xs">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.rooms} rooms
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {property.bookings}
                    </div>
                  </div>
                </button>
              ))}

              {/* Add Property Card */}
              <button className="w-full text-left p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-bright-orange hover:bg-bright-orange/5 transition-all group">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-bright-orange/10 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-bright-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-bright-orange transition-colors">
                    Add Another Property
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - Product Cards */}
        <div className="ml-80 flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Property Header */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-semibold text-bright-black mb-2">
                {selectedProperty.name}
              </h1>
              <p className="text-gray-600 mb-6">{selectedProperty.location}</p>

              {/* Product Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Bookings - Bright Booking (Active) */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Bookings</span>
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-display font-bold text-bright-black mb-2">{selectedProperty.bookings}</p>
                  <p className="text-xs text-gray-600">This month · Bright Booking</p>
                </div>

                {/* Tasks Automated - Bright Ops (Locked) */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 opacity-60">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500">Tasks Automated</span>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-display font-bold text-gray-400 mb-2">--</p>
                  <p className="text-xs text-gray-500">Activate Bright Ops to unlock</p>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-bright-black mb-2">
                Your Products
              </h2>
              <p className="text-gray-600">
                Manage your BrightOS products and services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bright Booking Card */}
              <div className="bg-white rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-bright-black text-lg">Bright Booking</h3>
                      <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Your booking engine is live and ready to accept reservations. Share your booking link with guests.
                </p>

                <div className="bg-bright-grey rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 mb-1">Booking Engine URL</p>
                  <code className="text-sm text-bright-orange font-mono break-all">{selectedProperty.bookingEngineUrl}</code>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>Bookings this month:</span>
                  <span className="font-semibold text-gray-900">{selectedProperty.bookings}</span>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-4 py-2 rounded-lg transition-all">
                    Open Booking Engine
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 hover:border-bright-orange text-gray-700 font-semibold rounded-lg transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bright Ops Card */}
              <div className="bg-white rounded-xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-bright-black text-lg">Bright Ops</h3>
                      <span className="inline-block text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                        Setup Required
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Guest communications and operations management built on the BrightOS platform. Free with Bright Booking.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-orange-800">
                      Complete your setup to unlock guest communications, operations management, and AI automation features.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 font-semibold px-4 py-2 rounded-lg cursor-not-allowed"
                  >
                    Configure Bright Ops
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg whitespace-nowrap">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>

              {/* Bright Boost Card */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 opacity-60 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-bright-black text-lg">Bright Boost</h3>
                      <span className="inline-block text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Intelligent revenue optimization with AI-powered dynamic pricing, demand prediction, and automated upselling.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600">
                    Advanced revenue management features will be available soon. Stay tuned for updates.
                  </p>
                </div>

                <button
                  disabled
                  className="w-full bg-gray-200 text-gray-400 font-semibold px-4 py-2 rounded-lg cursor-not-allowed"
                >
                  Not Available Yet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
