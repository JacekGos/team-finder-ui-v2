export interface FilterContextType {
  activityType: string;
  setActivityType: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  price: Price;
  setPrice: React.Dispatch<React.SetStateAction<Price>>;
  date: EventDate;
  setDate: React.Dispatch<React.SetStateAction<EventDate>>;
}

export interface Price {
  min: number;
  max: number;
}

export interface EventDate {
  from: string;
  to: string;
}
