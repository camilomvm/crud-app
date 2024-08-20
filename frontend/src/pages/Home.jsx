import React, { lazy, Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AuthTokenManager from "../helpers/AuthTokenManager";
import SpinnerLoader from "../components/spinner-loader";
import { useAppContext } from "../context/useAppContext";

const LazyHomeComponent = lazy(() => import("../components/home"));

const Home = () => {
  const { state, setLoginStatus } = useAppContext();

  useEffect(() => {
    const isAuth = AuthTokenManager.get();

    if (isAuth) {
      setLoginStatus(true);
    }
  }, []);

  return (
    <>
      {state.loginStatus ? (
        <Suspense fallback={<SpinnerLoader />}>
          <LazyHomeComponent />
        </Suspense>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  );
};

export default Home;
