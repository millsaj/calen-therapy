export interface ITestimonial {
  content: string;
  author: string;
  therapists: ('helen' | 'carl')[];
}

export const testimonials: ITestimonial[] = [
  {
    content:
      "Helen's compassionate and insightful guidance helped me navigate a very challenging time in my life. Her expertise is unmatched.",
    author: 'Laura T.',
    therapists: ['helen'],
  },
  {
    content:
      "Working with Helen has been life-changing. Her psychodynamic approach helped me uncover and address issues I didn't even realise were holding me back.",
    author: 'Michael B.',
    therapists: ['helen'],
  },
  {
    content:
      "Helen's therapy sessions provided me with the tools to better understand myself and improve my relationships. I can't thank her enough.",
    author: 'Rachel P.',
    therapists: ['helen'],
  },
  {
    content:
      "Carl's hypnotherapy sessions were incredibly effective. I was able to overcome my fear of public speaking in just a few sessions.",
    author: 'Tom H.',
    therapists: ['carl'],
  },
  {
    content:
      "Carl's calm and professional demeanor made me feel at ease right away. His techniques helped me manage my stress and improve my focus.",
    author: 'Anna L.',
    therapists: ['carl'],
  },
  {
    content:
      'The team at Calen Therapy is amazing. Their holistic approach to mental health has made a huge difference in my life.',
    author: 'Chris W.',
    therapists: ['helen', 'carl'],
  },
  {
    content:
      'I highly recommend Calen Therapy to anyone seeking professional and compassionate care. Their tailored approach really works.',
    author: 'Jessica F.',
    therapists: ['helen', 'carl'],
  },
  {
    content:
      'Calen Therapy has been a beacon of hope for me. Their therapists are knowledgeable, empathetic, and truly care about their clients.',
    author: 'Mark D.',
    therapists: ['helen', 'carl'],
  },
  {
    content:
      'The therapists at Calen Therapy are exceptional. They helped me develop coping strategies that have improved my daily life significantly.',
    author: 'Sophia G.',
    therapists: ['helen', 'carl'],
  },
  {
    content:
      'Choosing Calen Therapy was the best decision I ever made. Their support and expertise have been invaluable to my mental health journey.',
    author: 'Ethan R.',
    therapists: ['helen', 'carl'],
  },
];
