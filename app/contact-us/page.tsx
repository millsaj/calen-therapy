'use client';

import { Testimonials } from '@/_components/sections/Testimonials';
import { testimonials } from '@app/_config/testimonials';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { routes } from '@app/_config/routes';
import { images } from '@app/_config/images';
import { contactDetails } from '@app/_config/main';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const contactSections = [
  {
    name: 'Helen',
    email: contactDetails.emails.helen,
    phone: contactDetails.phones.helen,
    image: images.helen.main.src,
    description: ['Psychotherapy, CBT, Counselling', 'For individuals, couples, and families.'],
    link: routes.helen(),
  },
  {
    name: 'Carl',
    email: contactDetails.emails.carl,
    phone: contactDetails.phones.carl,
    image: images.carl.main.src,
    description: ['Solution-focused Hypnotherapy', 'Make positive change.'],
    link: routes.carl(),
  }
];

export default function ContactUsPage() {
  return (
    <div className="mt-20">
      <NormalPageHero
        title='Contact Us'
        subtitle='This page contains information on how to get in touch with us for any inquiries or support.' />

      <StripedSection secondary={false} primary={false}>
        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto text-center items-center">
            {contactSections.map((contact, index) => {
              return <div key={index}>
                <div className="mb-8 relative flex justify-center">
                  <div className="w-40 h-40">
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white"
                  />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>

                  <p className="text-gray-700 text-sm">
                    {contact.description.map((desc) => {
                      return <span key={desc}>{desc}<br/></span>
                    })}
                  </p>

                  <ul className='mb-6'>
                    <li className="flex justify-center">
                      <EnvelopeIcon className="h-5 w-5 mr-3 mt-0.5" />
                      <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
                    </li>
                    <li className="flex justify-center">
                      <PhoneIcon className="h-5 w-5 mr-3 mt-0.5" />
                      <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
                    </li>
                  </ul>
                  <p>
                  <Link href={contact.link} className="hover:underline text-gray-500">
                    See profile
                  </Link>
                  </p>

                </div>
              </div>
            })}
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <div className="max-w-4xl mx-auto">

          {/* Form */}
          <form name="contact-us" data-netlify="true" className='card mt-16 p-8 bg-white shadow-md rounded-lg'>
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
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="text-center max-w-3xl mx-auto mt-12 text-gray-500">
            <p>
              This form uses <Link href={routes.external.formUserLink()}>Netlify Forms</Link> to send an email to helen.
            </p>
            <p>
              You can also contact either of us directly via email or phone.
            </p>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Testimonials testimonials={testimonials} />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
