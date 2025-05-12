import React from 'react'
import g1 from '/src/assets/g1.jpg'
import g2 from '/src/assets/g2.jpg'
import g3 from '/src/assets/g3.jpg'
import g4 from '/src/assets/g4.jpg'
import g5 from '/src/assets/g5.jpg'
import g6 from '/src/assets/g6.jpg'
function Gallery() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-15 mx-auto flex flex-wrap">

            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g1} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g2} />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g3} />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g4} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g5} />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95" src={g6} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Gallery
