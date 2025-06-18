export interface IFocus {
  slug: string;
  title: string;
  talkTo: ('helen' | 'carl')[];
}

const allFocuses: IFocus[] = [
  {
    slug: 'anxiety-stress',
    title: 'Anxiety & Stress',
    talkTo: ['carl']
  },
  {
    slug: 'depression',
    title: 'Depression',
    talkTo: ['helen', 'carl']
  },
  {
    slug: 'relationships',
    title: 'Relationships & Family',
    talkTo: ['helen']
  },
  {
    slug: 'grief-loss',
    title: 'Grief & Loss',
    talkTo: ['helen']
  },
  {
    slug: 'trauma',
    title: 'Trauma & PTSD',
    talkTo: ['helen']
  },
  {
    slug: 'addictions',
    title: 'Addictions & Habits',
    talkTo: ['carl']
  },
  {
    slug: 'sex-addiction',
    title: 'Sex & Porn Addiction',
    talkTo: ['helen']
  },
  {
    slug: 'smoking',
    title: 'Stop Smoking',
    talkTo: ['carl', 'helen']
  },
  {
    slug: 'weight-loss',
    title: 'Weight Loss',
    talkTo: ['carl', 'helen']
  },
  {
    slug: 'confidence-development',
    title: 'Confidence & Personal Development',
    talkTo: ['carl']
  },
  {
    slug: 'phobias',
    title: 'Phobias',
    talkTo: ['helen', 'carl']
  },
  {
    slug: 'ocd',
    title: 'OCD',
    talkTo: ['helen', 'carl']
  },
  {
    slug: 'life-changes',
    title: 'Life Changes & Transitions',
    talkTo: []
  },
  {
    slug: 'illness-disability',
    title: 'Illness & Disability',
    talkTo: ['helen', 'carl']
  },
];

export const focuses = {
  all: () => allFocuses,
  home: () => allFocuses,
  nav: () => allFocuses,
  carl: () => allFocuses.filter((focus) => focus.talkTo.includes('carl')),
  helen: () => allFocuses.filter((focus) => focus.talkTo.includes('helen')),
  getBySlug: (slug: string) => allFocuses.find((focus) => focus.slug === slug),
};
