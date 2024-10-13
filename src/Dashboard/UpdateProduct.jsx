import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, emptyUpdateProductMsg, getUpdateProduct, updateProduct } from '../Slices/DashboardSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoReturnUpBackSharp } from "react-icons/io5";

const UpdateProduct = () => {
    const [obj, setobj] = useState({});
    const [imagePaths, setImagePaths] = useState([]);
    const { id } = useParams()
    const { notification, updateProductMsg } = useSelector(state => state.Dashboard)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUpdateProduct(id))
    }, [])

    useEffect(() => {
        if (notification?.data?.object) {
            setobj(notification.data.object)
        }
    }, [notification])

    useEffect(() => {
        if (updateProductMsg && updateProductMsg.message) {
            toast.success(updateProductMsg.message, {
                position: "top-center",
                autoClose: 1000
            })
        }
    }, [updateProductMsg])


    const handleImage = (e) => {
        const files = Array.from(e.target.files);
        const formData = new FormData();

        files.forEach(file => {
            if (file.type.includes("image")) {
                formData.append("file", file);
                formData.append("upload_preset", "zys5sepz");

                axios.post("https://api.cloudinary.com/v1_1/dqfjfh5wm/image/upload", formData)
                    .then((res) => {
                        // Store each uploaded image URL in the array without overwriting previous images
                        setImagePaths(prevPaths => [...prevPaths, res.data.secure_url]);
                    })
                    .catch((err) => {
                        console.error("Image upload failed:", err);
                    });
            }
        });
    };


    const handleChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value, images: imagePaths })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct({ obj, id }))
        setTimeout(() => {
            navigate("/dashboardProducts")
            dispatch(emptyUpdateProductMsg())
        }, 1500);
    }

    console.log(obj, "obj")
    // console.log(imagePaths, "imagePaths")
    // console.log(id,"id")
    // console.log(notification,"notification update product11111111111")
    console.log(updateProductMsg, "notification update product22222222222222")

    return (
        <section className="bg-white dark:bg-gray-900 border border-blue-500">
            <div><ToastContainer /></div>
            <div className="max-w-2xl px-4 lg:py-4 mx-auto">
                <Link to="/dashboardProducts">
                    <div className='cursor-pointer'><IoReturnUpBackSharp className='text-3xl' /></div>
                </Link>
                <h2 className="mb-4 text-xl font-bold mt-3 text-gray-900 dark:text-white">Update product</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                            <input onChange={handleImage} multiple type="file" name="image" id="image" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input value={obj.name} onChange={handleChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                            <input value={obj.color} onChange={handleChange} type="text" name="color" id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder='black' required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount Price</label>
                            <input value={obj.discount} onChange={handleChange} type="number" name="discount" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs. 400" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input value={obj.price} onChange={handleChange} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs.700" required />
                        </div>

                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select value={obj.category} onChange={handleChange} id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="">SELECT CATEGORY</option>
                                <option value="MEN">MEN</option>
                                <option value="WOMEN">WOMEN</option>
                                <option value="KIDS">KIDS</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="dateAdded" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input value={obj.date ? new Date(obj.date).toISOString().split('T')[0] : ''} onChange={handleChange} type="date" name="date" id="dateAdded" className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                        </div>

                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit" className="text-white bg-[#EEA032] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateProduct
