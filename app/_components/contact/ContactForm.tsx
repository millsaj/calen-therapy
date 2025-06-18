'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { routes } from '@app/_config/routes';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Convert FormData to a format compatible with URLSearchParams
      const formEntries = Array.from(formData.entries()).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          acc[key] = value.toString();
          return acc;
        }, 
        {}
      );
      
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formEntries).toString(),
      });
      
      // Reset form
      form.reset();
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form 
        name="contact-us" 
        data-netlify="true" 
        className='card p-8 bg-white shadow-md rounded-lg'
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact-us" />
        
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

        <div className="mb-4 mt-8">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact Details
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Email or Phone No."
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-24 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        
        {isSuccess && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
            Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}
        
        {isError && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
            There was an error sending your message. Please try again or contact us directly.
          </div>
        )}
        
        <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      <div className="text-center max-w-3xl mx-auto mt-12 text-gray-500">
        <p>
          This form uses <Link href={routes.external.formUserLink()} className="text-primary hover:underline hover:text-accent">Netlify Forms</Link> to send an email to helen.
        </p>
        <p>
          You can also contact either of us directly via email or phone.
        </p>
      </div>
    </div>
  );
}
