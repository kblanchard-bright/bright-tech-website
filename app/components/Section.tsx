interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'grey' | 'black' | 'gradient';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    grey: 'bg-bright-grey',
    black: 'bg-bright-black',
    gradient: 'bg-gradient-to-br from-gray-900 via-bright-black to-gray-900',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
