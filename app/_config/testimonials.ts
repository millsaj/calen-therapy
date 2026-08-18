/** A client testimonial. */
export interface ITestimonial {
  content: string;
  author: string;
  /** Which therapist(s) this testimonial relates to. */
  therapists: ('helen')[];
}

// TODO: When real testimonials are available, set this to true
export const showTestimonials = false;

/** All client testimonials. Filter by `therapists` field to show per-therapist subsets. */
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
    content: "Helen provided excellent support throughout.",
    author: 'Client E',
    therapists: ['helen'],
  },
  {
    content: "Great experience with Calen Therapy!",
    author: 'Client F',
    therapists: ['helen'],
  },
];
