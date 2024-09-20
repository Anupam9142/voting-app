import React, { createContext } from "react";

export const WebsiteContext = createContext();

export const WebsiteContextProvider = (props) => {
  return (
    <WebsiteContext.Provider value={{}}>
      {props.children}
    </WebsiteContext.Provider>
  );
};