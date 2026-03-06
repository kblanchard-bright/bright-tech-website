import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-semibold text-white">
                Bright<span className="text-bright-orange">OS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              AI agents for hotels. Built by hoteliers, running at 5 properties and 1,000+ rooms.
            </p>
            <p className="text-sm">
              A product of{' '}
              <a
                href="https://thebrighthotel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright-orange hover:underline"
              >
                The Bright Hotel
              </a>
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/platform#guest-agent" className="hover:text-white transition-colors">
                  Guest Agent
                </Link>
              </li>
              <li>
                <Link href="/platform#ops-agent" className="hover:text-white transition-colors">
                  Ops Agent
                </Link>
              </li>
              <li>
                <Link href="/platform#capabilities" className="hover:text-white transition-colors">
                  Bright Booking
                </Link>
              </li>
              <li>
                <Link href="/platform#check-in" className="hover:text-white transition-colors">
                  Bright Check-in
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/hotels" className="hover:text-white transition-colors">
                  Our Hotels
                </Link>
              </li>
              <li>
                <a
                  href="https://thebrighthotel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  The Bright Hotel
                </a>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Join the Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@brightos.ai" className="hover:text-white transition-colors">
                  hello@brightos.ai
                </a>
              </li>
              <li>
                <a
                  href="https://brightos.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center space-x-1"
                >
                  <span>Go to Dashboard</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} Bright Technology Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
