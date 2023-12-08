import { ReactNode, createContext, useState } from "react";
import { FilterContextType } from "./filterContextModel";

export const FilterContext = createContext<FilterContextType>(
  {} as FilterContextType
);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [activityType, setActivityType] = useState<string>("");

  console.log('activityType: ', activityType);

  return (
    <FilterContext.Provider
      value={{
        activityType,
        setActivityType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
