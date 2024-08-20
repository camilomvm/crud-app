import React, { useState, useEffect } from "react";
import AuthTokenManager from "../../helpers/AuthTokenManager";
import { useAppContext } from "../../context/useAppContext";
import getUserService from "../../services/getUserService.js";
import Navbar from "../navbar/index.jsx";
import SpinnerLoader from "../spinner-loader/index.jsx";
import "./style.css";

const Home = () => {
  const { state, setHomeUser, setLoginStatus } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = AuthTokenManager.get();
        let res = await getUserService(token);

        if (res.data) {
          setLoginStatus(true);
        }
        setHomeUser(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }


  
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
