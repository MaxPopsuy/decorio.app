import React from "react";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { alert } from "@pnotify/core";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@utils/PrivateRoute";
import { PublicRoute } from "@utils/PublicRoute";
import { routes } from "@config/router";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ Component, isPrivate, isPublicOnly, ...route }) => (
          <Route
            {...route}
            element={
              isPrivate ? (
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              ) : (
                <PublicRoute isPublicOnly={isPublicOnly}>
                  <Component />
                </PublicRoute>
              )
            }
          />
        ))}
      </Routes>
      <Footer />
      {/* <h1
        onClick={() => {
          alert("Happy hacking! :)");
        }}
      >
        Happy hacking ! :)
      </h1> */}
    </>
  );
};

export default App;
