import React from "react";
import "../../src/index.css";
import Lottie from "lottie-react";
import Ab from "../assets/ab.json";
import Ar from "../assets/arrow.json";


const About = () => {
  return (
    <>
      <div className=" bgbg">
        <section class="text-gray-600 body-font">
          <div class="flex flex-col text-center w-full mt-10">
            <h1 class="sm:text-3xl text-6xl font-bold title-font text-gray-900 font-mono">
              ABOUT ME
            </h1>
            <div className=" flex justify-center">
                <Lottie animationData={Ar} className=" w-40 h-40" />
              </div>
          </div>
          <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-xl lg:w-screen md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Lottie animationData={Ab} className="" />
            </div>
            <div class="flex flex-wrap grid-cols-2 gap-4  justify-center">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 bg-fuchsia-600 shadow-xl shadow-black relative z-10 w-full border-4 border-gray-200 hover:opacity-100">
                    <div className=" flex flex-col">
                      <div>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          CREATIVE
                        </h1>
                      </div>
                      <div className=" w-28 h-1 bg-yellow-300 mb-5"></div>
                      <div className=" break-words">
                        <p className=" text-black">
                          can create cool and authentic website designs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 bg-fuchsia-600 shadow-xl shadow-black relative z-10 w-full border-4 border-gray-200 hover:opacity-100">
                    <div className=" flex flex-col">
                      <div>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          WORK HARD
                        </h1>
                      </div>
                      <div className=" w-28 h-1 bg-yellow-300 mb-5"></div>
                      <div>
                        <p className=" text-black">
                          I'm the type of hard worker who will sacrifice rest
                          time if I haven't finished the job
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 bg-fuchsia-600 shadow-xl shadow-black relative z-10 w-full border-4 border-gray-200 hover:opacity-100">
                    <div className=" flex flex-col">
                      <div>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          INNOVATIVE
                        </h1>
                      </div>
                      <div className=" w-28 h-1 bg-yellow-300 mb-5"></div>
                      <div>
                        <p className=" text-black">
                          I will make the website better in features, design and
                          others
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 bg-fuchsia-600 shadow-xl shadow-black relative z-10 w-full border-4 border-gray-200 hover:opacity-100">
                    <div className=" flex flex-col">
                      <div>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          HARD FOCUS
                        </h1>
                      </div>
                      <div className=" w-28 h-1 bg-yellow-300 mb-5"></div>
                      <div>
                        <p className=" text-black">
                          I don't like delaying my work because I consider it
                          like a debt in my life
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
