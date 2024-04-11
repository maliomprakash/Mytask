import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function Block() {

    const styles = {
        st0: { fill: '#0acf83' },
        st1: { fill: '#a259ff' },
        st2: { fill: '#f24e1e' },
        st3: { fill: '#ff7262' },
        st4: { fill: '#1abcfe' }
      };
    
  return (
    <div>

    <section className="bg-white light:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl light:text-white">Building digital <br />products & brands.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl light:text-gray-400">This free and open-source landing page template was built using the utility classes from <Link to="https://tailwindcss.com" className="hover:underline">Tailwind CSS</Link> and based on the components from the <Link to="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite Library</Link> and the <Link to="https://flowbite.com/blocks/" className="hover:underline">Blocks System</Link>.</p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <Link to="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:text-blue-700  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 light:text-white light:border-gray-700 light:hover:bg-gray-700 light:focus:ring-gray-800">
                        <svg className="w-4 h-4 mr-2 text-gray-500 light:text-gray-400"><FaGithub /></svg> View on GitHub
                    </Link> 
                    <Link className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 light:focus:ring-gray-700 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:text-white light:hover:bg-gray-700">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500">
                    <style type="text/css">{` 
                      .st0 { fill: #0acf83; }
                      .st1 { fill: #a259ff; }
                      .st2 { fill: #f24e1e; }
                      .st3 { fill: #ff7262; }
                      .st4 { fill: #1abcfe; }
                    `}</style>
                    <title>Figma.logo</title>
                    <desc>Created using Figma</desc>
                    <path style={styles.st0} id="path0_fill" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
                    <path style={styles.st1} id="path1_fill" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
                    <path style={styles.st2} id="path1_fill_1_" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
                    <path style={styles.st3} id="path2_fill" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
                    <path style={styles.st4} id="path3_fill" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
                  </svg>Get Figma file
                    </Link>
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="../src/assets/images/hero.png" alt="hero image"/>
            </div>                
        </div>
    </section>
 
    </div>
  )
}

export default Block
