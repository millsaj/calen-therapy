export interface IPricing {
  /** hourly rate in GBP */
  rateValue: number;

  /** formatted rate string */
  rate: string;
}

export const pricing: IPricing = {
  rateValue: 60,
  rate: "£60 per hour",
};
