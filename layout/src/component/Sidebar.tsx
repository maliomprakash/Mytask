import { AiOutlineAlipay, AiOutlineStock, AiTwotoneContainer } from "react-icons/ai"
import { FaAngleUp, FaRegFolder, FaRegMessage } from "react-icons/fa6"
import { IoMdHome } from "react-icons/io"
import { PiBookBookmarkBold, PiNotebookBold } from "react-icons/pi"
import { SiGoogleanalytics } from "react-icons/si"
import { TbBrandGoogleAnalytics } from "react-icons/tb"


const Sidebar = () => {
    return (
        <div className="bg-gray-50">
            <div className=" mb-5">
                <div className="h-full overflow-x-scroll-scroll w-52  md:w-64 ">
                    <div className="flex h-full flex-grow flex-col overflow-y-auto   bg-gray-50 pt-5 ">
                        <div className="flex mt-10 items-center px-4">
                            <img className="h-12 w-auto max-w-full align-middle" src="/images/R-Wx_NHvZBci3KLrgXhp1.png" alt="" />
                            <div className="flex ml-3 flex-col">
                                <h3 className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                                    <span className="mr-2 text-4xl text-cyan-500">

                                        <AiOutlineAlipay />
                                    </span>
                                    mellow
                                </h3>
                            </div>
                        </div>

                        <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Analytics</span>
                       

                        <div className="flex mt-3 flex-1 flex-col">
                            <div className="">
                                <nav className="flex-1">
                                    <a href="#" title="" className="flex cursor-pointer items-center border-l-4 border-l-blue-400 py-2 px-4 text-sm font-medium text-blue-400 outline-none transition-all duration-100 ease-in-out focus:border-l-4">
                                    <IoMdHome className=" mr-4 h-5 w-5 align-middle"/>
                                        Dashboard
                                    </a>



                                    <a href="#" className="flex cursor-pointer items-center border-l-blue-400 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-400 hover:text-blue-400 focus:border-l-4">
                                    <FaRegMessage className=" mr-4 h-5 w-5 align-middle" />

                                        Messages
                                        <span className="ml-auto rounded-full bg-blue-400 px-2 text-xs text-black">10</span>
                                    </a>

                                    <div className="relative transition">
                                        <input className="peer hidden" type="checkbox" id="menu-1" checked />
                                        <button className="flex peer relative w-full items-center border-l-blue-400 py-3 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-blue-400 focus:border-l-4">
                                            <span className="flex mr-5 "
                                            >
                                                <SiGoogleanalytics  className=" mr-4 h-5 w-5 align-middle" />
                                            </span>
                                            Analytics
                                            <label htmlFor="menu-1" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                                        </button>
                                        
                                        <FaAngleUp className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-blue-400" />
                                        <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                                            <li className="flex m-2 cursor-pointer border-l-blue-400 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-blue-400">
                                                <span className="mr-5"
                                                ><AiOutlineStock  className=" mr-4 h-5 w-5 align-middle" /></span>
                                                Revenue
                                            </li>
                                            <li className="flex m-2 cursor-pointer border-l-blue-400 py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:border-l-4 hover:text-blue-400">
                                                <span className="mr-5"
                                                ><TbBrandGoogleAnalytics className=" mr-4 h-5 w-5 align-middle" /></span>
                                                Refunds
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                                <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Product Mangement</span>

                                <nav className="flex-1">
                                    <a href="#" className="flex cursor-pointer items-center border-l-blue-400 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-400 hover:text-blue-400 focus:border-l-4">
                                    <FaRegFolder className=" mr-4 h-5 w-5 align-middle" />
                                        Products
                                    </a>

                                    <a href="#" className="flex cursor-pointer items-center border-l-blue-400 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-400 hover:text-blue-400 focus:border-l-4">
                                    <PiNotebookBold className=" mr-4 h-5 w-5 align-middle"/>
                                        Orders
                                    </a>
                                    <a href="#" className="flex cursor-pointer items-center border-l-blue-400 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-400 hover:text-blue-400 focus:border-l-4">
                                    <AiTwotoneContainer className=" mr-4 h-5 w-5 align-middle" />

                                        Suppliers
                                    </a>
                                </nav>

                                <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">Content Management</span>

                                <nav className="flex-1">
                                    <a href="#" className="flex cursor-pointer items-center border-l-blue-400 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-400 hover:text-blue-400 focus:border-l-4">
                                    <PiBookBookmarkBold className="mr-4 h-5 w-5 align-middle"/>
                                        Blogs
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
