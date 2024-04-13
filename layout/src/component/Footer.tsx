import { AiOutlineAlipay } from "react-icons/ai"


const Footer = () => {
    return (
        <div className=" ">
            <footer className=" absolute  bg-gray-50 right-0 left-0">
                <div className="mx-auto  grid container gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
                    <div className="max-w-sm">
                        <div className="mb-6 flex h-12 items-center space-x-2">
                            <h3 className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                                <span className="mr-2 text-4xl text-cyan-500">

                                    <AiOutlineAlipay />
                                </span>
                                mellow
                            </h3>
                        </div>
                        <div className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
                    </div>
                    <div className="">
                        <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
                        <div className="text-gray-500">
                            64 vrindavan  Heights, <br />
                            LH Road, <br />
                            Surat, Gujrat
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
                        <nav aria-label="Footer Navigation" className="text-gray-500">
                            <ul className="space-y-3">
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Press</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
                                <li><a className="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <div className="mt-4 mb-2 font-medium xl:mb-4">Subscribe to our Newsletter</div>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <input type="email" className="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
                                <button className="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
                        <div>© 2022 BelAir | All Rights Reserved</div>
                        <div>
                            <a className="ms-2" href="#">Privacy Policy</a>
                            <span className="ms-2">|</span>
                            <a className="ms-2" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer





// {
//     list.map((item) => (
//         <li className="font-bold md:mr-12"><a href="#">{item}</a></li>
//     ))
// }

// const list =
//     [
//         'contect',
//         'Features',
//         'Support',
//         'About ',
//     ]

//     <li className="font-bold md:mr-12"><a href="#">{item}</a></li>