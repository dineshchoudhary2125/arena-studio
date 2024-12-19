import React from 'react'
import about from "../assets/images/about.avif"
import team from "../assets/images/team.avif"
import instagram from "../assets/icons/instagram.png"
import linkedin from "../assets/icons/linkedin.png"
import facebook from "../assets/icons/facebook.png"
import whatsapp from "../assets/icons/whatsapp.png"

function About() {
  return (
    <main className="h-fit pb-16 w-screen bg-zinc-900">
      <div className="h-fit w-full flex flex-col items-center">
        <div className="relative h-[20vh] w-full ">
          <img src={about} alt="img" className="w-full h-full object-cover rounded-b-md" />
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-kanit">
            ABOUT
          </h3>
        </div>
        <div className='mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 font-kanit rounded-md'>
          <h4 className='text-yellow-400  text-xl'>ARENA STUDIO</h4>
          <p className='text-white'>Formerly known as Comfort Designers, we are a team of both young and experience creatives, trying to make this world a better place since 2 years. Now we are reborn with our creative new design philosophy.</p>
        </div>
        <div className='mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 font-kanit rounded-md'>
          <h4 className='text-yellow-400 text-xl uppercase'>Our Philosophy</h4>
          <p className='text-white'>Nature inspired solution in Architecture track down to reunite humans with their true enclosures. It should always remind us not to take Mother Nature for granted, but to work with her and let her guide you. We have studied the nature deeply, which enables us to always come up with unique, efficient and beautiful solutions.</p>
        </div>
        <div className='mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 font-kanit rounded-md'>
          <h4 className='text-yellow-400 text-3xl uppercase'>Our Team</h4>
          <p className='text-white'>Our team is made up of talented individuals who are committed to excellence and teamwork We believe in supporting one another and working together to achieve our goals and serve our clients.</p>
          <div className='h-fit w-full flex flex-col gap-5'>
            <div className='h-fit w-full'>
              <img src={team} alt="img" className='rounded-t-md'/>
              <div className='h-fit w-full bg-slate-200 font-kanit text-xl flex flex-col items-center rounded-b-md'>
                <h5 >Rohit Aaglecha</h5>
                <p className='text-sm'>Architect ,Interior Designer</p>
                <div className='py-2 h-fit w-full flex flex-row gap-2 items-center justify-center'>
                  <img src={instagram} alt="img" className='h-6'/>
                  <img src={linkedin} alt="img" className='h-6'/>
                  <img src={facebook} alt="img" className='h-6'/>
                  <img src={whatsapp} alt="img" className='h-6'/>
                </div>
              </div>
            </div>
            <div className='h-fit w-full'>
              <img src={team} alt="img" className='rounded-t-md'/>
              <div className='h-fit w-full bg-slate-200 font-kanit text-xl flex flex-col items-center rounded-b-md'>
                <h5 >Hitesh Aaglecha</h5>
                <p className='text-sm'>Interior Designer ,Landscape</p>
                <div className='py-2 h-fit w-full flex flex-row gap-2 items-center justify-center'>
                  <img src={instagram} alt="img" className='h-6'/>
                  <img src={linkedin} alt="img" className='h-6'/>
                  <img src={facebook} alt="img" className='h-6'/>
                  <img src={whatsapp} alt="img" className='h-6'/>
                </div>
              </div>
            </div>
            <div className='h-fit w-full'>
              <img src={team} alt="img" className='rounded-t-md'/>
              <div className='h-fit w-full bg-slate-200 font-kanit text-xl flex flex-col items-center rounded-b-md'>
                <h5 >Minal</h5>
                <p className='text-sm'>Interior Designer ,Landscape</p>
                <div className='py-2 h-fit w-full flex flex-row gap-2 items-center justify-center'>
                  <img src={instagram} alt="img" className='h-6'/>
                  <img src={linkedin} alt="img" className='h-6'/>
                  <img src={facebook} alt="img" className='h-6'/>
                  <img src={whatsapp} alt="img" className='h-6'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
