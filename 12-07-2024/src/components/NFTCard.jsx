import React from 'react';
import equilibrium from '../assets/images/image-equilibrium.jpg';
import ethereumIcon from '../assets/images/icon-ethereum.svg';
import clockIcon from '../assets/images/icon-clock.svg';
import avatar from '../assets/images/image-avatar.png';

const NFTCard = () => {
  return (
    <div className="max-w-sm bg-[#15253f] rounded-lg shadow-lg shadow-[#09182b] p-6">
      <img src={equilibrium} alt="Equilibrium" className="rounded-lg" />
      <h3 className="text-[#f3fcff] text-xl mt-4">Equilibrium #3429</h3>
      <p className="text-[#8096b5] mt-2">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <img src={ethereumIcon} alt="Ethereum" className="h-5 w-5" />
          <span className="text-[#71e2ea] ml-2">0.041 ETH</span>
        </div>
        <div className="flex items-center">
          <img src={clockIcon} alt="Clock" className="h-5 w-5" />
          <span className="text-[#9cb2dc] ml-2">3 days left</span>
        </div>
      </div>
      <hr className="border-[#2d3d57] my-4" />
      <div className="flex items-center">
        <img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full border border-[#2d3d57]" />
        <div className="ml-4">
          <span className="text-[#8d9fbb]">Creation of</span>
          <span className="text-[#cdd7e8] font-semibold"> Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
