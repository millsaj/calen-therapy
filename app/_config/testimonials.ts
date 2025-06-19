/**
 * Client testimonial configuration
 */

export interface ITestimonial {
  content: string;
  author: string;
  therapists: ('helen' | 'carl')[];
}

// TODO: When real testimonials are available, set this to true
export const showTestimonials = false;

// All testimonials for the site
export const testimonials: ITestimonial[] = [
  {
    content: "Helen helped me see things clearly. Highly recommended!",
    author: 'Client A',
    therapists: ['helen'],
  },
  {
    content: "My sessions with Helen were transformative and insightful.",
    author: 'Client B',
    therapists: ['helen'],
  },
  {
    content: "Carl's hypnotherapy worked wonders for my anxiety.",
    author: 'Client C',
    therapists: ['carl'],
  },
  {
    content: "Carl's techniques helped me break bad habits quickly.",
    author: 'Client D',
    therapists: ['carl'],
  },
  {
    content: "Both therapists at Calen provided excellent support.",
    author: 'Client E',
    therapists: ['helen', 'carl'],
  },
  {
    content: "Great experience with the Calen Therapy team!",
    author: 'Client F',
    therapists: ['helen', 'carl'],
  },
];

/**
 * Helper functions for accessing testimonials
 */
export const testimonialHelpers = {
  all: () => testimonials,
  forHelen: () => testimonials.filter(t => t.therapists.includes('helen')),
  forCarl: () => testimonials.filter(t => t.therapists.includes('carl')),
  forBoth: () => testimonials.filter(t => 
    t.therapists.includes('helen') && t.therapists.includes('carl')
  ),
};
