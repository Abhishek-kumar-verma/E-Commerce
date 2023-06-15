import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(intialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSucess : (state,action) =>{
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFail : (state,action) =>{
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  clearError :(state)=>{
    state.error = null;
  }
});
