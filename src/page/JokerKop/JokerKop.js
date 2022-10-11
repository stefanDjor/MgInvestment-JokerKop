import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { H1, P1, WrapperContainer } from "../../Styling/GlobalStyles";
import {
  CoridorContainer,
  InfraCard,
  InfraContainer,
  InfraContainerLeft,
  InfraContainerRight,
  InfraContainerSecond,
  InfraContainerSecondLeft,
  InfraContainerSecondRight,
  JokerKopContainer,
  MaintText,
  NavBarTitle,
  NavContainer,
} from "./JokerKop.styled";
import Kamenolom1 from "../../assets/images/kamenolomlesje.png";
import Kamenolom2 from "../../assets/images/kamenolom.png";
import Moravski1 from "../../assets/images/moravski.png";
import Moravski2 from "../../assets/images/moravskii.png";
import Koridor1 from "../../assets/images/nispristinaa.png";
import Koridor2 from "../../assets/images/nispristina.png";



export const JokerKop = () => {
  return (
    <>
      <WrapperContainer>
        <NavContainer>
          <NavBar />
          <NavBarTitle>
            <p>JOKER KOP 037</p>
          </NavBarTitle>
        </NavContainer>
        <JokerKopContainer>
        <MaintText>
            <H1 orange>
              GRADJEVINSKA FIRMA <br />- JOKER KOP -
            </H1>
            <p>
            Joker Kop 037 je gradjevinska firma koja je osnovana marta 2021. godine. Joker Kop se prvenstveno bavi pripremom gradilista. Vrsimo prevoz razlicitih vrsta materijala na gradilista. Raspolazemo sa preko 30 tegljaca koji trenutno rade na projektu Lesje-Cicevac za potrebe Moravskog koridora. Takodje, raspolazemo sa preko 100 kipera cetvoroosovinaca koji rade u Kraljevu, Krusevcu i Trsteniku za potrebe Moravskog koridora, kao i u Nisu za potrebe auto puta Nis-Merdare. Neke od kompanija sa kojima smo saradjivali su: Uluova Turska, Atak Insaat Turska, Ageb Kosovo, Bechtel Enka USA, Krusevac Put Srbija... Takodje, saradjujemo sa srpskim firmama iz Krusevca, Nisa, Pirota, Beograda, Novog Pazara...
            </p>
          </MaintText>
        </JokerKopContainer>
        <CoridorContainer>
        <InfraContainer>
            <InfraContainerLeft>
              <P1 center>
              Početkom decembra počela je izgradnja dugo najavljivanog auto-puta mira, od Niša do Merdara.  <b>Joker Kop</b> je takodje deo tog projekt.
              </P1>
            </InfraContainerLeft>
            <InfraContainerRight>
              <InfraCard>
                <img src={Koridor1} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Koridor2} alt="" />
              </InfraCard>
            </InfraContainerRight>
          </InfraContainer>

          <InfraContainerSecond>
            <InfraContainerSecondLeft>
              <InfraCard>
                <img src={Moravski1} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Moravski2} alt="" />
              </InfraCard>
            </InfraContainerSecondLeft>
            <InfraContainerSecondRight>
              <P1 center>
                Pored prevoza materijala <b>Joker Kop</b> je angažovan i na
                izradi Moravskog koridora.
              </P1>
            </InfraContainerSecondRight>
          </InfraContainerSecond>
          
          {/* <InfraContainer>
            <InfraContainerLeft>
              <P1 center>
                <b>Joker Kop</b> izvlaci kamen iz kamenoloma Lesje. 
              </P1>
            </InfraContainerLeft>
            <InfraContainerRight>
              <InfraCard>
                <img src={Kamenolom2} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Kamenolom1} alt="" />
              </InfraCard>
            </InfraContainerRight>
          </InfraContainer> */}
        </CoridorContainer>
        <Footer />
      </WrapperContainer>
    </>
  );
};
