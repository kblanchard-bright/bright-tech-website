'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [rooms, setRooms] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', { email, hotelName, rooms });
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-bright-grey pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Join the Waitlist
            </h1>
            <p className="text-lg text-gray-600">
              Get BrightOS agents running at your property.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-bright-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-bright-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-semibold text-bright-black mb-3">
                  You're on the list.
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We'll be in touch soon to get your agents up and running.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-1">
                    Hotel name
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none text-gray-900"
                    placeholder="The Grand Hotel"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none text-gray-900"
                    placeholder="you@yourhotel.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of rooms
                  </label>
                  <select
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none text-gray-900 bg-white"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1 - 50 rooms</option>
                    <option value="51-150">51 - 150 rooms</option>
                    <option value="151-350">151 - 350 rooms</option>
                    <option value="350+">350+ rooms</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-bright-orange/50"
                >
                  Join Waitlist
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  No credit card required. We'll reach out to schedule a setup call.
                </p>
              </form>
            )}
          </div>

          {/* PMS Integration Note */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500 text-center mb-4 font-medium">Currently integrated with</p>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">Cloudbeds</p>
                <span className="text-xs text-bright-orange">Live</span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">Oracle Opera</p>
                <span className="text-xs text-bright-orange">Live</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Mews, Guesty, Hostfully, and more coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
