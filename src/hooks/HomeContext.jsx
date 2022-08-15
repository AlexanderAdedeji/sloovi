import React, { useState,createContext } from "react";

export const HomeContext = createContext({
  views: "",
  setViews: () => {},
});

export const HomeContextProvider = ({ children }) => {
  const [views, setViews] = useState("list");

  const value = { views, setViews };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
