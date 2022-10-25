import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Flex, H1, P1, WrapperContainer } from "../../Styling/GlobalStyles";
import {
  CoridorContainer,
  InfraCard,
  InfraContainer,
  InfraContainerLeft,
  InfraContainerRight,
  InfraContainerSecond,
  InfraContainerSecondLeft,
  InfraContainerSecondRight,
  JkCardConainer,
  JkCardFirst,
  JkCardPicture,
  JkCardSecond,
  JokerKopContainer,
  MaintText,
  NavBarTitle,
  NavContainer,
} from "./JokerKop.styled";
import Image1 from "../../assets/images/kamioni/tegljac/tegljac.png";
import Image2 from "../../assets/images/kamioni/tegljac/tegljac2.png";
import Image3 from "../../assets/images/kamioni/tegljac/tegljac3.png";
import Image4 from "../../assets/images/kamioni/tegljac/tegljac4.png";
import Image5 from "../../assets/images/kamioni/kiper/kiper1.png";
import Image6 from "../../assets/images/kamioni/kiper/kiper2.png";
import Image7 from "../../assets/images/kamioni/kiper/kiper3.png";
import Image8 from "../../assets/images/kamioni/kiper/kiper4.png";
import { motion } from "framer-motion";
import Moravski1 from "../../assets/images/moravski.png";
import Moravski2 from "../../assets/images/moravskii.png";
import Koridor1 from "../../assets/images/nispristinaa.png";
import Koridor2 from "../../assets/images/nispristina.png";
import { Lineleftright } from "../../assets/icon/lineleftright";

export const JokerKop = () => {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, transform: "translateY(-10px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      exit={{ opacity: 0, transform: "translateY(-10px)" }}
    >
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
              Joker Kop 037 je gradjevinska firma koja je osnovana marta 2021.
              godine. Joker Kop se prvenstveno bavi pripremom gradilista. Vrsimo
              prevoz razlicitih vrsta materijala na gradilista. Raspolazemo sa
              40 tegljaca koji sluze za prevoz razlicitih vrsta materijala:
              kamena, asfaltne mase, frakcija... Takodje, raspolazemo sa 80
              kipera cetvoroosovinaca koji sluze za prevoz zemlje, kamena,
              sljunka.... Neke od kompanija sa kojima smo saradjivali su: Uluova
              Turska, Atak Insaat Turska, Ageb Kosovo, Bechtel Enka USA,
              Krusevac Put Srbija... Takodje, saradjujemo sa srpskim firmama iz
              Krusevca, Nisa, Pirota, Beograda, Novog Pazara...{" "}
            </p>
          </MaintText>

          <Flex center gap="2rem">
            <Lineleftright />
            <H1 orange>Kiperi </H1>
            <Lineleftright />
          </Flex>
          <JkCardConainer>
            <JkCardFirst>
              <JkCardPicture>
                <img src={Image8} alt="" />
              </JkCardPicture>
              <JkCardPicture>
                <img src={Image6} alt="" />
              </JkCardPicture>
            </JkCardFirst>
            <JkCardSecond>
              <JkCardPicture>
                <img src={Image7} alt="" />
              </JkCardPicture>
              <JkCardPicture>
                <img src={Image5} alt="" />
              </JkCardPicture>
            </JkCardSecond>
          </JkCardConainer>




          <Flex center gap="2rem">
            <Lineleftright />
            <H1 orange>Tegljaci </H1>
            <Lineleftright />
          </Flex>
          <JkCardConainer>
            <JkCardFirst>
              <JkCardPicture>
                <img src={Image4} alt="" />
              </JkCardPicture>
              <JkCardPicture>
                <img src={Image2} alt="" />
              </JkCardPicture>
            </JkCardFirst>
            <JkCardSecond>
              <JkCardPicture>
                <img src={Image3} alt="" />
              </JkCardPicture>
              <JkCardPicture>
                <img src={Image1} alt="" />
              </JkCardPicture>
            </JkCardSecond>
          </JkCardConainer>

          <CoridorContainer>
            <InfraContainer>
              <InfraContainerLeft>
                <P1 center>
                  Početkom decembra počela je izgradnja dugo najavljivanog
                  auto-puta mira, od Niša do Merdara. <b>Joker Kop</b> je
                  takodje deo tog projekt.
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
          </CoridorContainer>
        </JokerKopContainer>
        <Footer />
      </WrapperContainer>
    </motion.div>
  );
};
