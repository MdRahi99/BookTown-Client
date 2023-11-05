import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiDashboardFill } from '@react-icons/all-files/ri/RiDashboardFill';
import {AiOutlineUsergroupAdd} from '@react-icons/all-files/ai/AiOutlineUsergroupAdd';
import {ImBooks} from '@react-icons/all-files/im/ImBooks';
import useAuth from '../../../Hooks/useAuth';

const AdminProfile = () => {
    const { user, logOut } = useAuth();

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
                <Link to='/dashboard' title='Home' className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <RiDashboardFill></RiDashboardFill>
                    <h3 className='hidden lg:block'>Overview</h3>
                </Link>
                <Link to='/dashboard/all-users' title='Users' className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <AiOutlineUsergroupAdd />
                    <h3 className='hidden lg:block'>All Users</h3>
                </Link>
                <Link to='/dashboard/add-book' title='Add Book' className='flex items-center justify-start gap-2 px-4 py-1 rounded-md border-y-2 border-white hover:bg-white hover:text-black'>
                    <ImBooks />
                    <h3 className='hidden lg:block'>Add Book</h3>
                </Link>
            </div>

            <div className='bg-white text-black w-80 text-center mt-12 text-md rounded-2xl hover:bg-black hover:text-white hover:border-x-2 hover:border-white mx-auto font-wallPoet p-1'>
                <Link to='/'>Back to Home</Link>
            </div>
            <div className="divider w-1/2 mx-auto text-white">OR</div>
            <div className='text-white font-wallPoet p-4'>
                <button onClick={handleLogOut} className='bg-white text-black w-full text-lg rounded-2xl hover:bg-black hover:text-white hover:border-x-2 hover:boder-white mx-auto'>Log Out</button>
            </div>
        </div>
    );
};

export default AdminProfile;