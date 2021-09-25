import React from "react";
import logo from "../assets/logo-dark.png";

export default function Footer() {
  return (
    <div className="flex justify-between py-5 items-center text-white w-4/5 mx-auto absolute bottom-0 left-10p" >
      <div className='flex items-center justify-evenly w-32'>
        <img src={logo} alt="poetry palette" width='12%' ></img>Poetry Palette
      </div>
      
      <p>
        Created by <a href="https://wordwarrior.in">WordWarrior</a> using{" "}
        <a href="https://cloud.google.com/text-to-speech/">
          Google's Text To Speech API
        </a>
      </p>
      <p>© 2021 All Rights Reserved, WordWarrior®</p>
    </div>
  );
}
