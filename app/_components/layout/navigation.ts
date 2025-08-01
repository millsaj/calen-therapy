import { routes, approaches, focuses } from '@app/_config';

export interface INavItem {
  label: string;
  href?: string;
  extraClasses?: string;
  children?: INavItem[];
}

export const mainNav: INavItem[] = [
  {
    label: 'Meet Us',
    children: [
      { label: 'Helen', href: routes.helen() },
      { label: 'Carl', href: routes.carl() },
    ],
  },
  {
    label: 'Approaches',
    extraClasses: 'block sm:hidden lg:block',
    children: approaches.nav().map((approach) => ({
      label: approach.title,
      href: routes.approaches.show(approach.slug),
    })),
  },
  {
    label: 'Focuses',
    extraClasses: 'block sm:hidden lg:block',
    children: focuses.nav().map((focus) => ({
      label: focus.title,
      href: routes.focuses.show(focus.slug),
    })),
  },
  {
    label: 'Session Types',
    children: [
      { label: 'In Person', href: routes.sessionTypes.inPerson() },
      { label: 'Online / Phone', href: routes.sessionTypes.online() },
      { label: 'Other', href: routes.sessionTypes.other() },
    ]
  },
  { label: 'FAQs & Pricing', href: routes.faqs() },
];
