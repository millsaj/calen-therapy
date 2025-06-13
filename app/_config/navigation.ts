import { routes } from '@app/_config/routes';
import { styles } from '@app/_config/styles';
import { focuses } from '@app/_config/focuses';

export interface INavItem {
  label: string;
  href?: string;
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
    label: 'Styles',
    children: styles.nav().map((style) => ({
      label: style.title,
      href: routes.styles.show(style.slug),
    })),
  },
  {
    label: 'Focuses',
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
