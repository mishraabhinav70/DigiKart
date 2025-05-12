import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({
  cart,
  handleInc,
  handleDec,
  handleRemove,
  getSubtotal,
  getShipping,
  getFinalTotal,
  promoCode,
  setPromoCode,
  handleApplyPromo,
  discount
}) {
  const subtotal = getSubtotal()

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row shadow-md my-10">
        <div className="w-full md:w-3/4 bg-white px-4 sm:px-6 py-6 sm:py-10">
          <div className="flex justify-between border-b pb-4 sm:pb-8">
            <h1 className="font-semibold text-xl sm:text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-xl sm:text-2xl">{cart.length} Items</h2>
          </div>

          {/* Show message if cart is empty */}
          {cart.length === 0 ? (
            <div className="text-center text-gray-600 py-16 text-lg font-medium flex flex-col items-center">
              <p>Your cart is empty 😔</p>
              <Link
                to="/products"
                className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (

            <>
              <div className="hidden sm:flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
              </div>

              {cart.map((item) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={item.id}>
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.title}</span>
                      <span className="text-red-500 text-xs">{item.category}</span>
                      <button
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center w-1/5">
                    <button onClick={() => handleDec(item.id)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-full">-</button>
                    <span className="mx-2 text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => handleInc(item.id)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-full">+</button>
                  </div>

                  <span className="text-center w-1/5 font-semibold text-sm">₹{item.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <Link to="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 
                  239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 
                  86.059c15.119 15.119 40.971 4.411 
                  40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </>
          )}
        </div>

        {/* Order Summary */}
        {cart.length > 0 && (
          <div className="w-full md:w-1/4 px-4 sm:px-8 py-8 sm:py-10 bg-gray-100">
            <h1 className="font-semibold text-xl sm:text-2xl border-b pb-4 sm:pb-8">Order Summary</h1>

            <div className="flex justify-between mt-8">
              <span className="font-semibold text-sm uppercase">Subtotal</span>
              <span className="font-semibold text-sm">₹{subtotal.toFixed(2)}</span>
            </div>

            {subtotal < 499 && subtotal > 0 && (
              <div className="flex justify-between mt-2">
                <span className="font-semibold text-sm uppercase">Shipping</span>
                <span className="font-semibold text-sm">₹{getShipping().toFixed(2)}</span>
              </div>
            )}

            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-medium mt-2">
                <span className="text-sm">Discount (10%)</span>
                <span>- ₹{discount.toFixed(2)}</span>
              </div>
            )}

            <div className="py-6">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                onClick={handleApplyPromo}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 mt-2 text-sm text-white uppercase w-full"
              >
                Apply
              </button>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{getFinalTotal().toFixed(2)}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
