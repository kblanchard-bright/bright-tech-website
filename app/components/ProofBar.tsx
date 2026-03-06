interface ProofPoint {
  label: string;
  value: string;
}

interface ProofBarProps {
  points: ProofPoint[];
  variant?: 'light' | 'dark';
}

export default function ProofBar({ points, variant = 'light' }: ProofBarProps) {
  const isLight = variant === 'light';

  return (
    <div
      className={`rounded-2xl px-6 py-8 ${
        isLight
          ? 'bg-bright-grey border border-bright-orange/10'
          : 'bg-white border border-gray-200'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-bright-orange/20">
        {points.map((point, index) => (
          <div key={index} className="px-8 py-4 sm:py-0 text-center">
            <span className="font-display font-bold text-bright-orange text-3xl block">
              {point.value}
            </span>
            <span
              className={`text-sm font-medium mt-1 block ${
                isLight ? 'text-gray-600' : 'text-gray-600'
              }`}
            >
              {point.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
