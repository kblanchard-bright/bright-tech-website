'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    alert('Google sign-in (mockup)');
  };

  const handleAppleSignIn = () => {
    console.log('Apple sign in clicked');
    alert('Apple sign-in (mockup)');
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email signup:', { email, password });
    alert('Email signup (mockup)');
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-bright-black via-gray-900 to-bright-black pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
              Add Your Hotel
            </h1>
            <p className="text-lg text-gray-300">
              Join the future of hospitality technology with Bright Technology
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {/* Email/Password Form */}
            <form onSubmit={handleEmailSignup} className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-bright-orange/50"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">or continue with</span>
              </div>
            </div>

            {/* Social Sign In Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium text-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                onClick={handleAppleSignIn}
                className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-black hover:bg-gray-900 rounded-lg transition-all duration-200 font-medium text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="#" className="text-bright-orange hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </div>

          {/* Terms */}
          <p className="text-center text-sm text-gray-400 mt-6">
            By signing up, you agree to our{' '}
            <Link href="#" className="text-bright-orange hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-bright-orange hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
