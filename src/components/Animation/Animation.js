import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../../routes/routes";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { AnimatePresence } from "framer-motion";
export const Animation = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          {routes.map((route, index) => {
            return (
              <Route
                index={route.name === "Home"}
                path={route.name === "Home" ? null : route.path}
                element={<route.Component />}
                key={index}
              />
            );
          })}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
