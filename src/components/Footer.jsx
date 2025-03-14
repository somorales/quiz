import React from "react";
import logoSofi from "../assets/images/logo-sofi.png";

export default function Footer() {
  return (
    <footer className="bg-[#E2DCCE] py-16 px-[13.75rem] absolute bottom-0 w-full ">
      <div className="flex justify-end  items-center">
        <a href="https://sofimorales.com/" target="_blank">
          <img src={logoSofi} alt="logoSofi" className="w-[8rem] h-auto" />
        </a>
      </div>
    </footer>
  );
}
