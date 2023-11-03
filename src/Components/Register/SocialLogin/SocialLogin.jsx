import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SocialLogin = () => {

    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email }
                fetch('https://book-town-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(error => console.error(error))
    };

    return (
        <div>
            <button className='flex items-center gap-2 shadow-md hover:bg-black hover:text-white border-b-2 border-cyan-400 p-2' onClick={handleGoogleLogin}>
                <span className='text-2xl'><FcGoogle></FcGoogle></span>
                <h3 className='text-md font-roboto uppercase'>Sign In With Google</h3>
            </button>
        </div>
    );
};

export default SocialLogin;