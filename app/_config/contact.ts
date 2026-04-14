/** Physical address of the therapy practice. */
export interface IAddress {
  /** Full formatted address string. */
  full: string;
  postcode: string;
  street: string;
  /** Village or district (e.g. 'Billinge'). */
  town: string;
  /** City label shown to clients (e.g. 'Wigan / St Helens'). */
  city: string;
  country: string;
  /** GPS coordinates for the map embed. */
  coordinates: {
    lat: number;
    lng: number;
  };
}

/** Contact details for the practice and individual therapists. */
export interface IContactDetails {
  address: IAddress;
  /** Mobile phone numbers for each therapist. */
  phones: {
    helen: string;
    carl: string;
  };
  /** Email addresses for each therapist. */
  emails: {
    helen: string;
    carl: string;
  };
}

export const contactDetails: IContactDetails = {
  address: {
    full: "Windsor Road, Billinge, Wigan, WN5 7LD",
    postcode: "WN5 7LD",
    street: "Windsor Road",
    town: "Billinge",
    city: "Wigan / St Helens",
    country: "England",
    coordinates: {
      lat: 53.4962795232559,
      lng: -2.7014565467834473
    },
  },
  phones: {
    helen: "07584040947",
    carl: "07599571360",
  },
  emails: {
    helen: "h.m.porter@hotmail.com",
    carl: "carl.porter@hotmail.co.uk",
  },
};
