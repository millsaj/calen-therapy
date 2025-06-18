export interface IFocus {
  slug: string;
  title: string;
  displayOn: ('home' | 'helen' | 'carl')[];
}

const allFocuses: IFocus[] = [
  {
    slug: 'anxiety-stress',
    title: 'Anxiety & Stress',
    displayOn: ['home', 'carl']
  },
  {
    slug: 'depression',
    title: 'Depression',
    displayOn: ['home', 'helen', 'carl']
  },
  {
    slug: 'relationships',
    title: 'Relationships & Family',
    displayOn: ['home', 'helen']
  },
  {
    slug: 'grief-loss',
    title: 'Grief & Loss',
    displayOn: ['home', 'helen']
  },
  {
    slug: 'trauma',
    title: 'Trauma & PTSD',
    displayOn: ['home', 'helen']
  },
  {
    slug: 'addictions',
    title: 'Addictions & Habits',
    displayOn: ['home', 'carl']
  },
  {
    slug: 'sex-addiction',
    title: 'Sex & Porn Addiction',
    displayOn: ['home', 'helen']
  },
  {
    slug: 'smoking',
    title: 'Stop Smoking',
    displayOn: ['carl']
  },
  {
    slug: 'weight-loss',
    title: 'Weight Loss',
    displayOn: ['carl']
  },
  {
    slug: 'confidence-development',
    title: 'Confidence',
    displayOn: ['home', 'carl']
  },
  {
    slug: 'phobias',
    title: 'Phobias',
    displayOn: ['home', 'helen', 'carl']
  },
  {
    slug: 'ocd',
    title: 'OCD',
    displayOn: ['home', 'helen', 'carl']
  },
  {
    slug: 'life-changes',
    title: 'Life Changes & Transitions',
    displayOn: ['home']
  },
  {
    slug: 'illness-disability',
    title: 'Illness & Disability',
    displayOn: ['home', 'helen']
  },
];

export const focuses = {
  all: () => allFocuses,
  home: () => allFocuses.filter((focus) => focus.displayOn.includes('home')),
  nav: () => allFocuses,
  carl: () => allFocuses.filter((focus) => focus.displayOn.includes('carl')),
  helen: () => allFocuses.filter((focus) => focus.displayOn.includes('helen')),
  getBySlug: (slug: string) => allFocuses.find((focus) => focus.slug === slug),
};
