import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://book-town-server.vercel.app',
        // http://localhost:5000
        // https://book-town-server.vercel.app
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('BookTown-Access-Token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;