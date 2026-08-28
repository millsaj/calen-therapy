import { routes, approaches, focuses } from '@app/_config';

export interface INavItem {
  label: string;
  href?: string;
  extraClasses?: string;
  children?: INavItem[];
}

export const mainNav: INavItem[] = [
  { label: 'Meet Helen', href: routes.helen },
  {
    label: 'Approaches',
    extraClasses: 'block sm:hidden lg:block',
    children: approaches.map((approach) => ({
      label: approach.title,
      href: routes.approaches.show(approach.slug),
    })),
  },
  {
    label: 'Focuses',
    extraClasses: 'block sm:hidden lg:block',
    children: focuses.map((focus) => ({
      label: focus.title,
      href: routes.focuses.show(focus.slug),
    })),
  },
  { label: 'FAQs & Pricing', href: routes.faqs },
];
