import styled from "styled-components";
// import backgroundImg from "../../assets/images/CoverHome.jpeg";
import backgroundImg from "../../assets/images/kamioni/tegljac/tegljac.png";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1500px;
  margin: 0 auto;
`;
export const NavContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    }
  }
  @media (max-width: 550px) {
    text-align: center;
    margin-top: 0rem;
  }
`;
export const MaintText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  text-align: center;
  margin-top: 4rem;
  @media (max-width: 550px) {
    margin-top: 2rem;
  }
  p {
    max-width: 800px;
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin: 0;
  }
`;
export const HomeCardConainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  margin-bottom: 4rem;
  @media (max-width: 550px) {
    margin-bottom: 2rem;
  }
`;
export const HomeCardFirst = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
`;
export const HomeCardSecond = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 350px;
`;

export const HomeCard = styled.div`
  width: 30%;
  height: 340px;
  max-width: 360px;
  min-width: 320px;
  /* background-color: blue; */
  /* border: 1px solid red; */
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.8rem;
  gap: 1.5rem;
  text-align: center;
  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
`;
