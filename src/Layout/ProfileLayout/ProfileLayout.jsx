import React from 'react';
import { Outlet } from 'react-router-dom';
import UserProfile from '../../Components/UserDashboard/UserProfile/UserProfile';

const ProfileLayout = () => {
    return (
        <div className='flex lg:flex-row flex-col gap-2 m-2 rounded-2xl bg-slate-200 p-2'>
           <UserProfile className='flex-none w-full lg:w-1/6'></UserProfile>
           <Outlet className='flex-1 w-full lg:w-5/6'></Outlet>
        </div>
    );
};

export default ProfileLayout;