import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { authLogoutListener } from './features/auth/authMiddleware';
import authReducer from './features/auth/authSlice';



const listenerMiddleware = createListenerMiddleware();

// Listener Middleware
authLogoutListener(listenerMiddleware);



export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})