import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LeftNavBarPlace,
  LinkPlaceNav,
  NavBarContainer,
  RightNavBarPlace,
} from "./NavBar.styled";
import { routes } from "../../routes/routes";

import SideSlider from "../../components/SideSlider";
import { JokerLogo } from "../../assets/icon/jokerlogo";
import { Mglogomg } from "../../assets/icon/mglogomg";

export const NavBar = () => {
  const [navBar, setNavbar] = useState(false);
  return (
    <>
      <NavBarContainer>
        <LeftNavBarPlace>
          <NavLink className={`menu_item ? 'active' : ''}`} to="/">
            <JokerLogo />
          </NavLink>
        </LeftNavBarPlace>
        <RightNavBarPlace>
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
        </RightNavBarPlace>
      </NavBarContainer>
      <SideSlider open={navBar} onClose={setNavbar} />
    </>
  );
};
