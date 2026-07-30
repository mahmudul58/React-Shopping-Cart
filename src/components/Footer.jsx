import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/">
            <h3 className="text-2xl font-black text-white tracking-tight inline-block">
              Tech<span className="text-emerald-400">Next</span>
              <span className="text-gray-400 text-sm font-semibold ml-1">.com</span>
            </h3>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed pr-4">
            Your one-stop destination for premium tech gadgets, accessories, and PC components. We deliver the best products right to your doorstep.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xl">
              <IoLogoFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xl">
              <IoLogoTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xl">
              <IoLogoInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xl">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Shop All
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Customer Service</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Track Your Order
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors">
                Shipping Info
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <span className="font-semibold text-gray-300">Address:</span> 123 Tech Street, Dhaka, Bangladesh
            </li>
            <li>
              <span className="font-semibold text-gray-300">Phone:</span> +880 1234-567890
            </li>
            <li>
              <span className="font-semibold text-gray-300">Email:</span> support@technext.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} TechNext.com. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
