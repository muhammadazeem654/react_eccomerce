import "./Footer.css";

import Logo2f from "../Images/logo2.png";
import instaf1 from "../Images/insta/1.jpg";
import instaf2 from "../Images/insta/2.jpg";
import instaf3 from "../Images/insta/3.jpg";
import instaf4 from "../Images/insta/4.jpg";
import instaf5 from "../Images/insta/5.jpg";
import PayMent from "../Images/payment.png";



import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
let Footer = () => {
    return(
        <div>
            <footer className="mt-5 py-5">
  <div className="row container mx-auto pt-5">
    <div className="footer1 col-lg-3 col-md-6 col-12">
       <img src= { Logo2f } alt="" />
       <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur, eveniet aliquid facere inventore dignissimos ex dolor eum.</p>
    </div>
    <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
      <h5 className="pb-2">Featured</h5>
      <ul className="text-uppercase list-unstyled">
        <li><a href="#">men</a></li>
        <li><a href="#">women</a></li>
        <li><a href="#">boys</a></li>
        <li><a href="#">girls</a></li>
        <li><a href="#">new arrivals</a></li>
        <li><a href="#">shoes</a></li>
        <li><a href="#">clothes</a></li>


      </ul>
    </div>
    <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
      <h5 className="pb-2">Contact Us</h5>
     <div>
      <h6 className="text-uppercase">Address</h6>
      <p>123 STREET NAME, CITY, PAKISTAN</p>
     </div>
     <div>
      <h6 className="text-uppercase">Phone</h6>
      <p>(123) 456-7890</p>
     </div>
     <div>
      <h6 className="text-uppercase">Email</h6>
      <p>MAil@EXAMPLE.COM</p>
     </div>
    </div>

    <div className="footer-one col-lg-3 col-md-6 col-12">
      <h5 className="pb-2">Instagram</h5>
     <div className="row">
      <img className="img-fluid w-25 h-100 m-2" src= { instaf1 }  alt="" />
      <img className="img-fluid w-25 h-100 m-2" src= { instaf2 }  alt="" />
      <img className="img-fluid w-25 h-00 m-2" src= { instaf3 } alt="" />
      <img className="img-fluid w-25 h-00 m-2" src= { instaf4 } alt="" />
      <img className="img-fluid w-25 h-100 m-2" src= { instaf5 }  alt="" /> 
     </div>
    </div>
  </div>

  <div className="copyright mt-5">
<div className="row container mx-auto">
  <div className="col-lg-3 col-md-6 col-12 mb-4">
    <img src= { PayMent } alt="" />
  </div>
  <div className="col-lg-4 col-md-6 col-12 text-nowrap mb-2">
    <p>rymo eCommerce © 2022. All Right Reserved</p>
  </div>
  <div className="col-lg-4 col-md-6 col-12">
   <a href="#"><i className=""><FaFacebookF></FaFacebookF></i></a>
   <a href="#"><i className=''> <FaTwitter></FaTwitter></i></a>
   <a href="#"><i className=''><FaLinkedinIn></FaLinkedinIn></i></a>
  </div>
</div>
  </div>
</footer>
        </div>
    );
}

export default Footer;