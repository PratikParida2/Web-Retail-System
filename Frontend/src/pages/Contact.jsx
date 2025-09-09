import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router";

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicId = import.meta.env.VITE_PUBLIC_KEY;
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          toast.success("Message Sent Succesfully")
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="md:w-1/2 flex flex-col items-center mb-6 md:mb-0 text-center">
        <img
          src={assets.contact_img}
          alt="Contact Us"
          className="w-full max-w-sm rounded-lg shadow-lg mb-4"
        />

        <p className="text-gray-600 text-lg mb-1">
          <strong>Address:</strong> Patia, Bhubaneswar, 751010
        </p>
        <p className="text-gray-600 text-lg mb-1">
          <strong>Email:</strong>shopnow@gmail.com
        </p>
        <p className="text-gray-600 text-lg mb-1">
          <strong>Phone:</strong> +123 456 7890
        </p>
      </div>
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name" // For {{ename}}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email" // For {{email}}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message" // For {{message}}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
