export interface IAddress {
  full: string;
  postcode: string;
  street: string;
  town: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface IContactDetails {
  address: IAddress;
  phones: {
    helen: string;
    carl: string;
  };
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
    city: "Wigan",
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
    carl: "carl.porter@hotmail.com",
  },
};
