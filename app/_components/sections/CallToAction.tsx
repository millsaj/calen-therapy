import { routes } from '@app/_config/routes';

interface ICallToActionProps {
  title?: string;
  description?: string[];
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export const CallToAction: React.FC<ICallToActionProps> = ({
  title = "Take the first step",
  description = ["Ready to get started? Or just have some questions?"],
  primaryButton = {
    text: "Reach Out Today",
    href: routes.contact()
  },
  secondaryButton = {
    text: "FAQs & Pricing",
    href: routes.faqs()
  },
}) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8 mx-auto">{title}</h2>
      <div className='text-xl mb-10 max-w-3xl mx-auto opacity-90'>
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
        <a
          href={primaryButton.href}
          className="bg-white text-primary hover:bg-accent px-10 py-4 rounded-full font-bold text-lg transition-colors text-center"
        >
          {primaryButton.text}
        </a>
        <a
          href={secondaryButton.href}
          className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full font-bold text-lg transition-colors text-center"
        >
          {secondaryButton.text}
        </a>
      </div>
    </div>
  );
};
