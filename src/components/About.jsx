import React from 'react';
import about from "../assets/images/about.avif";
import team from "../assets/images/team.avif";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/whatsapp.png";

const teamMembers = [
  {
    name: "Rohit Aaglecha",
    role: "Architect, Interior Designer",
    image: team,
    socialLinks: [instagram, linkedin, facebook, whatsapp],
  },
  {
    name: "Jane Doe",
    role: "Interior Designer",
    image: team,
    socialLinks: [instagram, linkedin, facebook, whatsapp],
  },
  {
    name: "John Smith",
    role: "Landscape Architect",
    image: team,
    socialLinks: [instagram, linkedin, facebook, whatsapp],
  },
];

function About() {
  return (
    <main className="h-fit pb-16 w-screen bg-zinc-900">
      <div className="h-fit w-full flex flex-col items-center">
        <div className="relative h-[20vh] w-full">
          <img
            src={about}
            alt="About us"
            className="w-full h-full object-cover rounded-b-md"
          />
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-kanit">
            ABOUT
          </h3>
        </div>
        <div className="mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 font-kanit rounded-md">
          <h4 className="text-yellow-400 text-xl sm:text-2xl">ARENA STUDIO</h4>
          <p className="text-white sm:text-lg">
            Formerly known as Comfort Designers, we are a team of both young
            and experienced creatives, trying to make this world a better place
            since 2 years. Now we are reborn with our creative new design
            philosophy.
          </p>
        </div>
        <div className="mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 font-kanit rounded-md">
          <h4 className="text-yellow-400 text-xl sm:text-2xl uppercase">Our Philosophy</h4>
          <p className="text-white sm:text-lg">
            Nature-inspired solutions in Architecture track down to reunite
            humans with their true enclosures. It should always remind us not
            to take Mother Nature for granted, but to work with her and let her
            guide you. We have studied nature deeply, which enables us to
            always come up with unique, efficient, and beautiful solutions.
          </p>
        </div>
        <div className="mt-5 px-3 py-5 h-fit w-[90%] bg-black flex flex-col gap-4 sm:gap-5 font-kanit rounded-md">
          <h4 className="text-yellow-400 text-3xl sm:text-4xl uppercase">Our Team</h4>
          <p className="text-white sm:text-lg">
            Our team is made up of talented individuals who are committed to
            excellence and teamwork. We believe in supporting one another and
            working together to achieve our goals and serve our clients.
          </p>
          <div className="h-fit w-full flex flex-col sm:flex-row items-center justify-center gap-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="h-fit w-full sm:w-[30%] flex flex-col items-center overflow-hidden rounded-md"
              >
                <div className="h-60 w-[90%] sm:w-full overflow-hidden rounded-t-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-fit w-[90%] sm:w-full bg-slate-200 font-kanit text-xl flex flex-col items-center rounded-b-md">
                  <h5>{member.name}</h5>
                  <p className="text-sm text-center">{member.role}</p>
                  <div className="py-2 h-fit w-full flex flex-row gap-2 items-center justify-center">
                    {member.socialLinks.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="Social icon"
                        className="h-6"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
