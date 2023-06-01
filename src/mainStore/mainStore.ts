import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user/userStore";



const mainStore = configureStore({
    reducer: {
        user: userStore.reducer
    }
});

export default mainStore;