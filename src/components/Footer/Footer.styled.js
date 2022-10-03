import styled from "styled-components";
export const FooterConatiner = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 2rem;
  background-color: black;
`;
export const FooterTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const FooterDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FooterLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const FooterRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
