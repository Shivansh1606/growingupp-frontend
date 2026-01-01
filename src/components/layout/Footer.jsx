// src/components/layout/Footer.jsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12 mt-20 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">GrowingUpp</h3>
            <p className="mb-6 text-gray-400">
              Building powerful digital solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              <FaFacebook className="text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer" />
              <FaTwitter className="text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer" />
              <FaLinkedin className="text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer" />
              <FaInstagram className="text-2xl text-yellow-400 hover:text-yellow-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-yellow-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>hello@growingupp.com</p>
              <p>+91-9876543210</p>
              <p>Sector 62, Noida, UP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/30 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; 2026 GrowingUpp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
