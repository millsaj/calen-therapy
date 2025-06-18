export interface IStripedSectionProps {
  primary: boolean;
  secondary: boolean;
  children: React.ReactNode;
}

export const StripedSection: React.FC<IStripedSectionProps> = ({
  children,
  primary = false,
  secondary = false,
}) => {
  let extraClasses = 'bg-white';
  extraClasses = secondary ? 'bg-secondary border-b border-gray-200' : extraClasses;
  extraClasses = primary ? 'bg-primary border-b border-gray-200' : extraClasses;

  return (
    <section className={`py-16 md:py-24 ${extraClasses}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};