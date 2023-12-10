import { ReactNode, createContext, useEffect, useState } from "react";
import { EventDate, FilterContextType, Price } from "./filterContextModel";
import moment from "moment";

export const FilterContext = createContext<FilterContextType>(
  {} as FilterContextType
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {

  const currentDate = new Date();
  const nextDate = new Date(new Date().getDay() + 1);

  console.log("current date: ", currentDate);
  console.log("next date: ", nextDate);

  const [activityType, setActivityType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [range, setRange] = useState<number>(15);
  const [price, setPrice] = useState<Price>({ min: 0, max: 300 });
  //   const [date, setDate] = useState<EventDate>({
  //     from: currentDate.toISOString(),
  //     to: nextDate.toISOString(),
  //   });
  const [date, setDate] = useState<EventDate>({
    from: moment().format(`yyyy-MM-dd'T'hh:mm`).toString(),
    to: moment(nextDate).format(`yyyy-MM-dd'T'hh:mm`).toString(),
    // from: moment(currentDate).format(`DD-MM-YYYY'T'HH:mm`).toString(),
    // to: moment(nextDate).format(`DD-MM-YYYY'T'HH:mm`).toString(),
  });

  console.log("filter location: ", location);
  console.log("filter activityType: ", activityType);
  console.log("filter range: ", range);
  console.log(`price range min: ${price.min} - max: ${price.max}`);
  console.log(`date range from: ${date.from} - max: ${date.to}`);

  return (
    <FilterContext.Provider
      value={{
        activityType,
        setActivityType,
        location,
        setLocation,
        range,
        setRange,
        price,
        setPrice,
        date,
        setDate,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
