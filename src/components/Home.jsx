import React from 'react';
import { NavLink } from 'react-router-dom';
import welcomePageVideo from '../assets/mp4/welcomePageVideo.mp4';

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        src={welcomePageVideo}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Crafting the Perfect Space for You.</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Architecture | Interior Design | Landscape
        </p>
        <NavLink
          to="/contact"
          className="mt-6 px-6 py-3 bg-black text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Home;