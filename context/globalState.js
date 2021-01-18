import React, { useReducer, useContext } from "react";

import PostContext from "./context";
import { postReducer, ADD_POST, REMOVE_POST } from "./reducer";

export default function GlobalState({ children }) {
  const initialState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
