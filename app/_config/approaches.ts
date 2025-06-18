export interface ITherapyApproach {
  slug: string;
  title: string;
  content: string;
  talkTo: ('helen' | 'carl')[];
}

const allApproaches: ITherapyApproach[] = [
  {
    slug: 'psychodynamic',
    title: 'Psychodynamic',
    content: 'Explores how your past experiences and unconscious mind influence current behavior, helping resolve deep-seated patterns and conflicts.',
    talkTo: ['helen'],
  },
  {
    slug: 'systemic',
    title: 'Systemic',
    content: 'Addresses issues within the context of relationships and social systems, ideal for family issues and improving interpersonal dynamics.',
    talkTo: ['helen'],
  },
  {
    slug: 'hypnotherapy',
    title: 'Hypnotherapy',
    content: 'Solution Focussed Hypnotherapy is a Psycho-Hypnotherapy used to empower you to be positive and to enact changes to your life for continual improvement.',
    talkTo: ['carl'],
  },
  {
    slug: 'cbt',
    title: 'Cognitive Behavioral Therapy',
    content: 'Practical, solution-focused approach that examines the connection between thoughts and behaviors. Effective for anxiety, depression, and phobias.',
    talkTo: ['helen'],
  },
  {
    slug: 'person-centered',
    title: 'Person Centered',
    content: 'Client-led therapy focusing on empathy and unconditional support, allowing you to discover your own solutions at your own pace.',
    talkTo: ['helen'],
  },
  {
    slug: 'life-coaching',
    title: 'Life Coaching',
    content: 'Action-oriented approach for personal and professional development, helping you set and achieve meaningful goals.',
    talkTo: ['helen'],
  },
];

export const approaches = {
  all: () => allApproaches,
  home: () => allApproaches,
  nav: () => allApproaches,
  carl: () => allApproaches.filter((s) => s.talkTo.includes('carl')),
  helen: () => allApproaches.filter((s) => s.talkTo.includes('helen')),
  getBySlug: (slug: string) => allApproaches.find((s) => s.slug === slug),
};
