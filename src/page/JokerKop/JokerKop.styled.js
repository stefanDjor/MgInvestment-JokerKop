import styled from "styled-components";
import backgroundImg from "../../assets/images/CoverHome.jpeg";

export const JokerKopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const NavContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
`;
export const MaintText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
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
export const CoridorContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 2rem;
margin-bottom: 2rem;
padding: 2rem;
align-items: center;
`
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
`
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