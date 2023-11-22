import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Title from '../../../Hooks/Title';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useImageUpload from '../../../Hooks/useImageUpload';
import { useRef } from 'react';

const Register = () => {
    Title('Register');

    const { createUser, updateUser, logOut, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const imageInputRef = useRef(null);
    const { uploadImage } = useImageUpload();
    const navigate = useNavigate();

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageFile = imageInputRef.current?.files[0];

        try {
            const photoURL = imageFile ? await uploadImage(imageFile) : null;

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
        }
        catch (error) {
            console.error('Image upload failed:', error);
        }
    };

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>

                        <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
                            <div>
                                <input
                                    className="p-2 mt-8 rounded-xl border w-full"
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    className="p-2 mt-4 rounded-xl border w-full"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                                <input name="photoURL" type="file" ref={imageInputRef} className="p-2 mt-4 rounded-xl border w-full" />
                            </div>
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                                Register
                            </button>
                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>

                        <p className="text-xs mt-4 text-[#002D74]">
                            If you are already a member, easily log in
                        </p>

                        <div className='my-6'>
                            <SocialLogin />
                        </div>
                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>Have an account?</p>
                            <Link
                                to="/login"
                                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl" src='https://i.ibb.co/30Hh28z/register.jpg' alt="login" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;