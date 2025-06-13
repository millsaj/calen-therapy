import React from 'react';
import Link from 'next/link';
import NormalPageHero from '@app/_components/hero/NormalPageHero';
import { CallToAction } from '@app/_components/sections/CallToAction';
import { StripedSection } from '@app/_components/sections/StripedSection';

interface IFocusPageProps {
  /**
   * Hero section with title and subtitle
   * Purpose: Introduces the focus area to visitors clearly and concisely
   * Content: Should contain a compelling title and a brief, supportive subtitle
   */
  hero: {
    title: string,
    subtitle: string,
  },
  /**
   * Introduction section.
   * Purpose: Provides a clear overview of what the focus area is about
   * Content: Should be a simple introduction into what this focus is. Usually ~2 paragraphs
   * that define the condition/issue and provide basic context to visitors
   */
  intro: {
    title: string,
    body: React.ReactNode,
  },
  /**
   * Common issues section.
   * Purpose: Normalizes the experience and helps visitors feel less alone
   * Content: Explains why this issue affects many people, common causes, and contextual
   * factors that contribute to its prevalence. Often includes statistics or lists.
   */
  common: {
    title: string,
    body: React.ReactNode,
  },
  /**
   * Signs and symptoms section.
   * Purpose: Helps visitors identify if they might benefit from therapy for this issue
   * Content: Contains specific behavioral patterns, emotional responses, or situations
   * that indicate professional help might be beneficial. Presented as accessible cards
   * We should use multiples of 3 for the items.
   */
  signs: {
    title: string,
    subtitle: string,
    items: {
      title: string,
      description: string,
    }[],
  },
  /**
   * Its okay to have therapy reminder section
   * Purpose: Provides reassurance and encouragement to take action
   * Content: A supportive message that normalizes seeking help and frames
   * therapy as a positive, proactive choice rather than a last resort
   */
  reminder: {
    title: string,
    subtitle: string,
  },
  /**
   * Expectations section.
   * Purpose: Sets realistic expectations about the therapeutic process
   * Content: Describes treatment approaches used, the general therapy structure,
   * and what clients can expect when working with a therapist on this issue
   */
  expectations: {
    title: string,
    body: React.ReactNode,
  },
  /**
   * Results section.
   * Purpose: Highlights potential benefits of therapy for this focus area
   * Content: Separates outcomes into short-term and long-term benefits to create
   * realistic expectations. Includes a conclusion that emphasizes the value of the journey
   */
  results: {
    title: string,
    intro: string,
    shortTerm: string[],
    longTerm: string[],
    conclusion: string,
  },
  /**
   * Call to action section.
   * Purpose: Encourages visitors to take the next step toward therapy
   * Content: A compelling title and supportive description that motivates
   * the visitor to reach out for help with this specific issue
   */
  cta: {
    title: string,
    description: string,
  },
}

export const FocusPage: React.FC<IFocusPageProps> = ({
  hero,
  intro,
  common,
  signs,
  reminder,
  expectations,
  results,
  cta
}) => {
  // Render content section with title and body
  const renderContentSection = (title: string, body: React.ReactNode) => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-lg">
        {body}
      </div>
    </div>
  );

  // Render signs section with cards
  const renderSignsSection = (title: string, subtitle: string, items: {title: string, description: string}[]) => (
    <>
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((card, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  // Render reminder section
  const renderReminderSection = (title: string, subtitle: string) => (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-0">
        {subtitle}
      </p>
    </div>
  );

  // Render expectations section with improved styling
  const renderExpectationsSection = (title: string, body: React.ReactNode) => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="prose prose-lg">
        {body}
      </div>
    </div>
  );

  // Render results section with short-term and long-term outcomes
  const renderResultsSection = (
    title: string,
    intro: string,
    shortTerm: string[],
    longTerm: string[],
    conclusion: string
  ) => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="mb-8">
        <p className="text-lg mb-6">
          {intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">In the Short Term</h3>
            <ul className="space-y-2">
              {shortTerm.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-primary">In the Long Term</h3>
            <ul className="space-y-2">
              {longTerm.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-lg">
          {conclusion}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Page Title / Hero Section */}
      <NormalPageHero
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Introduction Section */}
      <StripedSection secondary={false} primary={false}>
        {renderContentSection(intro.title, intro.body)}
      </StripedSection>

      {/* Common Section */}
      <StripedSection secondary={true} primary={false}>
        {renderContentSection(common.title, common.body)}
      </StripedSection>

      {/* Signs Section */}
      <StripedSection secondary={false} primary={false}>
        {renderSignsSection(signs.title, signs.subtitle, signs.items)}
      </StripedSection>

      {/* Reminder Banner */}
      <StripedSection secondary={true} primary={false}>
        {renderReminderSection(reminder.title, reminder.subtitle)}
      </StripedSection>

      {/* Expectations Sections */}
      <StripedSection secondary={false} primary={false}>
        {renderExpectationsSection(expectations.title, expectations.body)}
      </StripedSection>

      {/* Expected Results Section */}
      <StripedSection secondary={true} primary={false}>
        {renderResultsSection(
          results.title,
          results.intro,
          results.shortTerm,
          results.longTerm,
          results.conclusion
        )}
      </StripedSection>

      {/* Call to Action Section */}
      <StripedSection secondary={false} primary={true}>
        <CallToAction
          title={cta.title}
          description={[cta.description]}
        />
      </StripedSection>
    </div>
  );
}
