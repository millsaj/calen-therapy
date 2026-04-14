/** Visual style variant for a StripedSection. */
export type StripedSectionVariant = 'default' | 'secondary' | 'primary';

export interface IStripedSectionProps {
  /** Visual style variant. Defaults to 'default' (white background). */
  variant?: StripedSectionVariant;
  children: React.ReactNode;
}

const variantClasses: Record<StripedSectionVariant, string> = {
  default: 'bg-white',
  secondary: 'bg-secondary border-b border-gray-200',
  primary: 'bg-primary text-white border-b border-gray-200',
};

export const StripedSection: React.FC<IStripedSectionProps> = ({
  children,
  variant = 'default',
}) => {
  return (
    <section className={`py-16 md:py-24 ${variantClasses[variant]}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};
