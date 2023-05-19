import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import img from '../../../assets/images/logo/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='h-20 w-20' src={img} alt="" />
                    <p>KIDsZOne <br />Providing reliable services since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end ">
                    <div className="grid grid-flow-col gap-4">
                        <FaTwitter className='text-blue-400'></FaTwitter>
                        <FaYoutube className='text-red-500'></FaYoutube>
                        <FaFacebook className='text-blue-400'></FaFacebook>
                        <FaGithub ></FaGithub>
                        <FaGoogle className='text-green-600'></FaGoogle>
                    </div>
                </div>
            </footer>
            <div className='text-center'>
                <p>Copyright © 2023 - Developed By : <span className='text-orange-600 font-bold'>Nishat Jahan Tandra</span></p>
            </div>
        </div>
    );
};

export default Footer;