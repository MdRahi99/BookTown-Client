import React from 'react';
import UserProfile from './UserProfile';
import AdminProfile from './AdminProfile';

const Profile = () => {

    const isadmin = true;

    return (
        <div>
            {
                isadmin ?
                    <>
                        <AdminProfile />
                    </>
                    :
                    <>
                        <UserProfile />
                    </>
            }
        </div>
    );
};

export default Profile;