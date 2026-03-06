'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email login:', { email, password });
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-bright-grey flex flex-col items-center justify-center px-4">
      {/* Logo + Heading */}
      <div className="text-center mb-8">
        <div className="text-3xl font-display font-semibold text-bright-black mb-2">
          Bright<span className="text-bright-orange">OS</span>
        </div>
        <h1 className="text-xl font-medium text-gray-700">Login to BrightOS</h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none text-gray-900"
              placeholder="you@hotelname.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-orange focus:border-transparent transition-all outline-none text-gray-900 pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Continue
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-bright-orange hover:underline font-medium">
            Forgot password?
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-400 mt-8">&copy; 2026 BrightOS</p>
    </div>
  );
}
