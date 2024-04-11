import React from 'react'

const Nav = () => {
  return (
    <div>
    <div class="bg-gray-800 text-white p-4">
    <div class="flex justify-between items-center">
        <div>
            <a href="#" class="text-lg font-bold">Logo</a>
        </div>
        <div class="block lg:hidden">
            <button id="menu-toggle" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </div>
    <div class="hidden lg:block">
        <nav class="mt-4">
            <ul class="flex space-x-4">
                <li><a href="#" class="hover:text-gray-300">Home</a></li>
                <li class="relative">
                    <a href="#" class="hover:text-gray-300">Services</a>
                    <ul class="absolute left-0 top-full bg-gray-700 text-white rounded-lg mt-2 hidden">
                        <li><a href="#" class="block px-4 py-2">Service 1</a></li>
                        <li><a href="#" class="block px-4 py-2">Service 2</a></li>
                        <li><a href="#" class="block px-4 py-2">Service 3</a></li>
                    </ul>
                </li>
                <li><a href="#" class="hover:text-gray-300">About</a></li>
                <li><a href="#" class="hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    </div>
</div>

    </div>
  )
}

export default Nav