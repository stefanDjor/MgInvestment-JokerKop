import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { H1, P1, WrapperContainer } from "../../Styling/GlobalStyles";
import {
  HomeCard,
  HomeCardConainer,
  HomeCardFirst,
  HomeContainer,
  MaintText,
  NavBarTitle,
  NavContainer,
} from "./Home.styled";
import { motion } from "framer-motion";
import { Security } from "../../assets/icon/security";
import { Settings } from "../../assets/icon/settings";
import { Group } from "../../assets/icon/group";
import { Work } from "../../assets/icon/work";
import { Quality } from "../../assets/icon/quality";
import { Project } from "../../assets/icon/project";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
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
            <p>MG INVESTMENT - JOKER KOP 037</p>
          </NavBarTitle>
        </NavContainer>
        <HomeContainer>
          <MaintText>
            <H1 orange>
              GRADJEVINSKE FIRME <br />- MG INVESTMENT - i - JOKER KOP 037 -
            </H1>
            <P1>
              MG Investment i Joker Kop 037 su gradjevinske firme koje se bave
              pripremom gradilista. Vrsimo prevoz razlicitih vrsta materijala na
              gradilista. Takodje, bavimo se i visokogradnjom, iza nas je mnogo
              uspesno zavrsenih projekata. Neke od kompanija sa kojima smo
              saradjivali su: Uluova Turska, Atak Insaat Turska, Ageb Kosovo,
              Bechtel Enka USA, Krusevac Put Srbija... Takodje, saradjujemo sa
              srpskim firmama iz Krusevca, Nisa, Pirota, Beograda, Novog
              Pazara...
            </P1>
          </MaintText>
          <HomeCardConainer>
            <HomeCardFirst>
              <HomeCard>
                <Security />
                <H1 orange>Bezbednost</H1>
                <P1>
                  MG i JOKER KOP poklanjaju veliku pa??nju bezbednost pri
                  realizaciji projekata, kao gra??evinskih poslova tako i radnika{" "}
                </P1>
              </HomeCard>
              <HomeCard>
                <Quality />
                <H1 orange>KVALITET RADA</H1>
                <P1>
                  Izvr??ili smo zna??ajna ulaganja u mehanizaciju, kamione i
                  kombije, kako bi unapredili kvalitet svakog projekta
                </P1>
              </HomeCard>
              <HomeCard>
                <Project />
                <H1 orange>PROJEKTOVANJE</H1>
                <P1>
                  Zapo??ljavamo brojne stru??njake, pri ??emu dominiraju
                  gra??evinski in??enjeri, arhitekte, elektroin??enjeri i ma??inski
                  in??enjer
                </P1>
              </HomeCard>

              <HomeCard>
                <Work />
                <H1 orange>STRATEGIJA</H1>
                <P1>
                  Strategija na??e kompanije ogleda se u korektnom dogovaranju i
                  projektovanju realne strategije za izvo??enje projekata
                </P1>
              </HomeCard>
              <HomeCard>
                <Group />
                <H1 orange>KOMUNIKACIJA</H1>
                <P1>
                  Komunikacija je svedena na jednog ??oveka koji iza sebe ima
                  ??itav tim saradnika koji ispunjavaju profesionalno svoje
                  zadatke
                </P1>
              </HomeCard>
              <HomeCard>
                <Settings />
                <H1 orange>ODR??IVOST</H1>
                <P1>
                  Tokom svih godina izgra??en je krug podizvo??a??a i dobavlja??a
                  koji partnerskim pristupom, doprinose uspe??noj realizaciji
                  projekata
                </P1>
              </HomeCard>
            </HomeCardFirst>{" "}
          </HomeCardConainer>
        </HomeContainer>
        <Footer />
      </WrapperContainer>
    </motion.div>
  );
};
