import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-12 px-28 bg-[url(https://i.ibb.co/1J8smrT1/13.jpg)] bg-cover bg-no-repeat pb-10 py-6">
        <div className="text-black space-y-3">
            <img className="w-[70px] h-[85px]"  src="https://i.ibb.co/tVNbVRQ/logo1.png" alt="" />
            <h1 className="font-bold text-5xl">Espresso Emporium</h1>
            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className="flex gap-4 my-8">
              <Link to=""><FaFacebook size={30}/></Link>
              <Link to=""><FaTwitter size={30}/></Link>
              <Link to=""><FaInstagram size={30}/></Link>
              <Link to=""><IoLogoLinkedin size={30}/></Link>
            </div>
            <h1 className="font-bold text-4xl">Get in Touch</h1>
            <div className="space-y-2 mt-6">
              <p><FaPhoneAlt className="inline mr-4"/>+88 01705-620458</p>
              <p><IoMdMail className="inline mr-4"/>mmunim9.9.01@gmail.com</p>
              <p><FaLocationDot className="inline mr-4"/>Dhaka, Bangladesh</p>
            </div>
        </div>
          <div className="space-y-3 text-black">
            <h1 className="text-5xl font-bold">Connect with Us</h1>
            <fieldset className="space-y-1 flex flex-col">
              <input type="text" className="input bg-[#f1ddc3]" placeholder="Name" />
              <input type="email" className="input bg-[#f1ddc3]" placeholder="Email" />
              <input type="text" className="input bg-[#f1ddc3]" placeholder="Message" />
            </fieldset>
              <button className="btn btn-outline btn-warning rounded-[40px]">Send Message</button>
          </div>
      </div>
      <div>
        <footer className="footer sm:footer-horizontal footer-center bg-[url(https://i.ibb.co/NgJwXJ5k/24.jpg)]  bg-cover bg-no-repeat text-base-content p-3 font-rancho">
          <aside>
            <p className="text-xl">
              Copyright Espresso Emporium ! All Rights Reserved
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
