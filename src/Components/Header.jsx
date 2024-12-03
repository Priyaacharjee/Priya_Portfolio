import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-pink-700 sticky top-0 z-20">
      <h1
        className="text-3xl md:text-4xl font-bold text-white ml-5"
        style={{ fontFamily: 'Dancing Script, cursive', fontStyle: 'italic' }}
      >
        Priya Acharjee
      </h1>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      <nav className="hidden md:flex justify-center flex-grow text-white font-serif text-lg">
        <div className="flex space-x-9">
          <ScrollLink to="home" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="certifications" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Certifications</ScrollLink>
        </div>
      </nav>

      <div className="hidden md:block mr-16">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-pink-800 cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>

      {/* Hamburger menu content for mobile view */}
      {isOpen && (
        <div className="absolute right-5 top-16 bg-pink-700 rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-30">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="certifications"
            smooth={true}
            duration={500}
            className="hover:text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          >
            Certifications
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-800 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </header>
  );
}
