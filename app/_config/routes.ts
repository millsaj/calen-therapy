/** All internal and external URLs for the site. String properties are static paths; functions accept a parameter. */
export const routes = {
  /** Full base URL of the site. */
  baseUrl: 'https://calentherapy.co.uk',
  /** Returns the full URL for a given path (defaults to the base URL). */
  url: (path: string = '') => `https://calentherapy.co.uk${path}`,

  approaches: {
    systemic: '/approaches/systemic',
    psychodynamic: '/approaches/psychodynamic',
    hypnotherapy: '/approaches/hypnotherapy',
    cbt: '/approaches/cbt',
    personCentered: '/approaches/person-centered',
    lifeCoaching: '/approaches/life-coaching',
    /** Returns the path for a given approach slug. */
    show: (approach: string) => `/approaches/${approach}`,
  },

  focuses: {
    anxietyStress: '/focuses/anxiety-stress',
    depression: '/focuses/depression',
    relationships: '/focuses/relationships',
    griefLoss: '/focuses/grief-loss',
    trauma: '/focuses/trauma',
    addictions: '/focuses/addictions',
    sexAddiction: '/focuses/sex-addiction',
    confidenceDevelopment: '/focuses/confidence-development',
    ocd: '/focuses/ocd',
    phobias: '/focuses/phobias',
    lifeChanges: '/focuses/life-changes',
    illnessDisability: '/focuses/illness-disability',
    smoking: '/focuses/smoking',
    weightLoss: '/focuses/weight-loss',
    /** Returns the path for a given focus slug. */
    show: (focus: string) => `/focuses/${focus}`,
  },

  sessionTypes: {
    inPerson: '/session-types/in-person',
    online: '/session-types/online',
    other: '/session-types/other',
  },

  helen: '/meet-us/helen',
  carl: '/meet-us/carl',
  faqs: '/faqs',
  findUs: '/find-us',
  contact: '/contact-us',
  notFound: '/not-found',
  home: '/',
  sitemap: '/sitemap.xml',
  robots: '/robots.txt',
  formSubmission: '/form-submission.html',

  external: {
    helenBacp: 'https://www.bacp.co.uk/therapists/52368',
    helenCounsellingDirectory: 'https://www.counselling-directory.org.uk/counsellors/helen-porter',
    helenPsychologyToday: 'https://www.psychologytoday.com/gb/counselling/helen-mills-porter-wigan/1362603',
    carlHypnotherapyDirectory: 'https://www.hypnotherapy-directory.org.uk/hypnotherapists/carl-porter',
    formUserLink: 'https://www.netlify.com/',
    relate: 'https://www.relate.org.uk/',
  },
};
