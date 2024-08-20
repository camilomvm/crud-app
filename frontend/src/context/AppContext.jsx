import React, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

export const appInitialState = {
  user: {},
  loginStatus: false,
  homeUser: {},
  insertData: false,
  editEmployee: null,
  editRequest:null
};

export const appContext = createContext({});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState);

  const setUser = (user) => {
    dispatch({ type: "setUser", payload: user });
  };

  const setHomeUser = (user) => {
    dispatch({ type: "homeUser", payload: user });
  };

  const setInsertData = (status) => {
    dispatch({ type: "insertData", payload: status });
  };

  const setLoginStatus = (status) => {
    dispatch({ type: "loginStatus", payload: status });
  };

  const setEditEmployee = (employee) => {
    dispatch({ type: "editEmployee", payload: employee });
  };

  const setEditRequest = (request) => {
    dispatch({ type: "editRequest", payload: request });
  };

  const data = {
    state,
    setHomeUser,
    setUser,
    setLoginStatus,
    setInsertData,
    setEditEmployee,
    setEditRequest
  };

  return <appContext.Provider value={data}>{children}</appContext.Provider>;
};

export default AppProvider;
