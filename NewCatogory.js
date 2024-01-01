import "./NewCatogory.css";

import New1 from "../Images/1.jpg";
import New2 from "../Images/2.jpg";
import New3 from "../Images/3.jpg";

let NewCatogory = () => {
    return(
        <div>
            <section id="new" className="w-100">
    <div className="row p-0 m-0">
    <div className="one col-lg-4 col-md-12 col-12 p-0">
    <div className="image-container">
        <img className="img-fluid" src={New1} alt="Image" />
        <div className="text-overlay">
            <h2>Extreme Rare Sneakers</h2>
            <button className="text-uppercase">Shop Now</button>
        </div>
    </div>
</div>

    

        <div className="one col-lg-4 col-md-12 col-12 p-0">
            <img className="img-fluid" src= { New2 } alt="Image" />
            <div className="details">
                <h2>Awesome Blank Outfit</h2>
                <button className="text-uppercase">Shop Now</button>
            </div>
        </div>
        <div className="one col-lg-4 col-md-12 col-12 p-0">
            <img className="img-fluid" src= { New3 } alt="Image" />
            <div className="details">
                <h2>Sportwear Up To 50% Off</h2>
                <button className="text-uppercase">Shop Now</button>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}


export default NewCatogory;