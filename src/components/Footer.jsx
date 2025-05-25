// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
        <img
          src="/images/ECell.png"
          alt="E-Cell"
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
          <h2 className="text-xl font-bold mb-2">E-Cell</h2>
          <p className="text-sm text-gray-400 mb-3">NITK Surathkal</p>
          <p className="mb-2 font-medium">Follow Us on</p>
          <div className="flex gap-4 text-xl">
            <FaInstagram />
            <FaLinkedin />
            <FaTimes />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Home</li>
            <li>Events</li>
            <li>Brochure</li>
            <li>Accomodation</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">ecell@nitk.edu.in</p>
          <p className="text-sm mt-1">E-Cell Outreach Manager: +91 8088370484</p>
          <p className="text-sm">Incub8 Marketing Head: +91 8088370484</p>
          <p className="text-sm mt-2">
            NITK, NH 66, Srinivasnagar, Surathkal Mangalore, Karnataka – 575025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
