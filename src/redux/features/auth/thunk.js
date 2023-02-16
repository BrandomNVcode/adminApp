import { loginUser } from "../../../services/userService";
import { authLogin } from "./authSlice";


export const authUserLogin = (email, password) => {
    return async (dispatch) => {
        const userAuth = await loginUser({email, password});
        if( userAuth.status != "success" ) dispatch(authLogin({}));
        localStorage.setItem('token', userAuth.token);
        localStorage.setItem('userId', userAuth.id);
        dispatch(authLogin({...userAuth}));
    }
}