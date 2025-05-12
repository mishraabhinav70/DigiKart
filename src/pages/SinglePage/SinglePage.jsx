import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

function SinglePage({ addToCart }) {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        setSingleProduct(res.data);
        console.log(res.data);
      } catch (error) {
        toast.error(error.message)
      }
    };
    fetchSingleProduct();
  }, [id]);


  const allProductsNavigate = useNavigate();
  return (

    <section className="text-gray-600 body-font overflow-hidden bg-gray-50 min-h-screen">
      <Toaster />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white shadow-xl rounded-2xl p-6">
          <div className="w-full mb-2">
            <button
              onClick={() => allProductsNavigate("/products")}
              className="text-s text-indigo-600 hover:underline self-start"           >
              ← Back
            </button>
          </div>
          <img
            alt={singleProduct.title}
            className="lg:w-1/2 w-full object-cover object-center rounded-xl shadow-md"
            src={singleProduct.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-4">
            <h2 className="text-sm title-font text-indigo-500 font-semibold uppercase tracking-widest">
              {singleProduct.brand}
            </h2>
            <h1 className="text-gray-900 text-4xl font-bold mb-2">{singleProduct.title}</h1>
            <div className="flex items-center text-yellow-500 text-lg font-medium">
              ⭐ {singleProduct.rating}
            </div>
            <p className="leading-relaxed text-gray-700">{singleProduct.description}</p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="title-font font-bold text-3xl text-green-600">
                ₹{singleProduct.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ₹{(singleProduct.price / (1 - singleProduct.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                {singleProduct.discountPercentage}% OFF
              </span>
            </div>


            <div className="flex mt-6 items-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
                onClick={() =>
                  addToCart(singleProduct)}>
                Add to Cart
              </button>
              <button className="ml-4 rounded-full w-10 h-10 bg-gray-200 hover:bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-red-500 transition-all">
                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
