import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const ProfileDetails=()=> {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
    };
  
    return (
      <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-50 border border-gray-200 rounded-2xl text-center">
        <div className="mb-4">
          <label className="mb-4 relative w-32 h-32 mx-auto group cursor-pointer">
            <img
              src={image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
        </div>
        <h2 className="text-xl font-semibold mb-1 text-gray-800">{name
        }</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
}
export default ProfileDetails;