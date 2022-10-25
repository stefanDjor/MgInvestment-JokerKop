import styled from "styled-components";
// import backgroundImg from "../../assets/images/CoverHome.jpeg";
import backgroundImg from "../../assets/images/kamioni/tegljac/tegljac.png";

export const MgInvestmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
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
export const MaintText = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  @media (max-width: 550px) {
    margin-top: 2rem;
  }
  p {
    width: 100%;
    max-width: 800px;
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
`;
export const MgCardConainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const MgCardFirst = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media (max-width: 970px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
export const MgCardPicture = styled.div`
  height: 460px;
  /* height: auto; */
  width: 40%;
  min-width: 440px;
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
  text-align: center;
  img {
    height: 440px;
    width: 100%;
    border-radius: 10.5585px;
  }
  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
  @media (max-width: 520px) {
    min-width: 400px;
  }
  @media (max-width: 420px) {
    min-width: 310px;
  }
`;
export const MgCardText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 440px;
`;
export const TopTextContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  p {
    width: 100%;
    max-width: 800px;
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
`;
export const MgCardSecond = styled.div`
  display: flex;
  justify-content: space-around;
  height: 350px;
  @media (max-width: 970px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;
export const MgCardPictureSecond = styled.div`
  width: 50%;
  max-width: 440px;
  min-width: 320px;
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
  @media (max-width: 620px) {
    max-width: 600px;
    width: 80%;
  }
`;
export const ExcavatorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ExcavatorsContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export const ExcavatorsCardsPlace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const ExcavatorsCard = styled.div`
  width: 50%;
  min-width: 320px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  padding: 0.8rem;
  gap: 1rem;
  box-sizing: border-box;
  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
`;
export const ExcavatorsCardImg = styled.div`
  width: 100%;
  display: flex;
  img {
    height: 300px;
    width: 100%;
  }
`;
export const ExcavatorsCardText = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  p {
    font-size: 1rem;
  }
  .bold {
    font-weight: bold;
  }
`;
export const DownText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1.5rem;
  flex-direction: column;
  gap: 3rem;
  p {
    width: 100%;
    max-width: 800px;
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: center;
    margin: 0;
  }
`;
export const InfraContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const InfraContainerLeft = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  p {
    width: 100%;
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
  }
`;
export const InfraContainerRight = styled.div`
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 670px) {
    flex-direction: column;
  }
`;
export const InfraCard = styled.div`
  width: 40%;
  max-width: 400px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 22.6253px rgba(0, 0, 0, 0.15);
  border-radius: 10.5585px;
  padding: 0.8rem;
  gap: 1rem;

  border: 4px solid white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 22.6253px rgba(249, 105, 14, 0.55);
  }
  img {
    width: 100%;
    height: 300px;
  }
`;
export const InfraContainerSecond = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 3rem;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const InfraContainerSecondLeft = styled.div`
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 990px) {
    order: 1;
  }
  @media (max-width: 670px) {
    flex-direction: column;
  }
`;
export const InfraContainerSecondRight = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  p {
    width: 100%;
    max-width: 800px;
    font-size: 1.2rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
  }
`;
