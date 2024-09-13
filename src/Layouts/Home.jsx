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
              I am a driven and adaptable Junior Fullstack Developer skilled in
              creating dynamic, responsive web and Android applications. With
              expertise in React.js for modern user interfaces and Flutter for
              mobile development, I craft seamless user experiences. My
              front-end designs leverage Tailwind CSS, DaisyUI, and Flowbite for
              clean and visually compelling layouts. On the backend, I
              specialize in Golang and Laravel, delivering scalable and robust
              solutions tailored to client needs. I am passionate about
              learning, detail-oriented, and eager to tackle real-world
              projects. Notable experience includes collaborating as a Frontend
              Developer in Hackfest 2022, building interfaces and working with
              back-end teams on a web app to assess student focus levels. Let’s
              work together to bring your vision to life!
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
                2
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
                2 April 2024 - 2 September 202
              </h1>
            </div>
            <div className=" flex flex-col text-center lg:ml-10 md:ml-10">
              <h1 class="title-font lg:text-lg md:text-lg sm:text-lg mb-3 font-mono text-gray-900 font-bold">
                Assistant Lab Lepkom Gunadarma
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
