import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import Ar from "../assets/arrow.json";
import Lottie from "lottie-react";

const Skills = () => {
  return (
    <>
      <div className=" bgbg">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-6xl font-bold title-font text-gray-900 font-mono">
                MY TECH STACK SKILLS
              </h1>
              <div className=" flex justify-center mt-5">
                <Lottie animationData={Ar} className=" w-40 h-40" />
              </div>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <FaHtml5 />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <FaCss3Alt />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <SiJavascript />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <SiPhp />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <SiReact />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <SiTailwindcss />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <SiNextdotjs />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <FaLaravel />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <FaGithub />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <FaGitlab />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <BiLogoGoLang />
                  </h1>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  h-full rounded-lg">
                  <h1 className=" text-8xl flex justify-center py-9 text-black">
                    <BiLogoFlutter/>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
