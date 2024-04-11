import React from 'react'
import { Link } from 'react-router-dom'


const Trial = () => {
  return (
    <>
    <section className="bg-gray-50 light:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 light:text-white">Start your free trial today</h2>
            <p className="mb-6 font-light text-gray-500 light:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
            <Link to="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 light:bg-purple-600 light:hover:bg-purple-700 focus:outline-none light:focus:ring-purple-800">Free trial for 30 days</Link>
        </div>
    </div>
    </section>
    </>
  )
}

export default Trial