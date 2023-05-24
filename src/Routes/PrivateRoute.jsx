import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Shared/Loader/Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{ from: location}} replace></Navigate>
}

export default PrivateRoute;