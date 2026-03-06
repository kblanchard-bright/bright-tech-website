'use client';

import { useState, useEffect } from 'react';

const tabs = [
  { label: 'Guest Agent', anchor: '#guest-agent' },
  { label: 'Ops Agent', anchor: '#ops-agent' },
  { label: 'Booking', anchor: '#capabilities' },
  { label: 'Check-in', anchor: '#check-in' },
];

export default function PlatformNav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = tabs.map((t) => t.anchor.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (anchor: string) => {
    const el = document.getElementById(anchor.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.anchor}
              onClick={() => handleClick(tab.anchor)}
              className={`whitespace-nowrap py-3 text-sm font-medium border-b-2 transition-colors ${
                active === tab.anchor.slice(1)
                  ? 'border-bright-orange text-bright-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
