import React, { useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';
import uploadImage from '../assets/admin_assets/upload_area.png'
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = () => {
  const [token,setToken]=useState(localStorage.getItem("token") || "");
  const [product, setProduct] = useState({
        _id: "",
        name: "",
        description: "Just For Trial",
        price: 350,
        image: [],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, image: files });
  };

  const handleSizeChange = (size) => {
    const newSizes = product.sizes.includes(size)
      ? product.sizes.filter((s) => s !== size)
      : [...product.sizes, size];
    setProduct({ ...product, sizes: newSizes });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('subCategory', product.subCategory);
    console.log(product.bestseller);
    
    formData.append('bestseller',product.bestseller);
    
    formData.append('sizes', JSON.stringify(product.sizes)); // Convert array to string
    product.image.forEach((file) =>  formData.append('image', file)); // Append each image file
  
    try {
      const response = await axios.post('http://localhost:5000/api/product/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
       if(response.status===201){
        toast.success("Product Added Successfully");
        setProduct({
          _id: "",
          name: "",
          description: "Just For Trial",
          price: 350,
          image: [],
          category: "Men",
          subCategory: "Winterwear",
          sizes: ["S", "M", "L", "XL"],
          date: 1716668445448,
          bestseller: false
        });
       }
       else{
        toast.error(response.data.message);
       }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={product.name}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full border p-2 rounded"
          value={product.description}
          onChange={handleInputChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={product.price}
          onChange={handleInputChange}
          required
        />
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded p-4 cursor-pointer">
        <img src={!product.image[0]?uploadImage:URL.createObjectURL(product.image[0])}  className='w-20' alt="Upload Image" />
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full"
          required
        />
        </label>
        

        <div className="flex gap-4">
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-1/2 border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <select
            name="subCategory"
            value={product.subCategory}
            onChange={handleInputChange}
            className="w-1/2 border p-2 rounded"
            required
          >
            <option value="">Select Subcategory</option>
            <option value="Winterwear">Winterwear</option>
            <option value="Bottomwear">Top-Wear</option>
            <option value="Topwear">Bottom-Wear</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={product.sizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={product.bestseller}
            onChange={(e) =>setProduct({ ...product, bestseller: e.target.checked })}
          />
          Bestseller
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
