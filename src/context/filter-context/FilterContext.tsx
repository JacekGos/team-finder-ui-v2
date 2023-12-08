import { ReactNode, createContext, useEffect, useState } from "react";
import { FilterContextType } from "./filterContextModel";

export const FilterContext = createContext<FilterContextType>(
  {} as FilterContextType
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [activityType, setActivityType] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  console.log("filter location: ", location);
  console.log("filter activityType: ", activityType);

  return (
    <FilterContext.Provider
      value={{
        activityType,
        setActivityType,
        location,
        setLocation
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
