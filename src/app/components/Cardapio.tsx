"use client";

import React, { useState } from "react";

const MenuCardapio = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className=" w-full flex justify-center items-center flex-col text-center">
        <div className="w-full h-56 flex justify-center items-center ">
          <img
            src="https://logo.criativoon.com/wp-content/uploads/2016/07/logo-pizzaria.png"
            alt="Logo da Pizzaria"
            className=" w-full h-80 rounded-es-xlarge rounded-ee-xlarge"
          />
        </div>
        <h1 className="text-2xl font-bold font-mono mt-2 text-black">
          Nome da Pizzaria
        </h1>
      </div>

      <div className="flex justify-center w-full h-ful  gap-4 mt-20 px-4">


      </div>
    </div>
  );
};

export default MenuCardapio;
