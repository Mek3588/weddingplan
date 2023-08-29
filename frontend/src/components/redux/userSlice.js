import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  email: "",
  firstName: "",
  image1: "",
  image2: "",
  lastName: "",
  _id: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        const { _id, firstName, lastName, email, image1, image2 } = action.payload.data;
        state._id = _id;
        state.firstName = firstName;
        state.lastName = lastName;
        state.email = email;
        state.image1 = image1;
        state.image2 = image2;
      },
      logoutRedux: (state, action) => {
        state._id = "";
        state.firstName = "";
        state.lastName = "";
        state.email = "";
        state.image1 = "";
        state.image2 = "";
      },
    },
  });

  export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
