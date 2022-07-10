export interface Result {
  result: string;
  message: string;
  data?: {
    bin: number;
    vendor: string;
    type: string;
    level: string;
    bank: string;
    country: string;
    countryInfo: {
      name: string;
      emoji: string;
      unicode: string;
      code: string;
    };
  };
}

export type Sites = 'binov.net' | 'bins.ws' | 'bins.su';
