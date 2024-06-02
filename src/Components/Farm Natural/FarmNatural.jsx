import React from "react";
import "./FarmNatural.css";

function FarmNatural() {
  return (
    <div className="farm-natural-container container flex flex-col justify-center items-center">
      <div className="farm-content">
        <p className="mb-4 text-gray-700 text-base text-center font-medium leading-5 tracking-wider uppercase">
          why farm naturelle
        </p>
        <h2 className="mb-5 text-black text-center text-3xl font-medium leading-12 capitalize">
          we are organic & natural
        </h2>
      </div>
      <div
        className="image-container bg-no-repeat bg-cover bg-center px-60 py-60 flex justify-center gap-4
"
      >
        <div className="border-r border-r-white mr-2">
          <h4 className="block text-white mb-2 text-xl font-bold leading-7">
            Pesticides & chemicals free
          </h4>
          <p className="text-[#ececec] text-base leading-6">
            At Farm Naturelle, we believe in purity from seed to harvest.
            Pesticide-free, chemical-free. Experience nature's true taste, no
            harmful residues. Your well-being, as pure as our products.
          </p>
        </div>
        <div className="border-r border-r-white mr-2">
          <h4 className="block text-white mb-2 text-xl font-bold leading-7">
            Better for your Health & Planet
          </h4>
          <p className="text-[#ececec] text-base leading-6">
            At Farm Naturelle, we prioritize well-being and the planet.
            All-natural, chemical-free products for a healthier you and a
            greener Earth.
          </p>
        </div>
        <div className="border-r border-r-white mr-2">
          <h4 className="block text-white mb-2 text-xl font-bold leading-7">
            Eat Local, Eat Indian
          </h4>
          <p className="text-[#ececec] text-base leading-6">
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
