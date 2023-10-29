import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Title from '../../../Hooks/Title';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    Title('Login');
    const { signIn, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    };

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <form onSubmit={handleSignIn} className='bg-slate-100 lg:w-1/2 mx-4 border-l-4 border-dashed border-slate-500 lg:mx-auto p-10 my-10'>
                <h1 className='font-wallPoet text-3xl w-full lg:w-3/4 mx-auto shadow-2xl shadow-slate-500 mb-16 border-x-4 border-slate-500 p-4 text-center uppercase'>Sign In</h1>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Email:</h3>
                        <input name='email' type="email" placeholder="Enter Your Email" className="input input-md font-wallPoet" />
                    </div>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Password:</h3>
                        <input name='password' type="password" placeholder="Enter Your Password" className="input input-md font-wallPoet" />
                    </div>

                    <div>
                        <button className='shadow-lg px-16 py-2 font-wallPoet text-xl border-x-2 border-slate-500 hover:bg-black hover:text-white'>Log In</button>
                    </div>

                    <div className="divider font-trainOne animate-bounce">OR</div>

                    <SocialLogin />

                    <div className="flex gap-2 mt-6 justify-center items-center">
                        <h3>Have not any Account?</h3>
                        <Link className="text-md font-bold hover:text-slate-500" to="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;