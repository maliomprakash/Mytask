import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAddDataMutation, useUpdateDataMutation } from "./RtkapiSlice";
import { useDispatch } from "react-redux";
import { reduxUpdate, addData } from "./ReduxToolSlice";

export default function AddUserData({ isOpen, toggle, data, initialValues = { email: "", name: "", password: "", gender: "" } }) {
    const dispatch = useDispatch();
    const [addRTKData] = useAddDataMutation();
    const [updateData] = useUpdateDataMutation();
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (initialValues.email && initialValues.name && initialValues.password) {
                const resp = await updateData(formData);
                if (resp.isConfirmed) {
                    dispatch(reduxUpdate(formData));
                }
                Swal.fire({
                    title: "Updated!",
                    text: "User data has been updated successfully.",
                    icon: "success",
                });
            } else {
                const resp = await addRTKData(formData);
                if (resp.isConfirmed) {
                    dispatch(addData(formData));
                }
                Swal.fire({
                    title: "Added!",
                    text: "New user has been added successfully.",
                    icon: "success",
                });
            }
            toggle();
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    const cancelButton = () => {
        setFormData({ email: "", name: "", password: "", gender: "" });
        toggle();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
                    <div className="relative p-8 bg-white w-96 rounded-md shadow-lg">
                        <button
                            type="button"
                            onClick={cancelButton}
                            className="absolute top-0 right-0 p-2 m-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-xl ml-3  font-semibold mb-4"> User Details </h2>

                        {/* Name */}
                        <div className="flex items-center justify-center py-5">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text" 
                                    required
                                    value={formData.name || ""}
                                    onChange={handleChange}
                                    className="border-b w-72  border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700
                                    ${formData.name ? "-top-[16px] text-xs text-blue-700" : ""}
                                    `}
                                >
                                    User name
                                </label>
                            </div>
                        </div>

                        {/* Email Id */}
                        <div className="flex items-center justify-center py-5">
                            <div className="relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    className="border-b w-72 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700
                                    ${formData.email ? "-top-[16px] text-xs text-blue-700" : ""}
                                    `}
                                >
                                    Email Id
                                </label>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex items-center justify-center py-5">
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    required
                                    value={formData.password || ""}
                                    onChange={handleChange}
                                    className="border-b w-72 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    htmlFor="password"
                                    className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700
                                    ${formData.password ? "-top-[16px] text-xs text-blue-700" : ""}
                                    `}
                                >
                                    Password
                                </label>
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="flex items-center justify-center py-5">
                            <select
                                id="gender"
                                required
                                name="gender"
                                value={formData.gender || ""}
                                onChange={handleChange}
                                className="border-b w-72 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-around">
                            <button
                                type="submit"
                                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {initialValues.email ? 'Update Data' : 'Submit Data'}
                            </button>
                                
                            <button
                                type="button"
                                onClick={cancelButton}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
