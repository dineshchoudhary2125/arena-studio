import React from 'react'
import interior2 from "../assets/images/interior2.jpg"

function About() {
  return (
    <main className="h-[200vh] w-screen bg-zinc-900">
      <div className="h-fit w-full">
        <div className="relative h-[20vh] w-full bg-slate-600 ">
          <img src={interior2} alt="img" className="w-full h-full object-cover " />
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-kanit">
            About
          </h3>
        </div>

      </div>
    </main>
  );
}

export default About;
