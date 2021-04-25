import { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: null,
};
const reduce = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "LOGIN_SUCCESS":

    default:
      break;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
