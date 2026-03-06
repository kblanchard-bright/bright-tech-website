import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
  icon?: React.ReactNode;
}

export default function ProductCard({
  title,
  description,
  href,
  comingSoon = false,
  icon,
}: ProductCardProps) {
  return (
    <Link href={href}>
      <div
        className={`group relative h-full bg-white border rounded-2xl p-8 transition-all duration-300 hover:scale-105 shadow-sm ${
          comingSoon
            ? 'border-gray-200 opacity-75'
            : 'border-gray-200 hover:border-bright-orange hover:shadow-lg'
        }`}
      >
        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4 bg-bright-orange/20 text-bright-orange text-xs font-semibold px-3 py-1 rounded-full">
            Coming Soon
          </div>
        )}

        {/* Icon */}
        {icon && (
          <div className="mb-6 text-bright-orange transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}

        {/* Content */}
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-bright-orange transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        {/* Arrow indicator */}
        <div className="flex items-center text-bright-orange font-medium group-hover:translate-x-2 transition-transform duration-300">
          <span className="mr-2">Learn more</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-bright-orange/0 to-bright-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
}
