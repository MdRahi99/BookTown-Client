import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiDashboardFill } from '@react-icons/all-files/ri/RiDashboardFill';
import { GiBookshelf } from '@react-icons/all-files/gi/GiBookshelf';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className='bg-black rounded-2xl'>
            <div className='flex flex-col gap-2 items-center p-4 justify-center'>
                <img className='w-24 h-24 border-4 border-double border-[#f1f3f4] rounded-full' src={user?.photoURL} alt="" />
                <h3 className='text-xl text-white font-wallPoet'>{user?.displayName}</h3>
                <h3 className='text-sm text-white font-wallPoet'>{user?.email}</h3>
            </div>

            <div className='flex flex-row lg:flex-col gap-4 justify-center text-white font-wallPoet p-4'>
                <Link to='/' className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <RiDashboardFill></RiDashboardFill>
                    <Link className='hidden lg:block'>Home</Link>
                </Link>
                <Link className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <GiBookshelf></GiBookshelf>
                    <Link className='hidden lg:block'>My Books</Link>
                </Link>
                <Link to='/dashboard/sell-books' className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <GiBookshelf></GiBookshelf>
                    <Link className='hidden lg:block'>Sell Books</Link>
                </Link>
            </div>

            <div className='text-white font-wallPoet p-4'>
                <button onClick={handleLogOut} className='bg-white text-black w-full text-lg rounded-2xl mt-6 hover:bg-black hover:text-white hover:border-x-2 hover:boder-white mx-auto'>Log Out</button>
            </div>
        </div>
    );
};

export default UserProfile;