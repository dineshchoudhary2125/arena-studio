import React from 'react';

function Footer() {
  return (
    <footer className="md:h-52 w-full bg-black flex flex-col md:items-center md:justify-between">
      <nav className="h-fit w-full flex flex-col md:flex-row md:justify-evenly md:gap-5 md:pt-5 md:text-sm">
        <ul>
          <h4 className="md:text-yellow-400 md:font-bold md:pb-3">Contact</h4>
          <li>
            <a href="tel:+918766705769" className="md:text-white md:flex md:gap-8">
              <p className="md:font-bold">Call</p>
              +91 87667 05769
            </a>
          </li>
          <li>
            <a href="mailto:rohitaaglecha@gmail.com" className="md:text-white md:flex md:gap-8">
              <p>Mail</p>
              rohitaaglecha@gmail.com
            </a>
          </li>
        </ul>
        <ul>
          <h4 className="md:text-yellow-400 md:font-bold md:pb-3">Address</h4>
          <li>
            <a href="tel:+918766705769" className="md:text-white md:flex md:gap-8">
              500 Terry Francine Street<br />
              San Francisco, CA 94158
            </a>
          </li>
        </ul>
        <ul>
          <h4 className="md:text-yellow-400 md:font-bold md:pb-3">Social</h4>
          <li>
            <a href="/" className="md:text-white md:flex md:gap-8">
              Instagram
            </a>
          </li>
          <li>
            <a href="/" className="md:text-white md:flex md:gap-8">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/" className="md:text-white md:flex md:gap-8">
              Twitter(X)
            </a>
          </li>
          <li>
            <a href="/" className="md:text-white md:flex md:gap-8">
              Facebook
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:text-white">© 2024 Arena Architects.</div>
    </footer>
  );
}

export default Footer;
