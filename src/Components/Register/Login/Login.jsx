import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    };

    return (
        <div>
            <form className='bg-slate-100 lg:w-1/2 mx-4 border-l-4 border-dashed border-slate-500 lg:mx-auto p-10 my-10'>
                <h1 className='font-wallPoet text-3xl w-full lg:w-3/4 mx-auto shadow-2xl shadow-slate-500 mb-16 border-x-4 border-slate-500 p-4 text-center uppercase'>Sign In</h1>
                <div className='flex flex-col items-center gap-6'>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Email:</h3>
                        <input type="email" placeholder="Enter Your Email" className="input input-md font-wallPoet" />
                    </div>
                    <div className='flex items-center shadow-md shadow-slate-500 justify-between gap-3 border-t-2 border-slate-500 text-black p-3 w-96 mx-2 lg:mx-auto'>
                        <h3 className='text-xl font-wallPoet'>Password:</h3>
                        <input type="password" placeholder="Enter Your Password" className="input input-md font-wallPoet" />
                    </div>

                    <div>
                        <button className='shadow-lg px-16 py-2 font-wallPoet text-xl border-x-2 border-slate-500 hover:bg-black hover:text-white'>Log In</button>
                    </div>

                    <div className="divider font-trainOne animate-bounce">OR</div>

                    <div>
                        <button className='flex items-center gap-2 shadow-md hover:bg-black hover:text-white border-b-2 border-cyan-400 p-2' onClick={handleGoogleLogin}>
                            <span className='text-2xl'><FcGoogle></FcGoogle></span>
                            <h3 className='text-md font-roboto uppercase'>Sign In With Google</h3>
                        </button>
                    </div>

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