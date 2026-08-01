import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Digital Agency
          </h2>
          <p className="text-sm leading-6">
            We create modern, responsive, and user-friendly websites to help
            businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>App Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p>Email: info@digitalagency.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>varanasi, India</p>

          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-sky-500 p-2 rounded-full hover:bg-sky-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-5 text-center text-sm">
        © 2026 Digital Agency. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;