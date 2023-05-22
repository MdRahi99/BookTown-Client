import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

const Login = () => {
    const {signInWithGoogle} = useContext(AuthContext);

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
            <button className='flex items-center gap-2 shadow-md border-b-2 border-cyan-400 hover:border-r-2 hover:border-cyan-400 p-2' onClick={handleGoogleLogin}>
                <span className='text-2xl'><FcGoogle></FcGoogle></span>
                <h3 className='text-md font-roboto uppercase'>Sign In With Google</h3> 
            </button>
        </div>
    );
};

export default Login;