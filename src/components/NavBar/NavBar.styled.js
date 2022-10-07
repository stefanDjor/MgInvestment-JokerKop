import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 2.5rem;
  margin: 2rem auto;
  background: #ffffff;
  box-shadow: 0px 0px 24.9653px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  
`;
export const LeftNavBarPlace = styled.div`
  cursor: pointer;
`;

export const LogoPlaceNav = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 2rem;
`;
export const RightNavBarPlace = styled.div`
  display: flex;
  gap: 0.625rem;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: black;
  }
  .navlink {
    color: black;
  }
  .navlink.active {
    color: orange;
  };
    @media (max-width: 760px) {
      display: none;
    }
  
`;
export const LinkPlaceNav = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: center;
`;
export const NavBarHamburger = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: flex;
    align-items: center;
  }
`;
