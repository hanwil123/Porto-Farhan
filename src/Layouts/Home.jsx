import React from "react";

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:px-5 md:px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font lg:text-3xl md:text-xl sm:text-xl mb-7 font-mono text-gray-900 font-bold">
              FARHAN WILDAN NUGRAHA
            </h1>
            <p class=" mb-7 text-black font-mono font-bold">
              CREATIVE JUNIOR FULLSTACK DEVELOPER
            </p>
            <div className=" w-60 h-1 bg-yellow-300 mb-5"></div>
            <p className=" text-black text-xl">
              I’m a versatile Junior Fullstack Developer skilled in building
              responsive web and mobile apps. I use React.js and Flutter to
              create seamless user experiences, with clean designs powered by
              Tailwind CSS, DaisyUI,Flowbite for website and material design for
              android apps. On the backend, I work with Golang and Laravel to
              deliver scalable solutions for creating all feature program. I
              love learning, pay attention to details, and enjoy solving
              real-world problems. I also worked as a Frontend Developer during
              Hackfest 2022, helping build a web app to track student focus
              levels. Let’s bring your ideas to life! Let’s bring your ideas to
              life!
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-screen flex justify-center">
            <img src="han-compress.jpg" alt="" className=" object-cover" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:px-10 md:px-4 flex flex-col md:items-start md:text-left items-center text-center">
            <div className=" flex flex-col text-center ml-10">
              <h1 class="title-font lg:text-xl md:text-xl sm:text-xl mb-3 font-mono text-gray-900 font-bold">
                Experience in Hackfest
              </h1>
              <h1 class="title-font lg:text-4xl md:text-xl sm:text-xl mb-10 font-mono text-gray-900 font-bold">
                1
              </h1>
            </div>
            <div className=" flex flex-col text-center lg:ml-14 md:ml-10">
              <h1 class="title-font lg:text-xl md:text-xl sm:text-xl mb-3 font-mono text-gray-900 font-bold">
                Complete Projects
              </h1>
              <h1 class="title-font lg:text-4xl md:text-xl sm:text-xl mb-10 font-mono text-gray-900 font-bold">
                4
              </h1>
            </div>
            <div className=" flex flex-col text-center lg:ml-10 md:ml-10">
              <h1 class="title-font lg:text-lg md:text-lg sm:text-lg mb-3 font-mono text-gray-900 font-bold">
                Backend Dev Staff Smarter
              </h1>
              <h1 class="title-font lg:text-4lg md:text-lg sm:text-lg mb-10 font-mono text-gray-900 font-bold">
                25 April 2024 - 25 Oktober 2024
              </h1>
            </div>
            <div className=" flex flex-col text-center lg:ml-10 md:ml-10">
              <h1 class="title-font lg:text-lg md:text-lg sm:text-lg mb-3 font-mono text-gray-900 font-bold">
              laboratory assistant Lepkom Gunadarma
              </h1>
              <h1 class="title-font lg:text-4lg md:text-lg sm:text-lg mb-20 font-mono text-gray-900 font-bold">
                September 2024 - March 2025
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
