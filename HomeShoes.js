import {  FiStar } from "react-icons/fi";

import HomeShoes1 from "../Images/shoes/8.jpg";
import HomeShoes2 from "../Images/shoes/7.jpg";
import HomeShoes3 from "../Images/shoes/6.jpg";
import HomeShoes4 from "../Images/shoes/5.jpg";

let HomeShoes = () => {
    return (
        <div>
            <section id="shoes" class="my-5 pb-5">
  <div class="container text-center mt-5 py-5">
    <h3>Running Shoes</h3>
    <hr class="mx-auto" />
    <p>Here you can check out our new products with fair price on rymo.</p>
  </div>
  <div class="row mx-auto container-fluid">
    <div class="product text-center col-lg-3 col-md-4 col-12">
      <img class="img-fluid mb-3" src= { HomeShoes1 } alt="featured img" />
      <div class="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 class="product-name">Sport Boot</h5>
      <h4 class="product-price">$92.00</h4>
      <button class="buy-btn">Buy Now</button>
    </div>
    <div class="product text-center col-lg-3 col-md-4 col-12">
      <img class="img-fluid mb-3" src={ HomeShoes2 } alt="featured img" />
      <div class="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 class="product-name">Sport Boot</h5>
      <h4 class="product-price">$92.00</h4>
      <button class="buy-btn">Buy Now</button>
    </div>
    <div class="product text-center col-lg-3 col-md-4 col-12">
      <img class="img-fluid mb-3" src={ HomeShoes3 } alt="featured img" />
      <div class="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 class="product-name">Sport Boot</h5>
      <h4 class="product-price">$92.00</h4>
      <button class="buy-btn">Buy Now</button>
    </div>
    <div class="product text-center col-lg-3 col-md-4 col-12">
      <img class="img-fluid mb-3" src={ HomeShoes4 } alt="featured img" />
      <div class="star">
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>
      <i className='fa fa-star'> <FiStar /></i>

      </div>
      <h5 class="product-name">Sport Boot</h5>
      <h4 class="product-price">$92.00</h4>
      <button class="buy-btn">Buy Now</button>
    </div>
  </div>
</section>
        </div>
    );
}

export default HomeShoes;