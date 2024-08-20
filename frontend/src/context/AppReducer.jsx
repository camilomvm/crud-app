export const AppReducer = (state,action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "loginStatus":
      return { ...state, loginStatus: action.payload };
    case "homeUser":
      return { ...state, homeUser: action.payload };
    case "insertData":
      return { ...state, insertData: action.payload };
    case "editEmployee":
      return { ...state, editEmployee: action.payload };
    case "editRequest":
      return { ...state, editRequest: action.payload };
    default:
      return state;
  }
};
