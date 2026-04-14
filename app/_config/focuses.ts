/** A therapy focus area offered at Calen Therapy. */
export interface IFocus {
  /** URL-safe identifier used in page routes (e.g. 'anxiety-stress'). */
  slug: string;
  /** Display name shown in navigation and page headings. */
  title: string;
  /** Which pages this focus is shown on. Controls which therapist profiles and the home page list it. */
  displayOn: ('home' | 'helen' | 'carl')[];
}

/** All therapy focus areas offered at Calen Therapy. */
export const focuses: IFocus[] = [
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
