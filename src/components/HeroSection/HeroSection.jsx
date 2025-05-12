import React from 'react'
import banner from '/src/assets/banner.jpg'
function HeroSection() {
    return (
        <>
            <div className='relative'>
                <div>
                    <img
                        src={banner}
                        alt=""
                        className="w-full object-cover object-center" />
                </div>
                <div className='absolute top-[10%] left-[70%] lg:top-[30%] lg:left-[70%] md:top-[25%] md:left-[70%] sm:top-[20%] sm:left-[70%] -translate-x-1/2 text-center'>
                    <h1 className='text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600'>
                        Discover your Next Adventure!
                    </h1>
                    <p className='text-sm sm:text-sm md:text-xl lg:text-2xl mt-5 font-semibold text-black'>
                        Shop our latest arrival & your style
                    </p>
                </div>

            </div>
        </>
    )
}

export default HeroSection
