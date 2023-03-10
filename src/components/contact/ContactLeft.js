import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[95%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-10 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Himanshu Bisht</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Feel Free to tell me about your project without any hesitation your 
          all data will be safe with us. I'll provide you best of best product which will
          stands far beyond your expectations....
          <br></br>
          Please gives us a chance to serve you according to your requirements on time...
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+917466934041</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">himanshubisht831998@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Linkedin: <span className="text-lightText">linkedin.com/in/himanshu-bisht-b51943166</span>
        </p>
      </div>
    
    </div>
  );
}

export default ContactLeft