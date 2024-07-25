import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {/* Contact Information */}
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> Springdale Public School, 123 Education
            Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@springdale.edu"
              className="text-blue-500 hover:underline"
            >
              info@springdale.edu
            </a>
          </p>

          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Maps Integration */}
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="relative pb-2/3">
            eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220409.01631984612!2d77.85232695928173!3d30.325621515409487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1721883878683!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Springdale Public School Location"
              className="rounded shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
