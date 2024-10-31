import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
    return (
        <footer className="bg-pink-700 text-white text-center py-6 mt-12">
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                <div>
                    <h3 className="font-bold text-lg">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <ScrollLink to="home" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="projects" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">
                                Projects
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="certifications" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">
                                Certifications
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Connect With Me</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://www.linkedin.com/in/priya-acharjee-ba4119228/" className="hover:underline">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/Priyaacharjee" className="hover:underline">GitHub</a>
                        </li>
                        <li className='flex items-center justify-center gap-4 text-lg mt-2'>
                            <a href="https://www.instagram.com/priyaacharjee_19/" className="hover:underline">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com/priya.acharjee.5623" className="hover:underline">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="https://x.com/_priyaacharjee" className="hover:underline">
                                <FaXTwitter className="h-6 w-6" />
                            </a>
                        </li>
                        <li className='flex items-center gap-2 justify-center hover:underline'>
                            <MdOutlineEmail className='h-5 w-5' />
                            <span>priyaacharjee2001@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='mt-5 text-lg'>&copy; 2024 by Priya &hearts;, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
