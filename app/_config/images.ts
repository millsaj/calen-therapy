export interface ICalenImage {
  url: string;
  alt: string;
}

const calenImage = (url: string, alt: string): ICalenImage => ({
  url,
  alt,
});

export const images = {
  helen: {
    main: calenImage("/images/helen/helen.jpg", "Helen Porter"),
    bacp: calenImage("/images/helen/bacp-member.png", "BACP Registered Member 52368"),
  },
  carl: {
    main: calenImage("/images/carl/carl.jpg", "Carl Porter"),
  },
  space: [
    calenImage("/images/space/sat-down-1.jpeg", "Therapy Space"),
    calenImage("/images/space/center-1.jpeg", "Therapy Space"),
    calenImage("/images/space/center-2.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-1.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-2.jpeg", "Therapy Space"),
    calenImage("/images/space/corner-3.jpeg", "Therapy Space"),
  ],
  general: {
    homeHero: calenImage("/images/general/hands_connecting.webp", "Two hands reaching towards each other"),
  }
};
