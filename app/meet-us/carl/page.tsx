'use client';

import { Testimonials } from '@app/_components/sections/Testimonials';
import { testimonials } from '@app/_config/testimonials';
import { focuses } from '@app/_config/focuses';
import { images } from '@app/_config/images';
import { Focuses } from '@app/_components/sections/Focuses';
import { SplitPageHero } from '@app/_components/hero/SplitPageHero';
import { StripedSection } from '@app/_components/sections/StripedSection';
import { CallToAction } from '@app/_components/sections/CallToAction';
import Link from 'next/link';

// Have you heard of NLP but not sure how it works?
// Neuro-Linguistic Programming is all about how you process information and experience the world.
// It can help amplify your ability to manage your own internal state and how you regulate.

export default function CarlPage() {

  return (
    <div>
      {/* Hero Section */}
      <SplitPageHero
        imageSrc={images.carl.main.src}
        imageAlt={images.carl.main.alt}
        title='Carl Porter' >

        <p>
          Hi, I'm Carl. I provide a confidential and professional hypnotherapy service alongside my wife Helen, who is a psychotherapist and relationship therapist. Qualified in hypnotherapy and as an NLP practitioner, I will enable you to make significant changes to your life and wellbeing.
        </p>
      </SplitPageHero>

      <StripedSection secondary={true} primary={false}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-6xl font-bold mb-6 text-gray-800">Qualifications & Experience</h2>
          <p className="text-xl text-gray-600 mb-10">Specialized training in solution-focused hypnotherapy.</p>
          <div className="flex flex-col gap-8 items-center">

            {/* Core Qualifications Card */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform">
              <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full shadow-lg mt-1">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <div className="text-center max-w-[85%]">
                <h3 className="text-xl font-semibold text-primary mb-4">Core Qualifications</h3>
                <p className="text-gray-700 text-sm mb-6">
                  I specialize in solution-focused hypnotherapy to help clients make positive changes in their lives.<br />
                  I'm qualified to help you manage daily stresses and find alternatives to unwanted negative feelings.
                </p>
                <ul className="text-gray-700 space-y-3 font-medium w-full">
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <span>Solution Focused Hypnotherapy Diploma (2020)</span>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <span>NLP Practitioner Certification</span>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <span>IPS Degree (2002)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Memberships Section */}
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform">
              <div className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full shadow-lg mt-1">
                <span className="text-white text-2xl">🏅</span>
              </div>
              <div className="text-center max-w-[85%]">
                <h3 className="text-xl font-semibold text-primary mb-4">Professional Memberships</h3>
                <p className="text-gray-700 text-sm mb-6">
                  I'm a registered practitioner with the following professional directories:
                </p>
                <ul className="text-gray-700 space-y-3 font-medium w-full">
                  <li className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Link href="https://www.hypnotherapy-directory.org.uk/hypnotherapists/carl-porter" target="_blank" className="text-primary hover:underline">
                      <span>Hypnotherapy Directory</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Solution Focused Hypnotherapy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A modern approach to creating positive change</p>
          </div>


          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              In the first part of your session I will explain exactly how Hypnotherapy will benefit you from a perspective of how you feel, along with scientifically proven evidence. You'll find the sessions relaxing, enlightening and often life changing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">How It Works</h3>
                <p className="text-gray-700">
                  Solution Focused Hypnotherapy accesses your subconscious mind while you're in a deeply relaxed state, allowing us to focus on your goals and desired outcomes rather than problems from your past.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">What to Expect</h3>
                <p className="text-gray-700">
                  Sessions include a discussion about your goals, guided relaxation, and positive suggestions tailored to your needs. You'll remain aware and in control throughout the process.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center my-8">
              <Link href="/styles/hypnotherapy" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent transition-colors">
                Learn more about hypnotherapy
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </StripedSection>

      <StripedSection secondary={true} primary={false}>
        <Focuses
          focuses={focuses.carl()}
          striped={true} />
      </StripedSection>

      <StripedSection secondary={false} primary={false}>
        <Testimonials testimonials={testimonials.filter((t) => t.therapists.includes('carl'))} />
      </StripedSection>

      <StripedSection secondary={false} primary={true}>
        <CallToAction />
      </StripedSection>
    </div>
  );
}
