'use client';

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
  className = 'text-primary font-semibold hover:underline hover:text-accent inline-flex items-center',
}) => {
  return (
    <Link href={href} className={className}>
      {text}
      <ArrowRightIcon className="h-4 w-4 ml-1" />
    </Link>
  );
};
