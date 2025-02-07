import React, { useState } from "react";

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll-to-top button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Listen for scroll events
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Vision */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MORENT</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Relation
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a
                href="https://discord.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Bottom Footer Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          ©2022 MORENT. All rights reserved
        </p>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
