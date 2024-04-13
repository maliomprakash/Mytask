import { AiOutlineAlipay } from "react-icons/ai"
import { FaBarsStaggered } from "react-icons/fa6"

const list =
    [
        'contect',
        'Features',
        'Support',
        'About ',
    ]
const Headertop = () => {
    return (
        <div className="bg-gray-50 fixed w-full z-10 ">
            <div className="container  mx-auto">
                <div className="text-slate-700 relative flex  flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                    <h3 className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                        <span className="mr-2 text-4xl text-cyan-500">

                            <AiOutlineAlipay />
                        </span>
                        mellow
                    </h3>
                    <input type="checkbox" className="peer hidden" id="navbar-open" />
                    <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                        <FaBarsStaggered className="h-6 w-6" />
                    </label>
                    <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">

                            {
                                list.map((item) => (
                                    <li className="font-bold md:mr-12"><a href="#">{item}</a></li>
                                ))
                            }


                            <button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">Login</button>
                        
                    </ul>
                </div>
            </div>
        </div>

        </div >
    )
}

export default Headertop
