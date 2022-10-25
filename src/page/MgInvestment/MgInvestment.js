import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { H1, WrapperContainer, Flex, P1 } from "../../Styling/GlobalStyles";
import {
  DownText,
  ExcavatorsCard,
  ExcavatorsCardImg,
  ExcavatorsCardsPlace,
  ExcavatorsCardText,
  ExcavatorsContainer,
  ExcavatorsContainerTitle,
  InfraCard,
  InfraContainer,
  InfraContainerLeft,
  InfraContainerRight,
  InfraContainerSecond,
  InfraContainerSecondLeft,
  InfraContainerSecondRight,
  MaintText,
  MgCardConainer,
  MgCardFirst,
  MgCardPicture,
  MgCardPictureSecond,
  MgCardSecond,
  MgInvestmentContainer,
  NavBarTitle,
  NavContainer,
  TopTextContainer,
} from "./MgInvestment.styled";
import Image1 from "../../assets/images/Image1.png";
import Image2 from "../../assets/images/Image2.png";
import Bager1 from "../../assets/images/bager1.png";
import Bager2 from "../../assets/images/bager2.png";
import Bager3 from "../../assets/images/bager3.png";
import Bager4 from "../../assets/images/bager4.png";
import Bager5 from "../../assets/images/bager5.png";
import Bager6 from "../../assets/images/bager6.png";
import Bager7 from "../../assets/images/bager7.png";
import Bager8 from "../../assets/images/bager8.png";
import Bager9 from "../../assets/images/bager9.png";
import Bager10 from "../../assets/images/bager10.png";
import Infra1 from "../../assets/images/infra1.png";
import Infra2 from "../../assets/images/infra2.png";
import Coridor1 from "../../assets/images/coridor1.png";
import Coridor2 from "../../assets/images/coridor2.png";
import Gabon1 from "../../assets/images/gabon1.png";
import Gabon2 from "../../assets/images/gabon2.png";
import Vozilo1 from "../../assets/images/Vozilo1.png";
import Vozilo2 from "../../assets/images/Vozilo2.png";
import { Lineleftright } from "../../assets/icon/lineleftright";
import { Footer } from "../../components/Footer/Footer";
import { motion } from 'framer-motion';
export const MgInvestment = () => {
  return (
    <motion.div
    style={{ width: '100%' }}
    initial={{ opacity: 0, transform: 'translateY(-10px)' }}
    animate={{ opacity: 1, transform: 'translateY(0px)' }}
    exit={{ opacity: 0, transform: 'translateY(-10px)' }}
  >
      <WrapperContainer>
        <NavContainer>
          <NavBar />
          <NavBarTitle>
            <p>MG INVESTMENT 2020 DOO</p>
          </NavBarTitle>
        </NavContainer>
        <MgInvestmentContainer>
          <MaintText>
            <H1 orange>
              GRADJEVINSKA FIRMA <br />- MG INVESTMENT -
            </H1>
            <P1 center>
              Firma osnovana februara 2020 sa namerom da se bavi nisko i
              visokogradnjom i to je bila osnovna delatnost do proleća 2021 kada
              dolazi do potpisivanja dugoročnog ugovora sa turskim partnerima a
              vezano za prevoz građevinskog materijala za potrebe gradilišta
              MORAVSKI KORIDOR. Od osnivanja do danas MG INVESTMENT je postala
              respektibilna firma u sektoru građevinarstva i transporta tereta u
              drumskom saobraćaju. Za dve i po godine postojanja uspeli smo da
              završimo izgradnju jedne zgrade i da drugu stavimo „pod krov“.
            </P1>
          </MaintText>
          <MgCardConainer>
            <MgCardFirst>
              <MgCardPicture>
                <img src={Image1} alt="" />
              </MgCardPicture>
              <MgCardPicture>
                <img src={Image2} alt="" />
              </MgCardPicture>
            </MgCardFirst>
          </MgCardConainer>

          <TopTextContainer>
            <Flex center gap="2rem">
              <Lineleftright />
              <H1 orange>KORIDOR </H1>
              <Lineleftright />
            </Flex>

            <P1 center>
              <b>MG INVESTMENT</b> počinje saradnju sa turskim partnerima na
              izgradnji MORAVSKOG KORIDORA i u tu svrhu kupuje kamione za
              transport materijala potrebnog za izgradnju korodora. A od proleća
              2022 je uključen i u izgradnju koridora Niš – Merdare – Priština.
              Pored prevoza materijala MG INVESTMENT je angažovan i na izradi
              gabiona za potrebe Moravskog koridora.
            </P1>

            <MgCardConainer>
              <MgCardSecond>
                <MgCardPictureSecond>
                  <img src={Coridor1} alt="" />
                </MgCardPictureSecond>
                <MgCardPictureSecond>
                  <img src={Coridor2} alt="" />
                </MgCardPictureSecond>
              </MgCardSecond>
            </MgCardConainer>
          </TopTextContainer>

          <ExcavatorsContainer>
            <ExcavatorsContainerTitle>
              <Lineleftright />
              <H1 orange>GRAĐEVINSKA MEHANIZACIJA MG INVESTMENT </H1>
              <Lineleftright />
            </ExcavatorsContainerTitle>
            <ExcavatorsCardsPlace>
              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager1} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">BAGER NEW HOLLAND E305</p>
                  <p>-Snaga: 148 kw </p>
                  <p>-Težina: 31600 kg</p>
                  <p>-5900cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager2} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">BAGER KOMATSU MODEL PW 180-7K180-7K</p>
                  <p>-Snaga: 107 kw </p>
                  <p>-Težina: 16190 kgg</p>
                  <p>-5900 cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager3} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">BAGER JCB model: 220 NC</p>
                  <p>-Snaga: 102 kw </p>
                  <p>-Težina: 22800 kg</p>
                  <p>-6494 cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager4} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">BULDOZER NEW HOLLAND D 180</p>
                  <p>-Snaga: 139 kw </p>
                  <p>-Težina: 22500 kg</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager5} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">BAGER NEW HOLLAND E305</p>
                  <p>-Snaga 148 kw </p>
                  <p>-Težina 31600 kg</p>
                  <p>-5900cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager6} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">VALJAK HYUNDAI HR120C-9</p>
                  <p>-Snaga: 96 kw </p>
                  <p>-Težina: 12000 kg</p>
                  <p>-širina valjka: 2,1m</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager7} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">UTOVARIVAČ ULT HANOMAG 55D</p>
                  <p>-Snaga: 118 kw </p>
                  <p>-Težina: 13400 kg</p>
                  <p>-5900cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager8} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">AUTO KRAN P&H model HS 35</p>
                  <p>-Snaga: 177 kw </p>
                  <p>-Težina: 24000 kg</p>
                  <p>-9752 cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>

              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager9} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">SKIP HIDROMEK model HMK102S Alpha A4</p>
                  <p>-Snaga: 74.5 kw </p>
                  <p>-4400 cm3</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>
              <ExcavatorsCard>
                <ExcavatorsCardImg>
                  <img src={Bager10} alt="" />
                </ExcavatorsCardImg>
                <ExcavatorsCardText>
                  <p className="bold">MOBILNA SEPARACIJA POWER SCREEN 1400</p>
                </ExcavatorsCardText>
              </ExcavatorsCard>
            </ExcavatorsCardsPlace>
          </ExcavatorsContainer>
          <DownText>
            <P1 center>
              Takođe, MG INVESTMENT poseduje i jedan viljuškar marke STEINBOCK
              BOSS, traktor CASE International 4210, kao i vibro ploču VIBROMAX,
              AT35H, kao i 2 krana za potrebe visokogradnje.
            </P1>
            <Lineleftright />
          </DownText>

          <InfraContainer>
            <InfraContainerLeft>
              <P1 center>
                <b>MG INVESTMENT</b> je sa svojom mehanizacijom aktivno uključen
                u izgradnju i rehabilitaciju lokalne infrastukture na području
                Rasinskog okruga.
              </P1>
            </InfraContainerLeft>
            <InfraContainerRight>
              <InfraCard>
                <img src={Infra1} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Infra2} alt="" />
              </InfraCard>
            </InfraContainerRight>
          </InfraContainer>
          <InfraContainerSecond>
            <InfraContainerSecondLeft>
              <InfraCard>
                <img src={Gabon1} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Gabon2} alt="" />
              </InfraCard>
            </InfraContainerSecondLeft>
            <InfraContainerSecondRight>
              <P1 center>
                Pored prevoza materijala <b>MG INVESTMENT</b> je angažovan i na
                izradi gabiona za potrebe Moravskog koridora.
              </P1>
            </InfraContainerSecondRight>
          </InfraContainerSecond>
          <InfraContainer>
            <InfraContainerLeft>
              <P1 center>
                <b>MG INVESTMENT</b> u svom voznom parku uglavnom poseduje kamione
                četvoroosovince kipere i to: 12 kamiona marke Volvo i 5 kamiona
                tipa MAN Takođe posedujemo i jednu autocisternu za dostavu
                goriva kao i jedan kamion tegljač marke Renault.
              </P1>
            </InfraContainerLeft>
            <InfraContainerRight>
              <InfraCard>
                <img src={Vozilo1} alt="" />
              </InfraCard>
              <InfraCard>
                <img src={Vozilo2} alt="" />
              </InfraCard>
            </InfraContainerRight>
          </InfraContainer>
        </MgInvestmentContainer>
        <Footer />
      </WrapperContainer>
      </motion.div>
  );
};
