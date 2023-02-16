import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard/Dashboard';
import { authLogin } from '../redux/features/auth/authSlice';
import { getUserData } from '../services/userService';



const AppRouter = () => {

    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);

    useEffect(() => {

        const verificarUser = async () => {
            const user = await getUserData();
            dispatch(authLogin(user.data))
            setLoad(false);
        } 

        verificarUser();
        
    }, [])


    const { id } = useSelector(state => state.auth);


    return (
        <>
            {
                load?
                <div>
                    <h1>Loading...</h1>
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path='/dashboard' element={id? <Dashboard /> : <Navigate to='/auth/login'/>}/>
                        <Route path='/auth/login' element={!id? <Login /> : <Navigate to={'/dashboard'}/>}/>
                        
                        <Route path='*' element={<Navigate to="/auth/login" />}/>
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}

export default AppRouter