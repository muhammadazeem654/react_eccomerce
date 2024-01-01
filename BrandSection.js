import Brand1 from "../Images/1.png";
import Brand2 from "../Images/2.png";
import Brand3 from "../Images/3.png";
import Brand4 from "../Images/4.png";
import Brand5 from "../Images/5.png";
import Brand6 from "../Images/6.png";


let BrandSection = () => {
    return(
        <div>
            <section id="brand" className="container">
    <div className="row m-0 py-5">
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand1 } alt="Brand Pic" />
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand2 } alt="Brand Pic" />
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand3 } alt="Brand Pic" />
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand4 } alt="Brand Pic" />
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand5 } alt="Brand Pic" />
        <img className="img-fluid col-lg-2 col-md-4 col-6" src= { Brand6 } alt="Brand Pic" />

    </div>
</section>
        </div>
    );
}


export default BrandSection;