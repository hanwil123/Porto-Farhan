import React from "react";
import Navbar from "../Components/Navbar";
import Lottie from "lottie-react";
import Ig from "../assets/ig.json";
import Fb from "../assets/fb.json";
import Li from "../assets/li.json";
import Crc from "../assets/crc.json";

const Contact = () => {
  return (
    <>
      <div className=" bgbg">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Lottie animationData={Crc} className=" h-60" />
            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <div class="grid grid-cols-3 ">
                <button class=" inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <Lottie animationData={Li} className=" w-28" href="https://www.linkedin.com/in/farhan-wildan-52b490256" />
                </button>
                <button class=" inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                  <Lottie animationData={Fb} className="w-28" href="https://www.facebook.com/farhan.wildan.3"/>
                </button>
                <button class=" inline-flex rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                  <Lottie animationData={Ig} className=" w-28" href="https://www.instagram.com/wildan312" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
