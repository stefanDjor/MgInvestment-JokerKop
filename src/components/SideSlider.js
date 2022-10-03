import React from "react";
import styled from "styled-components";
import { SideBarNavContnent } from "../components/SideBarContent/SideBarNavContnent";

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(28, 23, 22, 0.1);
  backdrop-filter: blur(5px);
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  z-index: 100003;
  transition: all 0.5s ease;
`;
const SidebarContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 256px;
  padding-top: 20px;
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-350px")};
  top: 0;
  bottom: 0;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  z-index: 100004;
  background-color: #eed09a;
  border-top-right-radius: 10.5px;
  border-bottom-right-radius: 10.5px;
`;
const SidebarNav = ({ open, onClose, history }) => {
  return (
    <>
      <Overlay open={open} onClick={() => onClose(false)}></Overlay>
      <SidebarContainer open={open}>
        <SideBarNavContnent onClose={onClose} />
      </SidebarContainer>
    </>
  );
};

export default SidebarNav;
