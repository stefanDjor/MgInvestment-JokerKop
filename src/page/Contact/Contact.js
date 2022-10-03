import React from "react";
import { MapPin } from "../../assets/icon/mapPin";
import { Phone } from "../../assets/icon/phone";
import { World } from "../../assets/icon/world";
import { Footer } from "../../components/Footer/Footer";
import { BasicMap } from "../../components/MapFlet/basic";
import { NavBar } from "../../components/NavBar/NavBar";
import { Flex, H1, P1, P2, WrapperContainer } from "../../Styling/GlobalStyles";
import {
  ContactContainer,
  FooterCard,
  FooterDown,
  FooterLeft,
  FooterRight,
  FooterRightCards,
  NavBarTitle,
  NavContainer,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <>
      <WrapperContainer>
        <NavContainer>
          <NavBar />
          <NavBarTitle>
            <p>Kontakt</p>
          </NavBarTitle>
        </NavContainer>
        <ContactContainer>
          <FooterDown>
            <FooterLeft>
              <H1 bold orange>
                MG Investment
              </H1>
              <FooterRightCards>
                <FooterCard>
                  <World />
                  <P1> mginvestment973@gmail.com</P1>
                </FooterCard>
                <FooterCard>
                  <Phone />
                  <P1> +38165/99-999-15 </P1>
                </FooterCard>
                <FooterCard>
                  <MapPin />
                  <P1> Mirka Tomića 1/10 </P1>
                </FooterCard>
              </FooterRightCards>
            </FooterLeft>
            <FooterRight>
              <H1 bold orange>
                Joker Kop
              </H1>
              <FooterRightCards>
                <FooterCard>
                  <World />
                  <P1>jokerkop037@gmail.com</P1>
                </FooterCard>
                <FooterCard>
                  <Phone />
                  <P1> +38165/99-999-15 </P1>
                </FooterCard>
                <FooterCard>
                  <MapPin />
                  <P1> Mirka Tomića 1/10 </P1>
                </FooterCard>
              </FooterRightCards>
            </FooterRight>
          </FooterDown>
        </ContactContainer>
        <BasicMap />
        <Footer />
      </WrapperContainer>
    </>
  );
};
