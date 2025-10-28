interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  gradient?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  gradient = 'from-bright-black via-gray-900 to-bright-black',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
        {/* Animated gradient orbs for modern feel */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-bright-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-bright-orange/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {subtitle && (
          <div className="mb-6 text-bright-orange font-medium tracking-wider uppercase text-sm md:text-base opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            {subtitle}
          </div>
        )}

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 leading-tight opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
          {title}
        </h1>

        {description && (
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_200ms_forwards]">
            {description}
          </p>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-bright-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
