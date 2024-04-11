import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useAddDataMutation, useUpdateDataMutation } from '../Redux/ApiRTKslice';
import { addReduxdata, updateReduxdata } from '../Redux/ReduxToolkit';

const validation = Yup.object({
    name: Yup.string()
        .min(2, "Name is too short, minimum 2 characters required")
        .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
        .required("Please enter a name"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Please enter an email address"),
    password: Yup.string().required("Please enter a valid password"),
    profilePic: Yup.mixed().required("Please upload a profile picture"),
});

interface AddUserProps {
    isOpen: boolean;
    toggle: () => void;
    initialvalue?: InitialValues
}

interface InitialValues {
    id?: string;
    email: string;
    name: string;
    password: string;
    profilePic: File | string | null; // Modify the type to accept File, string, or null
}

const formData: { name: string; type: string; placeholder: string }[] = [
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email Id',
    },
    {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
    },
    {
        name: 'password',
        type: 'text',
        placeholder: 'Password',
    },
    {
        name: 'profilePic',
        type: 'file',
        placeholder:'',
    }

];

const AddUser: React.FC<AddUserProps> = ({ isOpen, toggle, initialvalue = { email: '', name: '', password: '', profilePic: '' } }) => {
    const [addData] = useAddDataMutation();
    const [updateData] = useUpdateDataMutation();
    const dispatch = useDispatch();

    const cancelButton = () => {
        toggle();
    };

    return (
        <Formik
            initialValues={initialvalue || {
                email: "",
                name: "",
                password: "",
                profilePic: "",
            }}
            validationSchema={validation}
            onSubmit={async (values: InitialValues, { resetForm }) => {
                try {
                    if (typeof values.profilePic === 'string') {
                        // If profilePic is already a base64 string, no need to convert
                        // Handle your logic accordingly
                    } else if (values.profilePic instanceof File) {
                        // If profilePic is a File object, convert it to base64
                        const base64Image = await convertToBase64(values.profilePic);
                        values.profilePic = base64Image;
                    }

                    if (values.id) {
                        const resp = await updateData(values);
                        if ('data' in resp) {
                            dispatch(updateReduxdata({ id: values.id, ...values }));
                            Swal.fire({
                                title: "Updated!",
                                text: "Data has been updated successfully.",
                                icon: "success",
                            });
                        }
                    } else {
                        const respn = await addData(values);
                        if ('data' in respn) {
                            dispatch(addReduxdata(values));
                            Swal.fire({
                                title: "Added!",
                                text: "New user has been added successfully.",
                                icon: "success",
                            });
                        }
                    }
                    resetForm();
                    toggle();
                } catch (error) {
                    console.error("Error adding data:", error);
                }
            }}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form>
                    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
                        <div className="relative p-8 bg-white  rounded-md shadow-lg ok">
                            <IoIosCloseCircleOutline
                                type="button"
                                className="absolute top-0 right-0  text-2xl hover:text-red-700 m-2 text-gray-600 hover:text-gray-800 "
                                onClick={cancelButton}
                            />
                            <h2 className="text-xl font-semibold mb-4">Add User</h2>
                            {formData.map((item, index) => (
                                <div className="flex  items-center w-full  justify-center py-5" key={index}>
                                    <div className="relative ">
                                        {item.type === 'file' ? (
                                            <input
                                                id={item.placeholder}
                                                name={item.name}
                                                type={item.type}
                                                onChange={(event) => setFieldValue(item.name, event.currentTarget.files?.[0])}
                                                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none  bg-inherit "
                                            />
                                        ) : (
                                            <Field
                                                id={item.placeholder}
                                                name={item.name}
                                                type={item.type}
                                                className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer w-72  bg-inherit"
                                            />
                                        )}
                                        <label
                                            htmlFor={item.placeholder}
                                            className={`absolute left-0 cursor-text peer-focus:text-xs transition-all peer-focus:-top-4 peer-focus:text-blue-700 
                                                ${touched[item.name as keyof InitialValues] && errors[item.name as keyof InitialValues] ? 'text-red-500' : ''}
                                                ${values[item.name as keyof InitialValues] ? '-top-[16px] text-xs text-blue-700' : ''}`}
                                        >
                                            {item.placeholder}
                                        </label>
                                        {touched[item.name as keyof InitialValues] && errors[item.name as keyof InitialValues] && (
                                            <div className="text-red-500 text-sm mt-1">
                                                <ErrorMessage name={item.name} component="div" className="text-red-500" />
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Submit Data
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
                </Form>
            )}
        </Formik>
    );
};

const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};

export default AddUser;
