import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cgywyqg",
        "template_1f98jcj",
        formData,
        "C3DK7v1j_VtDMloUJ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    toast.success("🦄 Wow so easy! Message sent", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="bg-softWhite font-Helvatica text-charcoalGrey min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r rounded-t-lg from-electricBlue to-sunsetOrange h-[150px] flex items-center justify-center">
        <h1 className="text-4xl font-bold font-cinzelBlack text-softWhite">
          Get in Touch
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-5 py-10 md:px-10 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-Helvatica font-bold mb-6">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electricBlue"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electricBlue"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-electricBlue"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-sunsetOrange text-white px-6 py-2 rounded-lg hover:bg-goldenYellow transition-all"
              >
                Send Message
              </button>
            </form>
            <ToastContainer></ToastContainer>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-electricBlue" size={20} />
              <p className="capitalize">
                AT-Ramachandran Nagar, Post+Block-Rengali, District-Sambalpur, Odisha, Pin-768212
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-electricBlue" size={20} />
              <p>+91 8637201460</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-electricBlue" size={20} />
              <p>kanhapickles@gmail.com</p>
            </div>
            {/* Map */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3708.103560413446!2d84.04717197527418!3d21.659828480152235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM5JzM1LjQiTiA4NMKwMDInNTkuMSJF!5e0!3m2!1sen!2sin!4v1737465670653!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
