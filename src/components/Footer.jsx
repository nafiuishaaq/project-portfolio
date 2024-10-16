import { Link } from "react-router-dom";
import logo from "../assets/LogoWhite.svg";
import svg from "../assets/Frame.svg";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-[#003328] relative">
      <div className="absolute md:-top-6 -top-3 lg:-top-9">
        <img className="w-full h-auto" src={svg} alt="" />
      </div>

      <div className="grid md:grid-flow-col md:gap-24 lg:gap-52 py-16 px-10 md:py-20 md:px-40">
        <img className="pb-10" src={logo} alt="" />
        <span className="grid grid-cols-2 md:justify-between">
          <div className="grid">
            <Link to="/" className="font-proxima">
              Home
            </Link>
            <Link to="/about" className="font-proxima">
              About
            </Link>
            <Link to="/portfolio" className="font-proxima">
              Portfolio
            </Link>
            <Link to="/services" className="font-proxima">
              Service
            </Link>
          </div>
          <div>
            <p className="font-proxima mb-5 flex items-center gap-3">
              <FaPhoneAlt /> +234 703 164 4355
            </p>
            <p className="font-proxima mb-5">
              CA 12 & 13 Apo Spark Light Mall, Opposite Living Faith Church,
              Durumi, Abuja, FCT, Nigeria
            </p>
            <p className="font-proxima flex items-center gap-3">
              <FaRegEnvelope /> info@vblng.com
            </p>
          </div>
        </span>
      </div>
      <div className="border-b-[1px] w-full"></div>
      <div className="flex gap-4 justify-between flex-col-reverse md:flex-row p-6 px-10 lg:px-40 pb-16">
        <p className="text-center font-proxima">
          © {new Date().getFullYear()} Vernacular Build Limited. All Rights
          Reserved.
        </p>
        <div className="flex gap-5">
          <RiFacebookCircleLine />
          <FaWhatsapp />
          <BsTwitterX />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
