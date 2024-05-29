import React from "react";
import "./FarmNatural.css";

function FarmNatural() {
  return (
    <div className="farm-natural-container container flex flex-col justify-center items-center">
      <div className="farm-content">
        <p>why farm naturelle</p>
        <h2>we are organic & natural</h2>
      </div>
      <div className="image-container">
        <div className="text">
          <h4>Pesticides & chemicals free</h4>
          <p>
            At Farm Naturelle, we believe in purity from seed to harvest.
            Pesticide-free, chemical-free. Experience nature's true taste, no
            harmful residues. Your well-being, as pure as our products.
          </p>
        </div>
        <div className="text">
          <h4>Better for your Health & Planet</h4>
          <p>
            At Farm Naturelle, we prioritize well-being and the planet.
            All-natural, chemical-free products for a healthier you and a
            greener Earth.
          </p>
        </div>
        <div className="text">
          <h4>Eat Local, Eat Indian</h4>
          <p>
            Savor India's rich flavors at Farm Naturelle, celebrating "Eat
            local, eat Indian." We source locally for sustainable, traditional
            agriculture, promoting community support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FarmNatural;
