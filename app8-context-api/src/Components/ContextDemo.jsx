import { createContext } from "react";

const userContext = createContext(); // This will help to Send Data from One Place and Receive in another Place.

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
