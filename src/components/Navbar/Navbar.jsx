import React, { useState } from 'react'
import { Link } from 'react-router'
import { IoCart } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import logo from '/src/assets/logo.png'

export default function Navbar({ cart, userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
   
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (<>
    <div>
      <header className="border-b border-gray-200  bg-white-100">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <Link to="/"><div>
            <img
              src={logo}
              alt=""
              className="w-24" />
            {/* <h3 className=" font-bold text-3xl text-black">
              Digi<span classNameName='text-red-600'>Kart</span>
            </h3> */}
          </div>
          </Link>

          <div className='hidden md:block'>
            <ul className="flex items-center text-1g justify-center font-semibold">

              <Link to="/">
                <li className="mr-5 hover: text-gray-900 cursor-pointer">Home</li>
              </Link>

              <Link to="/products">
                <li className="mr-5 hover: text-gray-900 cursor-pointer">All Products</li>
              </Link>

              <Link to="/about">
                <li className="mr-5 hover: text-gray-980 cursor-pointer">About</li>
              </Link>

              <Link to="/contact-us">
                <li className="mr-5 hover: text-gray-900 cursor-pointer">Contact Us</li>
              </Link>

            </ul>
          </div>
          {
            isOpen ? <div className="flex flex-col gap-10 text-2xl absolute top-[120px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold">
              <ul>
                <Link to="/">
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>

                <Link to="/products">
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">
                    All Products
                  </li>
                </Link>
                <Link to="/about">
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/contact-us">
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">
                    Contact Us
                  </li>
                </Link>
              </ul>

              <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer">
                <RxCross2 size={30} onClick={toggleMenu} />
              </button>
            </div> : ""
          }

          <div className="flex justify-center items-center gap-3">
            <Link to="/login">
              <button className="bg-blue-300 border-e py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">Login</button>
            </Link>
            <span>{userName}</span>
            <Link to="/cart" className="relative">
              <div className="relative">
                <IoCart size={30} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
            {isOpen ? "" : <button className='block md:hidden'>
              <RxHamburgerMenu size={30} onClick={toggleMenu} />
            </button>}
          </div>
        </div>
      </header>

    </div>
  </>
  )
}
