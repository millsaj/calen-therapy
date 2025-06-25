'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { routes } from '@app/_config';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [contactError, setContactError] = useState(null as string | null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    setContactError(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validate that at least one contact method is provided
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();

    if (!email && !phone) {
      setContactError('Please provide either an email address or phone number.');
      setIsSubmitting(false);
      return;
    }

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
        className='card p-8 bg-secondary shadow-md rounded-lg relative'
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact-us" />

        {/* Overlay that appears during form submission */}
        {isSubmitting && (
          <div className="absolute z-30 inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-lg">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-accent font-medium">Sending your message...</p>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">Send Helen an email</h2>

        <div className="hidden">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name (do not fill this in)
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-accent focus:border-accent"
          />
        </div>

        <div className="mb-4 mt-8">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border bg-white border-gray-300 rounded-md shadow-sm p-2 focus:ring-accent focus:border-accent"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border bg-white border-gray-300 rounded-md shadow-sm p-2 focus:ring-accent focus:border-accent"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full border bg-white border-gray-300 rounded-md shadow-sm p-2 focus:ring-accent focus:border-accent"
            placeholder="Your phone number"
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
            className="mt-1 block w-full border bg-white border-gray-300 rounded-md shadow-sm p-2 min-h-24 focus:ring-accent focus:border-accent"
            placeholder="Hi Helen, I would like to book an appointment for..."
            required
          ></textarea>
        </div>

        {isSuccess && (
          <div className="mb-4 p-3 border-2 border-primary text-accent rounded-md text-center">
            Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}

        {contactError && (
          <div className="mb-4 p-3 border-2 border-red-800 text-red-800 rounded-md text-center">
            {contactError}
          </div>
        )}

        {isError && (
          <div className="mb-4 p-3 border-2 border-red-800 text-red-800 rounded-md text-center">
            There was an error sending your message. Please try again or contact us directly.
          </div>
        )}

        <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 cursor-pointer px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-secondary disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      <div className="text-center max-w-3xl mx-auto mt-12 text-gray-500">
        <p>
          This form uses <Link href={routes.external.formUserLink()} className="text-primary underline hover:text-accent hover:no-underline decoration-primary/60">Netlify Forms</Link> to send an email to helen.
        </p>
        <p>
          You can also contact either of us directly via email or phone.
        </p>
      </div>
    </div>
  );
}
