import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const authSlice = createSlice({
  name: "auth",
  initialState: {
   
  },
  reducers: {
    logout(state, action) {
      cookies.remove('token', { path: "/" });
      cookies.remove("image", { path: "/" });
      cookies.remove("name", { path: "/" });
      cookies.remove("_id", { path: "/" });
      console.log("Logout action called, cookies removed");
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
