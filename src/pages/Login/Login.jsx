import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';

function Login() {

    const navigateHome= useNavigate();

    const [userSignUp, setUserSignUp] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
        console.log(userSignUp);
    }



const handleSubmit = (e) => {
    e.preventDefault();

    if (!userSignUp.email || !userSignUp.password) {
        return toast.error("All fields are required");
    } else {
        signInWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
            .then(async (res) => {
                navigateHome("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }
};





    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
                <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                    <FaUser size={80} className="text-indigo-500 mb-4" />
                    <h2 className="text-gray-900 text-2xl font-bold mb-6">
                        Login
                    </h2>
                    <div className="w-full mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={userSignUp.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            password
                        </label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={userSignUp.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    </div>
                    <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition" onClick={handleSubmit}>
                        login
                    </button>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        Don't have an account?
                        <Link to="/Signup">
                            <a className="text-indigo-500 hover:underline">
                                Sign Up
                            </a>
                        </Link>
                    </p>
                </div>
            </div>


        </>
    )
}

export default Login
