import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/logo.png'


export default function Footer() {
  return (
    <div className='py-20'>
      <footer className=" text-white bg-slate-400">
        <div className="container px-5 py-24 mx-auto flex items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

          <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
            <img
              src={logo}
              alt=""
              className="w-24" />
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">MENU</h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Features</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">COMPANY</h2>
              <ul className="list-none mb-10">
                <li className="mt-1">About Us</li>
                <li className="mt-1">Privacy Policy</li>
                <li className="mt-1">Terms & Conditions</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">CONTACT</h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact Sales</li>
                <li className="mt-1">+1236547966</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">254669763</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">TECH SUPPORT</h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact Support</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">Activate</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-gray-300 text-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              © 2025 DigiKart — <span>@copyright</span>
            </p>
            <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <span><FaFacebook size={30}/></span><span> <FaInstagram size={30}/> </span><span><FaXTwitter size={30}/></span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
