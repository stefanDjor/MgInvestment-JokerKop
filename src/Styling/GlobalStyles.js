import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export const DisableSelection = ` 
-webkit-touch-callout: none !important;
-webkit-user-select: none !important;
-khtml-user-select: none !important; 
-moz-user-select: none !important;
-ms-user-select: none !important; 
user-select: none !important; 
`;

export const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
export const theme = {
  colorWhite: "#ffffff",
  colorOrange: "#ff9900",
  colorOrangeHover: "#ea8e03",
  colorGray: "#464255",
  colorLightGray: "#c3c0cc",
  colorGrayHover: "#696675",
  colorPink: "#FF5B5B",
  shadowMedium: "0px 0px 30px rgba(0, 0, 0, 0.1)",
  greenChart: "#00A368",
  grayChart: "#F5F5F5",
  brownChart: "#B46F33",
  blueChart: "#30B6D1",
  redChart: "#FF0000",
  borderInputActive: "1px solid #efefef",
  shadowInputActive: "0px 0px 30px rgba(0, 0, 0, 0.1)",
  borderTabInactive: "1px solid #464255",
  lightBlue: " #00F0FF",
};

export const GlobalFonts = styled.div`
  font-weight: 900;
  font-size: 4.5rem;
  color: ${(props) => props.theme.colorGray};
  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.pointer && `cursor: ${props.pointer};`}
  ${(props) => props.center && "text-align: center;"}
  ${(props) => props.flex && "display: flex;"}
  ${(props) => props.inline && "display: inline;"}
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt}rem;
  margin-bottom: ${(props) => props.mb}rem;
  margin-left: ${(props) => props.ml}rem;
  margin-right: ${(props) => props.mr}rem;

  max-width: ${(props) => props.maxWidth};

  @media (max-width: 800px) {
    margin: ${(props) => props.mSM};
    margin-top: ${(props) => props.mtSM}rem;
    margin-bottom: ${(props) => props.mbSM}rem;
    margin-left: ${(props) => props.mlSM}rem;
    margin-right: ${(props) => props.mrSM}rem;
    max-width: ${(props) => props.maxWidthSM};
  }
`;
export const BigPageTitle = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.colorOrange};
  position: relative;
  hr {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0.3;
    height: 0.1px;
  }
`;

export const H1 = styled(GlobalFonts)`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: ${(props) => (props.orange ? "orange" : "")};
  color: ${(props) => (props.white ? "white" : "")};

  button {
    margin-top: 0.3125rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.25rem;
  text-transform: capitalize;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.25rem;
  }
  @media (max-width: 368px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
export const H2 = styled(GlobalFonts)`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colorGray};
`;
export const P1 = styled(GlobalFonts)`
  font-weight: 400;
  max-width: 800px;
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colorGray};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  color: ${(props) => (props.orange ? "orange" : "")};
  color: ${(props) => (props.gray ? "#B4B9C5" : "")};
  color: ${(props) => (props.orange ? "orange" : "")};
  color: ${(props) => (props.white ? "white" : "")};
  text-align: ${(props) => (props.center ? "center" : "")};
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 368px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
export const P2 = styled(GlobalFonts)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.9rem;
  color: ${(props) => props.theme.colorGray};
  color: ${(props) => (props.red ? "red" : "")};
  color: ${(props) => (props.blue ? "blue" : "")};
  color: ${(props) => (props.green ? "green" : "")};
  color: ${(props) => (props.orange ? "orange" : "")};
  color: ${(props) => (props.white ? "white" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  @media (max-width: 640px) {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  @media (max-width: 368px) {
    font-size: 0.7rem;
    line-height: 1.5rem;
  }
`;
export const P3 = styled(GlobalFonts)`
  font-weight: 400;
  font-size: 0.68rem;
  line-height: 0.84rem;
  color: ${(props) => props.theme.colorGray};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
`;
export const Flex = styled.div`
  display: flex;
  ${(props) => props.between && "justify-content: space-between"};
  ${(props) => props.justcenter && "justify-content: center"};
  ${(props) => props.end && "justify-content: end"};
  ${(props) => props.start && "justify-content: start"};
  ${(props) => props.center && "align-items:  center"};
  ${(props) => props.alend && "align-items:  end"};
  ${(props) => props.column && "flex-direction: column"};
  ${(props) => props.gap && `gap:${props.gap}`};
  ${(props) => props.relative && "position:relative"};
  ${(props) => (props.m ? "margin:" + props.m : "")};
  padding: ${(props) => props.p};
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.position && "position:" + props.position};
  ${(props) => props.pointer && "cursor:pointer"};
  ${(props) => props.maxHeight && "max-height:" + props.maxHeight};
  ${(props) => props.minHeight && "min-height:" + props.minHeight};
  ${(props) => props.height && "height:" + props.height};

  h1 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 100%;
    color: ${(props) => props.theme.colorGray};
  }
  span {
    font-size: 0.813rem;
    font-weight: bold;
  }
`;
export const AnimationModal = styled.div`
  > div:nth-of-type(1) {
    animation-name: popup;
    animation-duration: 0.3s;
  }

  @keyframes popup {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export const PageFooter = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  left: calc(15rem + 2rem);
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: flex-end;
`;
