import { createSlice } from "@reduxjs/toolkit";
import initialUserList from "../../constants/users";

const userSlice = createSlice({
  name: "user",
  initialState: initialUserList,
  reducers: {
    addUser: (state, action) => {
      action.payload.id = state.length + 1;
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const userIndex = state.findIndex((x) => x.id === action.payload.id);
      state[userIndex] = action.payload;
      return state;
    },
    removeUser: (state, action) => {
      const index = state.findIndex((x) => x.id === action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

export const { addUser, editUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
