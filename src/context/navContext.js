import React, { createContext, useContext} from "react";

const NavContext = createContext(undefined);

export const LinkProvider = ({ children }) => {

  const links =  [
    {
        Name: "Home",
        URL: "/"
    },
    {
        Name: "About",
        URL: "/about"
    },
    {
        Name: "Menu",
        URL: "/menu"
    },
    {
        Name: "Reservations",
        URL: "/reservations"
    },
    {
        Name: "Order Online",
        URL: "/order"
    },
    {
        Name: "Login",
        URL: "/login"
    }
]

  return (
    <NavContext.Provider value={links}>
      {children}
    </NavContext.Provider>
  );
};

export const useLinks = () => useContext(NavContext);
