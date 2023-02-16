import { authLogout } from "./authSlice";



export const authLogoutListener = (listenerMiddleware) => {
    listenerMiddleware.startListening({
        actionCreator: authLogout,
        effect: async (action, listenerApi) => {
    
            localStorage.clear();
      
        }
    })
}



