/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
} from "../slices/cartSlice";


import { TrashIcon, HeartIcon } from "@heroicons/react/solid";

function Chart() {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   console.log(cart)

   useEffect(() => {
     dispatch(getTotals());
   }, [cart, dispatch]);

   const handleAddToCart = (product) => {
     dispatch(addToCart(product));
   };
   const handleDecreaseCart = (product) => {
     dispatch(decreaseCart(product));
   };


  return (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {cart.cartItems.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-xl font-bold">
                            <a
                              href={product.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="flex uppercase flex-col text-md mt-3">
                          <p className="text-gray-500 font-medium">
                            {product.color}
                          </p>
                          <p className="text-gray-500 mt-4 ">
                            {product.secname}
                          </p>
                          <p className="text-gray-500 mt-4 font-medium">
                            {product.size}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="absolute top-0 right-0">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleDecreaseCart(product)}
                              type="button"
                              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M18 12H6"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="inline-flex disabled text-xl justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5  border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                            >
                              <p className="w-6 h-6">{product.cartQuantity}</p>
                            </button>
                            <button
                              onClick={() => handleAddToCart(product)}
                              type="button"
                              className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between text-gray-700 space-x-2">
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center align-items-center">
                          <TrashIcon className="w-4 h-4" />
                          <p className="font-bold uppercase">Remove Item</p>
                        </button>
                        <button className="flex items-center align-items-center">
                          <HeartIcon className="w-4 h-4" />
                          <p className="font-bold uppercase">
                            Add To Wait List
                          </p>
                        </button>
                      </div>
                      <p className="mt-1 text-xl font-medium text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              The Total Amount of
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Temporary Amount</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${cart.cartTotalAmount}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">Gratis</dd>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  The Total Amount of <br /> (Include VAT)
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${cart.cartTotalAmount}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full uppercase bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Go To Checkout
              </button>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add Discount Of Code (Optional)
              </button>

              
            </div>

          </section>
        </form>
      </main>
    </div>
  );
}

export default Chart;