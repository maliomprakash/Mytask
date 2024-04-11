import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useDeleteDataMutation, useGetAllpostQuery } from "./RtkapiSlice";
import { useDispatch } from "react-redux";
import { reduxDelete, setData } from "./ReduxToolSlice";
import Swal from "sweetalert2";
import AddUserData from "./AddUserData";

const TABLE = () => {
  const { data, isLoading, error } = useGetAllpostQuery();
  const [deleteData] = useDeleteDataMutation();
  const [first, setFirst] = useState([]);
  const [update, setUpdate] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState(""); // State to hold selected gender

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data && search) {
      const searchdata = data.filter(
        (e) =>
          e?.email.toLowerCase().includes(search.toLowerCase().trim()) ||
          e?.name.toLowerCase().includes(search.toLowerCase().trim())
      );
      setFirst(searchdata);
    } else if (!isLoading && data) {
      setFirst(data);
    }
  }, [isLoading, search, data]);

  useEffect(() => {
    if (first.length > 0) {
      dispatch(setData(first));
    }
  }, [first, data, dispatch]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setUpdate({});
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        await deleteData(id);
        dispatch(reduxDelete(id));
        setFirst((prevData) => prevData.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your data is safe :)", "error");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const updataApiData = async (upData) => {
    toggleModal();
    setUpdate(upData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter data based on selected gender
  const filteredData = selectedGender
    ? first.filter((user) => user.gender === selectedGender)
    : first;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg">
      <div className="container mx-auto">
        <div className="boxs md:w-5/5 w-5/5 mx-auto">
          <div className="detail pt-10">
            <div className="flex w-full items-center mb-10 ">
              <input
                className="w-full px-4 py-2 rounded-md text-black outline-none focus:ring focus:ring-blue-400"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="px-4 py-2 rounded-md text-black outline-none focus:ring focus:ring-blue-400 ml-4"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button
                onClick={toggleModal}
                className="relative flex px-7 py-2 w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-400 rounded ml-5 before:absolute before:inset-0 before:border-0 before:border-white before:duration-200 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"
              >
                <span className="relative z-10">Add Users</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm rtl:text-right text-gray-500 dark:text-gray-400 w-full text-center table-fixed">
              <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className=" py-4 px-3 w-8">sr.no</th>
                  <th className=" py-4 px-3 w-36">Users Name</th>
                  <th className=" py-4 px-3 w-36">Email Address</th>
                  <th className=" py-4 px-3 w-36">Passwords</th>
                  <th className="whitespace-nowrap py-3 w-20">Gender</th>
                  <th className=" py-4 px-3 w-8 text-center">Update</th>
                  <th className=" py-4 px-3 w-8 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4"></td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">Error: {error.message}</td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => {
                    // Calculate the serial number for each item
                    const serialNumber = indexOfFirstItem + index + 1;
                    return (
                      <tr
                        key={item.id}
                        className="bg-white text-lg bg-transparent border-b dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-r from-cyan-500 to-blue-700 text-white hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="whitespace-nowrap py-3">{serialNumber}</td>
                        <td className="whitespace-nowrap py-3">{item.name}</td>
                        <td className="whitespace-nowrap py-3">{item.email}</td>
                        <td className="whitespace-nowrap py-3 relative">
                          <span>{showPassword ? item.password : "********"}</span>
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute w-14 top-2 right-0 mt-1 mr-2 text-blue-500 hover:text-blue-700 focus:outline-none bg-white rounded px-2 flex items-center"
                          >
                            {showPassword ? "Hide" : "Show"}
                          </button>
                        </td>
                        <td className="whitespace-nowrap py-3 capitalize ">{item.gender}</td>
                        <td className="whitespace-nowrap py-3">
                          <FaEdit
                            role="button"
                            onClick={() => updataApiData(item)}
                            className="text-center text-2xl mx-auto rounded-lg text-white"
                          />
                        </td>
                        <td className="whitespace-nowrap">
                          <MdDeleteSweep
                            role="button"
                            onClick={() => handleDelete(item.id)}
                            className="text-center text-3xl mx-auto text-red-600"
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
            {/* Pagination */}
            <ul className="flex justify-center mt-4">
              {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(
                (number) => (
                  <li key={number}>
                    <button
                      onClick={() => paginate(number + 1)}
                      className={`${
                        currentPage === number + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500"
                      } px-3 py-1 mx-1 border border-gray-300 rounded-full hover:bg-blue-200 focus:outline-none`}
                    >
                      {number + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        {modalOpen && (
          <AddUserData
            isOpen={modalOpen}
            toggle={toggleModal}
            initialValues={update}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default TABLE;
