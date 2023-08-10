import React from 'react'
import FooterItems from './FooterItems'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col info">
                    <h1 className="comp-name neoStore">NeoSTORE</h1>
                    <div className="email">
                        <form action="#" className="form_subscribe">
                            <i className="fa fa-envelope"></i>
                            <input type="text" placeholder="Your email address" />
                            <button>subscribe</button>
                        </form>
                    </div>
                    <div className="contact">
                        <h5>Contact Info</h5>
                        <div>
                            <a className="text-white text-decoration-none" href="tel:+911234567890">+91 12345 67890</a>
                            <span className="text-white"> | </span>
                            <a className="text-white text-decoration-none" href="tel:+911234567890">+91 12345 67890</a>
                        </div>
                        <div>
                            <a className="text-white text-decoration-none" href="https://maps.google.com/?q=17+Princess+Road,+London,+Greater+London+NW1+8JR,+UK" target="_blank">17 Princess Road, London, Greater London NW1 8JR, UK</a>
                        </div>
                        <div className="social-icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>                    
                </div>
                <div className="col categories">
                <h3>CATAGORIES</h3>
                    <FooterItems name="Popular" />
                    <FooterItems name="Chair" />
                    <FooterItems name="Table" />
                    <FooterItems name="Sofa" />
                    <FooterItems name="Cupboard" />
                    <FooterItems name="Lamp" />
                </div>
                <div className="col services">
                <h3>CUSTOMER SERVICE</h3>
                    <FooterItems name="My Account" />
                    <FooterItems name="Discount" />
                    <FooterItems name="Returns" />
                    <FooterItems name="Orders History" />
                    <FooterItems name="Order Tracking" />
                </div>
                <div className="col furniture">
                <h3>FURNITURE</h3>
                    <FooterItems name="Living Room Furniture" />
                    <FooterItems name="Bar Furniture" />
                    <FooterItems name="Bedroom Furniture" />
                    <FooterItems name="Kids Furniture" />
                    <FooterItems name="Accent Furniture" />
                    <FooterItems name="Book Shelves" />
                </div>
                <div className="col links">
                <h3>USEFUL LINKS</h3>
                    <FooterItems name="Promotions" />
                    <FooterItems name="Sitemap" />
                </div>
            </div>
        </div>
        <div className="bottom-bar">
            ©Neostore - All Rights Reserved
        </div>
    </div>
    </>
  )
}

export default Footer
