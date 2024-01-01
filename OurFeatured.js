import {  FiStar } from "react-icons/fi";
import Feature1 from "../Images/featured/1.jpg";
import Feature2 from "../Images/featured/2.jpg";
import Feature3 from "../Images/featured/3.jpg";
import Feature4 from "../Images/featured/4.jpg";


let OurFeatured =  ()  => {
    return (
        <div>
            <section id="featured" className="my-5 pb-5">
  <div className="container text-center mt-5 py-5">
    <h3>Our Featured</h3>
    <hr className="mx-auto" />
    <p>Here you can check out our new products with fair price on rymo.</p>
  </div>
  <div className="row mx-auto container-fluid">
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { Feature1 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Sport Boots</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { Feature2 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Sport Boots</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { Feature3 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Sport Boots</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { Feature4 } alt="featured img" />
      <div className="star">
        <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      </div>
      <h5 className="product-name">Sport Boots</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
  </div>
</section>
        </div>
    );
}

export default OurFeatured;