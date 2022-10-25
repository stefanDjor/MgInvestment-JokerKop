import styled from "styled-components";
import backgroundImg from "../../assets/images/kamioni/tegljac/tegljac.png";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  gap: 2rem;
`;
export const NavContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    height: 550px;
  }
  @media (max-width: 570px) {
    height: 350px;
    background-position: center;
    background-size: cover;
  }
`;
export const NavBarTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  color: white;
  p {
    font-size: 55px;
    font-weight: bold;
    line-height: 56px;
    letter-spacing: 2px;
    margin: 0;
    @media (max-width: 920px) {
      font-size: 40px;
    }
    @media (max-width: 670px) {
      font-size: 32px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media (max-width: 550px) {
      font-size: 22px;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 1.5rem;
    }
  }
`;
export const FooterDown = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 2rem;
  margin-bottom: 4rem;
  transition: all 0.5s ease-out;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: auto;
  }
`;
export const FooterLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const FooterRight = styled.div`
  /* width: 100%; */
  /* max-width: 400px; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const FooterRightCards = styled.div`
  display: flex;
  width: 60%;
  min-width: 350px;
  flex-direction: column;
  gap: 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  padding: 2rem;
  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
`;
export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
