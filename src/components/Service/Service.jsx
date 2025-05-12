import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";


function Service() {
    return (
        <><div className=" container mx-auto px-5 flex py-20 gap-10 items-center justify-center flex-wrap">
            <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <FaShippingFast />
                <p>FREE SHIPPING</p>
            </div>
            <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <MdProductionQuantityLimits />
                <p>AUTHENTIC PRODUCTS</p>
            </div>
            <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <TbTruckReturn />
                <p>EASY RETURN</p>
            </div>
            <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                <RiSecurePaymentLine />
                <p>SECURE PAYMENT</p>
            </div>        </div>
        </>
    )
}

export default Service
