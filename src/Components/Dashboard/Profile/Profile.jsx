import React from 'react';
import UserProfile from './UserProfile';
import AdminProfile from './AdminProfile';
import useAdmin from '../../../Hooks/useAdmin';

const Profile = () => {

    const [isAdmin] = useAdmin();

    return (
        <div>
            {
                isAdmin ?
                    <AdminProfile />
                    :
                    <UserProfile />
            }
        </div>
    );
};

export default Profile;