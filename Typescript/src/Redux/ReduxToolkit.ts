import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: UserData[];
}

const initialState: UserState = {
  userData: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserData[]>) => {
      state.userData = action.payload;
    },
    addReduxdata: (state, action: PayloadAction<UserData>) => {
      state.userData.push(action.payload);
    },
    updateReduxdata: (state, action: PayloadAction<UserData>) => {
      const newData = action.payload;
      const { id, ...rest } = newData; // Destructure id from newData
      const index = state.userData.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.userData[index] = { ...state.userData[index], ...rest }; // Spread the rest of the newData into the existing user object
      }
    },
    deleteReduxdata: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.userData = state.userData.filter((user) => user.id !== id);
    },
  },
});

export const {
  setData,
  addReduxdata,
  updateReduxdata,
  deleteReduxdata,
} = userSlice.actions;

export default userSlice.reducer;