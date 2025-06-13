'use client';

export interface ISplitHeroArgs {
  title: string;
  subtitle?: string;
}

export const NormalPageHero = ({
  title,
  subtitle,
}: ISplitHeroArgs) => {
  return (
    <section className={`relative py-16 bg-secondary mt-[48px]`}>
      <div className="container mx-auto px-4 pt-4 pb-16">
        <div
          className={`max-w-4xl mx-auto text-center`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 mt-8">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NormalPageHero;
