
import { FiShoppingCart } from 'react-icons/fi';
import { BsSearch } from "react-icons/bs";
import Logo1 from "../Images/logo1.png";
import "./MainHeader.css";
import { NavLink } from 'react-router-dom';

const MainHeader = () =>{
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
        <div className="container">
         <a className='navbar-brand' href='http://localhost:3000/'> <img src={ Logo1 } alt="LOGO" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              {/* <i id="bar" className="fa fa-bars"></i> */}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" activeClassName="active" href="/">Home</a>
              </li>
              <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/shop" >Shop</NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to="/blog" activeClassName="active">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
              <li>
                <i className='BsSearch'><BsSearch></BsSearch></i>
                <i className="FiShoppingCart"> <FiShoppingCart></FiShoppingCart></i>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container">
            {/* <a className="navbar-brand" href="http://localhost:3000/"><img src={ Logo } alt="logo" /> */}
            {/* </a> */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0"> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Solutions
                        </a> */}
                        {/* <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/magentosolutionp1">Magento Solution Package</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/magentomigartion">Magento Migration</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/solution">Ecommerce Solutions</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/digitalmarketing">Digital Marketing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/cloudservice">Cloud Service</Link>
                            </li>
                        </ul> */}
                    {/* </li> */}
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav> } */}

    </div>
  );
}
export default MainHeader;

