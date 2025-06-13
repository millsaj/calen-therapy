'use client';

import { Carousel } from '../ui/Carousel';
import { ITestimonial } from '@app/_config/testimonials';

interface ITestimonialsProps {
  title?: string;
  testimonials: ITestimonial[];
  striped?: boolean;
}

export const Testimonials: React.FC<ITestimonialsProps> = ({
  title = 'What Our Clients Say',
  testimonials,
  striped = false,
}) => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-4">{title}</h2>
      </div>

      <Carousel
        items={testimonials}
        renderItem={testimonial => (
          <blockquote className={`${striped ? "bg-white" : "bg-secondary"} p-6 rounded-lg shadow-md text-center`}>
            <p className="italic mb-6">{testimonial.content}</p>
            <footer className="font-medium">— {testimonial.author}</footer>
          </blockquote>
        )}
      />
    </>
  );
};
