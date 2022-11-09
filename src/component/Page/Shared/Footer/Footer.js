import React from 'react';
import logo from '../../../../assets/img/logo.png'


const Footer = () => {
    return (
        <footer className="footer rounded-xl p-32 bg-black my-10">
            <div>
                <img src={logo} alt=""  className='w-40'/>
                <p>Chef Steps <br />Copyright  Reserved By Chef Steps 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Corporate Events</a>
                <a href="/" className="link link-hover">Weddings And Galas</a>
                <a href="/" className="link link-hover">Special Events</a>
                <a href="/" className="link link-hover">Cooking Classes</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;