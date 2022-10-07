import React from "react";
import {
  LinkPlaceNav,
  LogoPlaceNav,
  NavBarLeftPlace,
} from "./SideBarContent.styled";
import { Link, NavLink } from "react-router-dom";
import { JokerLogo } from "../../assets/icon/jokerlogo";
import { routes } from "../../routes/routes";
import { MglogoWhite } from "../../assets/mglogowhite";

export const SideBarNavContnent = () => {
  return (
    <>
      <NavBarLeftPlace>
        <LogoPlaceNav>
          <Link to="/">
            <JokerLogo />
          </Link>
        </LogoPlaceNav>
        <LinkPlaceNav>
            {routes.map((route, i) => {
              return (
                <NavLink
                  key={route.name}
                  className="navlink"
                  to={route.path}
                  end={route.name === "Home"}
                >
                  {route.name}
                  
                </NavLink>
              );
            })}
            
          </LinkPlaceNav>
          <LogoPlaceNav>
          <Link to="/">
            <MglogoWhite />
          </Link>
        </LogoPlaceNav>
      </NavBarLeftPlace>
    </>
  );
};
