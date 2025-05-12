import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdPassword } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';



function Signup() {
    const navigateLogin= useNavigate();

    const [userSignUp, setUserSignUp] = useState({ username: "", email: "", password: "" })

    const handleChange = (e) => {
        setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value })
        console.log(userSignUp);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
            return toast.error("All fields are required");
        }
    
        try {
            const res = await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password);
            const user = res.user;
            await updateProfile(user, { displayName: userSignUp.username });
            toast.success("Account created successfully!");
            navigateLogin("/login");
        } catch (err) {
            toast.error(err.message);
            console.log(err.message);
        }
    };
    


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
//             return toast.error("all fields are required")
//         }
//         else {
//             createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
//                 .then(async (res) => 
//                 const user = res.user
//                     await updateProfile(user, { displayName: userSignUp.username });
//                     navigateLogin("/login")
//                 });
//                     .catch ((err) => console.log(err.message))
// }
//     };
return (
    <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                <FaUser size={80} className="text-indigo-500 mb-4" />
                <h2 className="text-gray-900 text-2xl font-bold mb-6">Sign up</h2>

                <div className="w-full mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="username"
                        value={userSignUp.username}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        onChange={handleChange}
                    />
                </div>

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
                    Sign Up
                </button>

                <Link to="/login" className="text-indigo-500 hover:underline">
                    Already have an account? Login
                </Link>

            </div>
        </div>


    </>
)
}
export default Signup
