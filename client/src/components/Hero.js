import React from "react";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class=" max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 dark:text-white">
            WanderWays
          </h1>
          <p class=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Are you ready to embark on a journey of a lifetime?
            <br /> We're thrilled to have you here as you step into a world of
            wanderlust and exploration. Our mission is to inspire, inform, and
            ignite your passion for travel. Whether you're a seasoned
            globetrotter or a first-time traveler, you've found your ideal
            travel companion.
          </p>
          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Blog
            </span>
          </button>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img src={hero} alt="mockup" />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Hero;
