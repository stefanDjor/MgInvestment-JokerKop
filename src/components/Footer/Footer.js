import React from "react";
import { Flex, H1, P1, P2 } from "../../Styling/GlobalStyles";
import {
  FooterConatiner,
  FooterDown,
  FooterLeft,
  FooterRight,
} from "./Footer.styled";
import { World } from "../../assets/icon/world";
import { Phone } from "../../assets/icon/phone";
import { MapPin } from "../../assets/icon/mapPin";
import { JokerLogoWhite } from "../../assets/icon/jokerlogowhite";
import { MglogoWhite } from "../../assets/icon/mglogowhite";
import { CopyRight } from "../Copyright/CopyRight";

export const Footer = () => {
  return (
    <>
      <FooterConatiner>
        <FooterDown>
          <FooterLeft>
            <H1 orange bold>
              MG Investment
            </H1>
            <Flex column gap="3rem">
              <Flex column gap="1rem">
                <Flex center gap="1rem">
                  <World />
                  <P1 white> mginvestment973@gmail.com</P1>
                </Flex>
                <Flex center gap="1rem">
                  <Phone />
                  <P1 white> +38165/99-999-15 </P1>
                </Flex>
                <Flex center gap="1rem">
                  <MapPin />
                  <P1 white> Mirka Tomića 1/10 </P1>
                </Flex>
              </Flex>
              <Flex justcenter>
                <MglogoWhite />
              </Flex>
            </Flex>
          </FooterLeft>
          <FooterRight>
            <H1 orange bold>
              Joker Kop
            </H1>
            <Flex column gap="1rem">
              <Flex column gap="1rem">
                <Flex center gap="1rem">
                  <World />
                  <P1 white>jokerkop037@gmail.com</P1>
                </Flex>
                <Flex center gap="1rem">
                  <Phone />
                  <P1 white> +38165/99-999-15 </P1>
                </Flex>
                <Flex center gap="1rem">
                  <MapPin />
                  <P1 white> Trg Kosturnica 58 </P1>
                </Flex>
              </Flex>
              <Flex justcenter>
                <JokerLogoWhite />
              </Flex>
            </Flex>
          </FooterRight>
        </FooterDown>
      </FooterConatiner>
      <CopyRight />
    </>
  );
};
