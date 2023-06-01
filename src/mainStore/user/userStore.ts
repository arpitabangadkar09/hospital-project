import {createSlice } from  "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'userStore',
    initialState: {
        userData: {}
    },

    reducers: {
             saveUser: (state, action) => {
                state.userData = action.payload.userData
             }
    }
});

// export const { } = userStote.action

export default userStore;