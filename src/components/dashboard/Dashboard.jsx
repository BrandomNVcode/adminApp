import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../redux/features/auth/authSlice';
import Footer from '../layouts/Footer/Footer';
import NavBar from '../layouts/NavBar/NavBar';



const Dashboard = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(authLogout());
  }



  return (
    <>
      <NavBar username={user.name} image={user.profile_photo}/>
      <h1>DASHBOARD</h1>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard