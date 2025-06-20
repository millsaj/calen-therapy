import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface LearnMoreLinkProps {
  href: string;
  text?: string;
  className?: string;
}

export const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({
  href,
  text = 'Learn more',
  className = 'font-semibold inline-flex items-center text-primary underline hover:text-accent hover:no-underline decoration-primary/60',
}) => {
  return (
    <Link href={href} className={className}>
      {text}
      <ArrowRightIcon className="h-4 w-4 ml-1" />
    </Link>
  );
};
