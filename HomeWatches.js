
import HomeWatche1 from "../Images/watches/1.jpg";
import HomeWatche2 from "../Images/watches/2.jpg";
import HomeWatche3 from "../Images/watches/3.jpg";
import HomeWatche4 from "../Images/watches/4.jpg";

import {  FiStar } from "react-icons/fi";

let HomeWatches = () => {
    return (
        <section id="watches" className="my-5">
  <div className="container text-center mt-5 py-5">
    <h3>Best Watches</h3>
    <hr className="mx-auto" />
    <p>Here you can check out our new products with fair price on rymo.</p>
  </div>
  <div className="row mx-auto container-fluid">
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src={ HomeWatche3 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Watches</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src={ HomeWatche4 } alt="featured img" />
      <div className="star"> 
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Watches</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src={ HomeWatche2 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Watches</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { HomeWatche1 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Watches</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
  </div>
</section>
    );
}


export default HomeWatches;