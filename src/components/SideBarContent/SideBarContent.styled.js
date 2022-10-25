import styled from "styled-components";

export const NavBarLeftPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  a {
    color: black;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.87rem;
    line-height: 1.313rem;
    &:hover {
      color: orange;
    }
  }
  .navlink {
    color: black;
  }
  .navlink.active {
    color: orange;
  }
`;
export const LogoPlaceNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
  }
  img {
    width: 30%;
  }
`;
export const LinkPlaceNav = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  flex-direction: column;
  a {
    font-size: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${(props) => props.theme.colorGray};
  }
`;
