import React, { useEffect, useState } from 'react';
import { useDataOfApiQuery, useDeleteDataMutation } from '../Redux/ApiRTKslice';
import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { BiSolidEditAlt } from "react-icons/bi";
import { deleteReduxdata, setData } from '../Redux/ReduxToolkit';
import AddUser from './AddUser';
import Swal from 'sweetalert2';

interface RootState {
    user: {
        userData: UserData[];
        // other properties if exist
    };
    // other reducers if exist
}

const Home: React.FC = () => {
    const { data, isFetching, isLoading } = useDataOfApiQuery('');
    const [deleteData] = useDeleteDataMutation();
    const [users, setUsers] = useState<UserData[]>([]);
    const [search, setSearch] = useState<string>('');
    const [update, setUpdate] = useState<UserData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading && data && search) {
            const searchdata = data?.filter((e) =>
                e?.email.toLowerCase().includes(search.toLowerCase().trim()) ||
                e?.name.toLowerCase().includes(search.toLowerCase().trim())
            );
            setUsers(searchdata);
        } else if (!isLoading && data) {
            setUsers(data)
        }
    }, [isLoading, search, data]);

    useEffect(() => {
        if (users?.length > 0) {
            dispatch(setData(users));
        }
    }, [users, dispatch]);

    const userData = useSelector((state: RootState) => state?.user?.userData);
    console.log("------------>>>>>>>", userData);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        setUpdate([]);
    };

    const handleDelete = async (id: string) => {
        try {
            const Resp = await deleteData(id);
            console.log("🚀 ~ handleDelete ~ Resp:", Resp)
            if (Resp) {
                dispatch(deleteReduxdata(id))   
                Swal.fire("Deleted!", "Your data has been deleted.", "success");
            }

        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const updataApiData = (upData: UserData) => {
        console.log("🚀 ~ updataApiData ~ upData:", upData)
        toggleModal();
        setUpdate([upData]);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const usersPerPage = 5;
    const totalPages = Math.ceil(users.length / usersPerPage);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    return (
        <>
            <div className="bg">
                <div className="container py-5 mx-auto w-full md:w-9/12">
                    {
                        isFetching && isLoading ? (
                            <div className="flex justify-center items-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                            </div>
                        ) : (
                            <div className="">
                                <form>
                                    <div className=" flex items-center mb-4">

                                        <div className=" Detail mr-5 ">
                                            <input
                                                className="bg-white w-full text-zinc-600 font-mono ring-1   focus:ring-2  focus:ring-blue-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg "
                                                name="text"
                                                type="text"
                                                placeholder='Search Hear'
                                                value={search}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <button
                                                type='button'
                                                className=" button button-2 "
                                                onClick={toggleModal}
                                            >
                                                Register

                                            </button>
                                        </div>

                                    </div>
                                    <table className="min-w-full divide-y divide-gray-200 table-fixed w-full">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-8">Sr.No</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-36">Profile Image</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-36">email</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-36">Username</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-5">Delete</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider w-5">Update</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {currentUsers.map((item, i) => (
                                                <tr key={i} className="hover:bg-gray-200">
                                                    <td className="px-6 py-1 whitespace-nowrap">{startIndex + i + 1}</td>
                                                    <td className="px-6 py-1 whitespace-nowrap ">
                                                        {typeof item.profilePic === 'string' ? (
                                                            <img src={item.profilePic} alt="Profile" className="w-20 h-20 rounded-full object-contain" />
                                                        ) : (
                                                            <span>No Image Available</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-1  whitespace-nowrap">{item?.email}</td>
                                                    <td className="px-6 py-1 whitespace-nowrap">{item?.name}</td>
                                                    <td className="space-x-2 px-6 py-1 whitespace-nowrap">
                                                        <MdAutoDelete role="button" onClick={() => item.id && handleDelete(item.id)} className="cursor-pointer hover:text-pink-600 text-2xl   mx-auto" />
                                                    </td>
                                                    <td className=" space-x-2 px-6 py-1 whitespace-nowrap">
                                                        <BiSolidEditAlt role="button" onClick={() => updataApiData(item)} className="cursor-pointer hover:text-blue-500 text-2xl mx-auto" />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        )}

                    <div className="flex justify-center mt-4">
                        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber + 1)}
                                className={`mx-2 px-3 py-1 rounded-full ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
                            >
                                {pageNumber + 1}
                            </button>
                        ))}
                    </div>
                    {modalOpen && <AddUser isOpen={modalOpen} toggle={toggleModal} initialvalue={update[0]} />}
                </div>
            </div>
        </>
    )
}

export default Home;
