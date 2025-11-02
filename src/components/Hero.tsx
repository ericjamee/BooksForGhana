interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

/**
 * Hero section component for landing pages
 */
export const Hero = ({ title, subtitle, primaryCTA, secondaryCTA }: HeroProps) => {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <a
                href={primaryCTA.href}
                className="btn btn-primary text-lg px-8 py-4"
              >
                {primaryCTA.label}
              </a>
            )}
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                className="btn btn-outline text-lg px-8 py-4"
              >
                {secondaryCTA.label}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

