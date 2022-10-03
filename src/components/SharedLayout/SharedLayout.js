import React from "react";
import { Outlet } from "react-router-dom";
import { SharedLayoutWrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <SharedLayoutWrapper>
      <Outlet />
    </SharedLayoutWrapper>
  );
};
