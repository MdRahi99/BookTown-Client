import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Title from '../../../Hooks/Title';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Register = () => {
    Title('Register');

    const { createUser, updateUser, logOut, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const navigate = useNavigate();

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userProfile = {
                    displayName: name,
                    photoURL: photoURL
                }
                updateUser(userProfile)
                    .then(() => {
                        const saveUser = { name: user.displayName, email: user.email }
                        axiosSecure.post('/users', saveUser)
                            .then(data => {
                                if (data.data.insertedId) {
                                    form.reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    logOut()
                                        .then(() => {
                                            navigate('/login')
                                        })
                                }
                            })
                    })
            })
            .catch(error => console.log(error));
    };

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <form onSubmit={handleCreateUser} className='bg-slate-100 lg:w-1/2 mx-4 border-l-4 border-dashed border-slate-500 lg:mx-auto p-10 my-10'>
                <h1 className='font-wallPoet text-3xl w-full lg:w-3/4 mx-auto shadow-2xl shadow-slate-500 mb-16 border-x-4 border-slate-500 p-4 text-center uppercase'>Sign Up</h1>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Name:</h3>
                        <input name="name" type="text" placeholder="Enter Your Name" className="input input-md font-wallPoet" />
                    </div>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Email:</h3>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-md font-wallPoet" />
                    </div>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Photo:</h3>
                        <input name="photoURL" type="text" placeholder="Enter Your Photo URL" className="input input-md font-wallPoet" />
                    </div>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Password:</h3>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-md font-wallPoet" />
                    </div>

                    <div className='mt-4'>
                        <button className='shadow-lg px-16 py-2 font-wallPoet text-xl border-x-2 border-slate-500 hover:bg-black hover:text-white'>Sign Up</button>
                    </div>

                    <div className="divider font-trainOne animate-bounce">OR</div>

                    <SocialLogin />

                    <div className="flex gap-2 mt-6 justify-center items-center">
                        <h3>Have an Account?</h3>
                        <Link className="text-md font-bold hover:text-slate-500" to="/login">
                            Log In
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;