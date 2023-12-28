import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaHandPointRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

const Footer = () => {
  const feature = [
    "About Us",
    "Blogs",
    "Join Us",
    "Company Login",
    "Certificate Verification",
  ];
  const branch = ["Katargam", "Mota Varachha", "Adajan"];

  return (
    <>
      <div className="bg-blue">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="first-part">
                <img
                  src="https://www.cdmi.in/assets/front/images/creative-logo-white.svg"
                  alt=""
                  className="pe-5 pb-3"
                />
                <div className="text-white text-justify">
                  Creative Design and Multimedia Institute is leading computer
                  training institute in surat. We offers government approved
                  computer training courses in Surat.
                </div>
                <div className="pt-4">
                  <div className="text-warning fw-bold">FOLLOW US ON</div>
                  <div className="icon d-flex flex-wrap py-4 justify-content-xl-start justify-content-md-center justify-content-start">
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaFacebookF
                        className="topHeader mx-1"
                        title="Follow us on Facebook"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaTwitter
                        className="topHeader mx-1 fs-6"
                        title="Follow us on Twitter"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaGooglePlusG
                        className="topHeader mx-1 fs-6"
                        title="Find us on Map"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaLinkedin
                        className="topHeader mx-1 fs-6"
                        title="Follow us on Linkedin"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaInstagram
                        className="topHeader mx-1 fs-6"
                        title="Follow us on Instagram"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaYoutube
                        className="topHeader mx-1 fs-6"
                        title="Subscribe us on Youtube"
                      />
                    </a>
                    <a
                      href="#"
                      className="rounded p-1 bg-light bg-opacity-25 m-1"
                    >
                      <FaWhatsapp
                        className="topHeader mx-1 fs-6"
                        title="Chat on Whatsapp"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="second-part">
                <div className="text-white fw-bold">FEATURE LINKS</div>
                <div className="feature-links my-3">
                  {feature.map((val, i) => {
                    return (
                      <a
                        href="#"
                        className="footerFeature topHeader d-flex text-decoration-none my-1"
                        key={i}
                        style={{ width: "fit-content" }}
                      >
                        <div className="icon pe-2">
                          <FaHandPointRight />
                        </div>
                        <div className="text">{val}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="third-part">
                <div className="text-white fw-bold">CONTACT US</div>
                <div className="address-part my-3">
                  <a href="#" className="footerAddress fw-bold">
                    HEAD OFFICE - YOGICHOWK
                  </a>
                  <div className="text-white">
                    401-404, 4th Floor, City Center Complex, Nr. Yogichowk,
                    Varachha, Surat.
                  </div>
                  <div className="text-white">
                    Mo :{" "}
                    <a href="#" className="text-decoration-none text-warning">
                      +91 90333 16003
                    </a>
                  </div>
                </div>
                <div className="address-part my-3">
                  <a href="#" className="footerAddress fw-bold">
                    OTHER BRANCHES
                  </a>
                  {branch.map((val, i) => {
                    return (
                      <a
                        href="#"
                        className="footerFeature topHeader d-flex text-decoration-none my-2 fw-normal"
                        key={i}
                        style={{ width: "fit-content" }}
                      >
                        <div className="icon pe-2">
                          <BsBank2 />
                        </div>
                        <div className="text">{val}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue text-white">
        <div className="container py-4 text-lg-start text-center">
          © 2023 All Rights Reserved by Creative Design & Multimedia Institute.
        </div>
      </div>
    </>
  );
};

export default Footer;
