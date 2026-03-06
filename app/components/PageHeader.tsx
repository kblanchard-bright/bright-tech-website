interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHeader({
  title,
  subtitle,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-bright-grey pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-bright-orange font-medium tracking-wider uppercase text-sm mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
