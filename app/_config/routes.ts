// This file defines the routes for the application.
const baseUrl = "https://calen-therapy.co.uk";

export const createRoutes = () => ({
  baseUrl: () => baseUrl,
  url: (path: string = "") => baseUrl + path,
  
  approaches: {
    systemic: () => '/approaches/systemic' as const,
    psychodynamic: () => '/approaches/psychodynamic' as const,
    hypnotherapy: () => '/approaches/hypnotherapy' as const,
    cbt: () => '/approaches/cbt' as const,
    personCentered: () => '/approaches/person-centered' as const,
    lifeCoaching: () => '/approaches/life-coaching' as const,
    show: (approach: string) => `/approaches/${approach}` as const,
  },
  focuses: {
    anxietyStress: () => '/focuses/anxiety-stress' as const,
    depression: () => '/focuses/depression' as const,
    relationships: () => '/focuses/relationships' as const,
    griefLoss: () => '/focuses/grief-loss' as const,
    trauma: () => '/focuses/trauma' as const,
    addictions: () => '/focuses/addictions' as const,
    sexAddiction: () => '/focuses/sex-addiction' as const,
    confidenceDevelopment: () => '/focuses/confidence-development' as const,
    ocd: () => '/focuses/ocd' as const,
    phobias: () => '/focuses/phobias' as const,
    lifeChanges: () => '/focuses/life-changes' as const,
    healthWellbeing: () => '/focuses/health-wellbeing' as const,
    show: (focus: string) => `/focuses/${focus}` as const,
  },
  sessionTypes: {
    inPerson: () => '/session-types/in-person' as const,
    online: () => '/session-types/online' as const,
    other: () => '/session-types/other' as const,
  },
  helen: () => '/meet-us/helen' as const,
  carl: () => '/meet-us/carl' as const,
  faqs: () => '/faqs' as const,
  findUs: () => '/session-types/in-person/#find-us' as const, // TODO: Add a real find us page as well. Probably better for SEO
  contact: () => '/contact-us' as const,
  notFound: () => '/not-found' as const,
  home: () => '/' as const,
  sitemap: () => '/sitemap.xml' as const,
  robots: () => '/robots.txt' as const,
  external: {
    helenBacp: () => 'https://www.bacp.co.uk/therapists/52368' as const,
    helenCounsellingDirectory: () => 'https://www.counselling-directory.org.uk/counsellors/helen-porter' as const,
    helenPsychologyToday: () => 'https://www.psychologytoday.com/gb/counselling/helen-mills-porter-wigan/1362603' as const,
    carlHypnotherapyDirectory: () => 'https://www.hypnotherapy-directory.org.uk/hypnotherapists/carl-porter' as const,
    formUserLink: () => 'https://www.netlify.com/' as const,
    relate: () => 'https://relate.co.uk' as const, // TODO: Check this URL works bc I guessed
  },
});

export const routes = createRoutes();
