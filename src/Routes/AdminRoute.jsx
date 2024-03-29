import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Shared/Loader/Loader';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading && isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{ from: location}} replace></Navigate>
}

export default AdminRoute;