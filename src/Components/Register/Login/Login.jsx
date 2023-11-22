import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Title from '../../../Hooks/Title';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    Title('Login');
    const { signIn, loading } = useAuth();
    const [error, setError] = useState('');

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
            .catch(error => {
                console.log(error)
                setError(error)
            })
    };

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                        <div>
                            <span>{error}</span>
                        </div>
                        <p className="text-xs mt-4 text-[#002D74]">
                            If you are already a member, easily log in
                        </p>

                        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                                Login
                            </button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <div className='my-6'>
                            <SocialLogin />
                        </div>

                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Don't have an account?</p>
                            <Link
                                to="/register"
                                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl" src='https://i.ibb.co/Kq7tbWZ/login.jpg' alt="login" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;