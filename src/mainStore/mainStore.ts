import { configureStore } from '@reduxjs/toolkit';
import userStore from './user/userStore';
import calendarStore from './calendar/calendarStore';


const mainStore = configureStore({
    reducer: {
        user: userStore.reducer,
        calendar: calendarStore.reducer
    }
});

export default mainStore;