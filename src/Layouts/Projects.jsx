import React from "react";
import Navbar from "../Components/Navbar";
import Ar from "../assets/arrow.json";
import Lottie from "lottie-react";

const Projects = () => {
  return (
    <>
      <div className=" bgbg">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                MY PROJECTS
              </h1>
              <div className=" flex justify-center mt-5">
                <Lottie animationData={Ar} className=" w-40 h-40" />
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <a href="https://han-weather-web.vercel.app/">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="weather.jpg"
                    />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                    Weather Web
                  </h2>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <a href="https://new-quran.vercel.app/">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="webquran.jpg"
                    />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                    Quran Online
                  </h2>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <a href="https://github.com/hanwil123/next-chat-ts">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="chat.jpg"
                    />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                    Chat Website
                  </h2>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="dashboard.jpg"
                    />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                    Website Dashboard Novel Nest
                  </h2>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <a href="https://github.com/hanwil123/JurnalBuku-Apps">
                  <div class="rounded-lg h-full overflow-hidden">
                        <img
                          src="novel-nest.jpg"
                          className="w-full h-full"
                        />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                    Novel Nest Apps
                  </h2>
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
