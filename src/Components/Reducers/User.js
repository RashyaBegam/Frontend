import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: "",
      user_name: "",
      user_image: "",
      user_age: "",
      user_mobileNo: "",
      user_email: "",
      user_password: ""
    }
  },
  reducers: {
    getUserData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
