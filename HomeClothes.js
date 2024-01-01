import clothe1 from "../Images/clothes/1.jpg";
import clothe2 from "../Images/clothes/2.jpg";
import clothe3 from "../Images/clothes/3.jpg";
import clothe4 from "../Images/clothes/4.png";

import {  FiStar } from "react-icons/fi";


let HomeClothes = () => {
    return(
        <section id="clothes" className="my-5">
  <div className="container text-center mt-5 py-5">
    <h3>Dresses & Jumpsuits</h3>
    <hr className="mx-auto" />
    <p>Here you can check out our new products with fair price on rymo.</p>
  </div>
  <div className="row mx-auto container-fluid">
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { clothe1 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Dress</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { clothe2 } alt="featured img" />
      <div className="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 className="product-name">Dress</h5>
      <h4 className="product-price">$92.00</h4>
      <button className="buy-btn">Buy Now</button>
    </div>
    <div className="product text-center col-lg-3 col-md-4 col-12">
      <img className="img-fluid mb-3" src= { clothe3 } alt="featured img" />
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
      <img className="img-fluid mb-3" src= { clothe4 } alt="featured img" />
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

export default HomeClothes;