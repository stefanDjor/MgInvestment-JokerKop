import React from "react";
import {
  LinkPlaceNav,
  LogoPlaceNav,
  NavBarLeftPlace,
} from "./SideBarContent.styled";
import { Link, NavLink } from "react-router-dom";
import { JokerLogo } from "../../assets/icon/jokerlogo";

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
          <NavLink className={`menu_item ? 'active' : ''}`} to="/">
            O nama
          </NavLink>
          <NavLink className={`menu_item ? 'active' : ''}`} to="/mg-investment">
            MG Investment
          </NavLink>
          <NavLink className={`menu_item ? 'active' : ''}`} to="/joker-kop">
            Joker Kop
          </NavLink>
          <NavLink className={`menu_item ? 'active' : ''}`} to="/contact">
            Kontakt
          </NavLink>
        </LinkPlaceNav>
      </NavBarLeftPlace>
    </>
  );
};
