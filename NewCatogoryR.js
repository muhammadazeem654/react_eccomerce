import React from 'react';

import New1 from "../Images/1.jpg";
import New2 from "../Images/2.jpg";
import New3 from "../Images/3.jpg";

const NewCategory = () => {
  const sectionStyle = {
    width: '100%',
  };

  const columnStyle = {
    position: 'relative',
    padding: 0,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    transition: 'trasnform 0.3s ease',
  };

  const containerHoverStyle = {
    transform: 'scale(1.05)', // Enlarge the image on hover
  };

  const detailsStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '45%',
    left: 0,
    transition: '0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
    backgroundColor: '#2980b9',
};

  return (
    <div>
      <section id="new" className="w-100" style={sectionStyle}>
        <div className="row p-0 m-0">
          <div className="one col-lg-4 col-md-12 col-12 p-0" style={columnStyle}>
            <img className="img-fluid" src={New1} alt="Image" style={imageStyle} />
            <div className="details" style={detailsStyle}>
              <h2>Extreme Rare Sneakers</h2>
              <button className="text-uppercase" style={buttonStyle}>Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-0" style={columnStyle}>
            <img className="img-fluid" src={New2} alt="Image" style={imageStyle} />
            <div className="details" style={detailsStyle}>
              <h2>Awesome Blank Outfit</h2>
              <button className="text-uppercase" style={buttonStyle}>Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12 p-0" style={columnStyle}>
            <img className="img-fluid" src={New3} alt="Image" style={imageStyle} />
            <div className="details" style={detailsStyle}>
              <h2>Sportwear Up To 50% Off</h2>
              <button className="text-upercase" style={buttonStyle}> Shop NOw </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCategory;
