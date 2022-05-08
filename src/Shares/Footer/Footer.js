import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
                <footer className="footer-distributed">

<div className="footer-left">

    <h3>Ware<span>House</span></h3>

    <p className="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Blog</a>
        ·
        <a href="#">Pricing</a>
        ·
     
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
    </p>

    <p className="footer-company-name">Warehouse &copy; 2022</p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>21 Revolution Street</span> Dhaka, Bangladesh</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+1 555 123456</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">contact@warehouse.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About warehouse</span>
       this is a warehouse website
    </p>

    <div className="footer-icons">

        <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
        <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/ifaz5?tab=repositories"><i className="fa fa-github"></i></a>

    </div>

</div>

</footer>
        </div>
    );
};

export default Footer;