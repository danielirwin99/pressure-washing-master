import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#004358] flex flex-col justify-center items-center pt-14 md:pl-0 ">
      <div className="flex items-center pb-10 max-w-5xl px-7">
        {/* <a
          href="#"
          className="flex items-center cursor-pointer space-x-4 mr-10"
        >
          <figure className="h-[80px]">
            <img
              className="w-full h-full rounded-full  "
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
              alt="Our Logo"
            />
          </figure>
        </a> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:text-md">
          <ul className="flex flex-col text-xs md:text-sm lg:text-md ">
            <p className="text-white font-extrabold">QUICK LINKS</p>
            <a href="#" className="footerLinks">
              Home
            </a>
            <a href="#about" className="footerLinks">
              About Us
            </a>
            <a href="#services" className="footerLinks">
              Our Services
            </a>
            <a href="#photos" className="footerLinks">
              Before and Afters
            </a>
          </ul>
          <div className="lg:flex flex-col text-xs md:text-sm lg:text-md hidden">
            <ul className="flex flex-col text-xs md:text-sm ">
              <p className="text-white font-extrabold">SERVICES</p>
              <a className="text-white py-3 pt-5">Pressure Washing</a>
              <a className="text-white py-3 ">Driveway Sealing</a>
              <a className="text-white py-3 ">Window Cleaning</a>
              <a className="text-white py-3 ">Gutter &nbsp; Vacuuming</a>
            </ul>
          </div>
          <div className="flex flex-col text-xs md:text-sm lg:text-md -ml-3">
            <p className="text-white font-extrabold">CONTACT US</p>
            <p className="text-white space-y-1 py-4">
              We Cater All South Sydney & Illawarra Services <br /> Company
              based in in Sydney NSW
            </p>
            <p className="text-white space-y-1 py-4">
              Phone :{" "}
              <a href="tel:0417477117" className="hover:underline font-bold">
                0417 477 117
              </a>
            </p>
            <p className="text-white space-y-1 py-4">
              Email:{" "}
              <a
                className="hover:underline font-bold"
                href="mailto:email@sample.com"
              >
                irwin@powerwashings.com.au
              </a>
            </p>
            <p className="text-white space-y-1 py-4">ABN: 42 444 999 313</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-6">
        <h2 className=" text-sm lg:text-md font-semibold px-3 text-center ">
          Copyright &copy; {`${new Date().getFullYear()}`} Total Exterior
          Cleaning. &nbsp; All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
