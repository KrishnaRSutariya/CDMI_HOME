import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaCertificate,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GrAppsRounded, GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { TiInputChecked } from "react-icons/ti";
import "./Header.css";

const Header = () => {

  const Open = () => {
    document.getElementsByClassName('Close')[0].classList.remove('d-none')
    document.getElementsByClassName('Open')[0].classList.add('d-none')

    document.getElementsByClassName('first')[0].classList.remove('d-flex')
    document.getElementsByClassName('first')[0].classList.remove('d-none')
    document.getElementsByClassName('first')[0].classList.add('d-block')
  }
  const Close = () => {
    document.getElementsByClassName('Close')[0].classList.add('d-none');
    document.getElementsByClassName('Open')[0].classList.remove('d-none');

    document.getElementsByClassName('first')[0].classList.remove('d-block')
    document.getElementsByClassName('first')[0].classList.add('d-none')
  }

  const OpenMenuCloseMenu = (id, name) => {
    // console.log(id);
    // console.log(name);
    // console.log(document.getElementsByClassName('second')[id].classList.contains('d-none'));
    if (!document.getElementsByClassName(name)[id].classList.contains('d-block')) {
      document.getElementsByClassName(name)[id].classList.add('d-block');
      document.getElementsByClassName(name)[id].classList.remove('d-none');

      document.getElementsByClassName((name == 'second' ? 'SecondDownArrow' : (name == 'third' ? 'ThirdDownArrow' : '')))[id].style.transform = "rotate(-180deg)translateX(0px)translateY(0px)";
      document.getElementsByClassName((name == 'second' ? 'SecondselectedColor' : (name == 'third' ? 'ThirdselectedColor' : '')))[id].style.color = "#FFBC06";

      document.getElementsByClassName((name == 'second' ? 'SecondDownArrow' : (name == 'third' ? 'ThirdDownArrow' : '')))[id].style.transition = ".4s";
    }
    else {
      document.getElementsByClassName(name)[id].classList.add('d-none');
      document.getElementsByClassName(name)[id].classList.remove('d-block');

      document.getElementsByClassName((name == 'second' ? 'SecondDownArrow' : (name == 'third' ? 'ThirdDownArrow' : '')))[id].style.transform = "rotate(0deg)translateX(0px)translateY(0px)";
      document.getElementsByClassName((name == 'second' ? 'SecondselectedColor' : (name == 'third' ? 'ThirdselectedColor' : '')))[id].style.color = "#2f2f2f";

      document.getElementsByClassName((name == 'second' ? 'SecondDownArrow' : (name == 'third' ? 'ThirdDownArrow' : '')))[id].style.transition = ".4s";
    }
  }

  const data = [
    {
      title: "Home",
      parts: [],
    },
    {
      title: "Courses",
      parts: [
        {
          title: "DEVELOPMENT COURSES",
          parts: [
            "Master In Flutter Development",
            "Master In Android Development",
            "Master In Game Development",
            "Master In Full Stack Development",
            "Master In Web Development",
            "Master In React Native",
            "Master In Data Science",
            "Master In ASP.net development",
          ],
        },
        {
          title: "DESIGN COURSES",
          parts: [
            "Master In Web Design",
            "Master in UI/UX Design",
            "Master In 2D/3D Animation",
            "Master In VFX",
            "Advance Graphics Design",
            "Video Editing",
            "2D/3D Game Design",
            "Maya Pro | 3Ds Max Pro",
            "Blender 3D Design",
          ],
        },
        {
          title: "PROGRAMMING IT",
          parts: [
            "C Programming",
            "C++ Programming",
            "Java Programming",
            "IOS",
            "Advance PHP",
            "Laravel",
            "Wordpress",
            "CodeIgniter",
          ],
        },
        {
          title: "TRENDY COURSES",
          parts: [
            "Node JS",
            "Master In Blockchain",
            "Angular JS",
            "React JS",
            "Ethical Hacking",
            "Unity 3D",
            "Python",
            "React Native",
            "Desktop App Development",
          ],
        },
        {
          title: "CIVIL-MECH. ENGINEERING",
          parts: [
            "AutoCAD Civil",
            "3Ds Max",
            "Google SketchUp",
            "Lumion",
            "Revit Architecture",
            "Interior & Exterior Design",
            "AutoCAD Mechanical",
            "SolidWorks",
            "Creo Parametrics 2.0",
          ],
        },
        {
          title: "BUSINESS DEVELOPMENT",
          parts: [
            "Digital Marketing",
            "Personality Development",
            "Entrepreneurship Development",
            "Corporate English",
            "Social Media Marketing",
          ],
        },
        {
          title: "SHORT TERM COURSES",
          parts: [
            "Adobe Illustrator",
            "Adobe XD",
            "Tally Accounting",
            "CCC- Basic Computer Course",
            "Photoshop",
            "CorelDraw",
          ],
        },
      ],
    },
    {
      title: "College Courses",
      parts: [],
    },
    {
      title: "Activities",
      parts: [
        {
          title: "Gallery",
          parts: [],
        },
        {
          title: "Events",
          parts: [],
        },
      ],
    },
    {
      title: "Blog",
      parts: [],
    },
    {
      title: "Know Us",
      parts: [
        {
          title: "About Us",
          parts: [],
        },
        {
          title: "Success Stories",
          parts: [],
        },
        {
          title: "Placement Partners",
          parts: [],
        },
      ],
    },
    {
      title: "Get in Touch",
      parts: [],
    },
    {
      title: "Student Zone",
      parts: [
        {
          title: "Student Login",
          parts: [],
        },
        {
          title: "Showcase",
          parts: [],
        },
      ],
    },
    // {
    //   title: "Verify Certificate",
    //   parts: [],
    // },
  ];

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "7.jpg",
    "12.jpg",
    "1-Final.jpg",
    "Game-Desgine--Devlopment.jpg",
    "2d-3d-animation.jpg",
    "banner.png",
    "beyond-the-boundaries-2023.jpg",
    "Creative-title.jpg",
    "DATA-SCIENCE-SLIDER.jpg",
    "Banner-1.jpg",
  ];

  return (
    <>
      <div className="fix-left">
        <a
          href="#"
          // title="Go to Top"
          className="position-fixed px-2 pt-0 pb-2 text-white fs-4 rounded-circle"
        // style={{scrollBehavior:"smooth"}}
        >
          <IoIosArrowUp />
        </a>
      </div>

      <div className="fix-right">
        <a
          title="Send A Message"
          className="position-fixed p-2 text-white rounded-circle"
          style={{ fontSize: "50px", cursor: "pointer" }}
        >
          <div className="img position-relative d-flex">
            <BiMessageRoundedDetail />
            <div className="top-img position-absolute">
              <img
                src="https://embed.tawk.to/_s/v4/assets/images/attention-grabbers/163-r-bl.svg"
                alt=""
                className="position-relative"
                width="150px"
                id="message"
              />
              <GrClose
                className="close position-absolute fw-bold"
                title="Close"
                onClick={() => {
                  document.getElementById("message").style.display = "none";
                }}
              />
            </div>
          </div>
        </a>
      </div>

      <div className="bg-blue">
        <div className="container py-2">
          <div className="row">
            <div className="col-2 d-none d-md-block">
              <a
                href="#"
                className="topHeader smallFont d-flex text-decoration-none w-auto"
                title="Click here for send us email"
              >
                <div className="icon pe-2">
                  <HiOutlineMail className="fs-4" />
                </div>
                <div>info@cdmi.in </div>
              </a>
            </div>
            <div className="col-2 d-none d-lg-block">
              <a
                href="#"
                className="topHeader smallFont d-flex text-decoration-none w-auto"
                title="Verify Your Certificate"
              >
                <div className="icon pe-2">
                  <FaCertificate className="fs-5" />
                </div>
                <div>Verify Certificate</div>
              </a>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-8 col-12">
              <a
                href="#"
                className="text-decoration-none w-auto text-white text-center smallFont"
                title="Have any Question? Contact Now"
              >
                <div>HAVE ANY QUESTION ? +91 90333 16003</div>
              </a>
            </div>
            <div className="col-md-3 col-sm-4 col-12">
              <div className="icon d-flex justify-content-sm-end justify-content-center">
                <a href="#">
                  <FaFacebookF
                    className="topHeader mx-1"
                    title="Follow us on Facebook"
                  />
                </a>
                <a href="#">
                  <FaTwitter
                    className="topHeader mx-1"
                    title="Follow us on Twitter"
                  />
                </a>
                <a href="#">
                  <FaGooglePlusG
                    className="topHeader mx-1"
                    title="Find us on Map"
                  />
                </a>
                <a href="#">
                  <FaLinkedin
                    className="topHeader mx-1"
                    title="Follow us on Linkedin"
                  />
                </a>
                <a href="#">
                  <FaInstagram
                    className="topHeader mx-1"
                    title="Follow us on Instagram"
                  />
                </a>
                <a href="#">
                  <FaYoutube
                    className="topHeader mx-1"
                    title="Subscribe us on Youtube"
                  />
                </a>
                <a href="#">
                  <FaWhatsapp
                    className="topHeader mx-1"
                    title="Chat on Whatsapp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white position-sticky top-0 left-0" style={{ zIndex: '2' }}>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-4 my-1 p-0 d-flex align-items-center">
                <img
                  src="https://www.cdmi.in/assets/front/images/creative-logo-blue.svg"
                  alt=""
                  style={{ width: "100%" }}
                  className="SetCDMILogo"
                />
              </div>
              <div className="col-lg-1 col-8 d-flex alien-items-center justify-content-end">
                <div className="fs-3 d-flex align-items-center position-relative my-auto">
                  <div className="Others h-100" style={{ opacity: "0" }}><GrAppsRounded /></div>
                  <div className="Close h-100 position-absolute top-0 end-0 d-none" style={{ cursor: "pointer" }} onClick={Close}><GrClose /></div>
                  <div className="Open position-absolute top-0 end-0 p-0" style={{ cursor: "pointer" }} onClick={Open}><FiMenu /></div>
                </div>
              </div>
              <div className="col-lg-9 col-12 d-flex justify-content-end p-0">
                <ul className="first justify-content-end h-100 w-100 p-0">
                  {data.map((val, i) => {
                    return (
                      // <li key={i} className="border" style={{width:`calc(100% / ${data.length})`}}>
                      <li
                        key={i}
                        className="position-relative word-wrap py-md-0 py-2"
                      >
                        <a
                          className={i == 0 ? "activeHeader SecondselectedColor d-block h-100 px-2 py-2" : "SecondselectedColor d-block h-100 px-2 py-lg-3 py-1"}
                          href={(val.parts.length != 0) ? "javascript:void(0)" : (val.title)}
                          onClick={() => { OpenMenuCloseMenu(i, "second") }}
                          
                        >
                          <div className="text-center h-100 d-flex align-items-center justify-content-between">
                            <div>{val.title}</div>
                            {/* {val.parts == [] ?  console.log(val.parts) : <IoIosArrowDown/>} */}
                            <div className="SecondDownArrow">
                              {val.parts.length == 0 ? (
                                console.log(val.parts)
                              ) : (
                                <IoIosArrowDown className="ms-1" />
                              )}
                            </div>
                          </div>
                        </a>
                        {
                          val.parts != [] ? (
                            <ul
                              className="second bg-white ps-0 shadow"
                              style={{ zIndex: "2" }}
                            >
                              <div className="layer"></div>
                              {val.parts.map((secondval, j) => {
                                return (
                                  <li
                                    key={j}
                                    className="text-nowrap position-relative"

                                  >
                                    <a
                                      href={(secondval.parts.length != 0) ? "javascript:void(0)" : (secondval.title)}
                                      className="ThirdselectedColor d-block ps-3 pe-3 py-1"
                                      onClick={() => { OpenMenuCloseMenu(j, "third") }}
                                    >
                                      <div className="text-center h-100 d-flex align-items-center justify-content-between">
                                        <div>{secondval.title}</div>
                                        <div className="ThirdDownArrow">
                                          {secondval.parts.length == 0 ? (
                                            console.log(val.parts)
                                          ) : (
                                            <IoIosArrowDown className="mx-1" />
                                          )}
                                        </div>
                                      </div>
                                    </a>
                                    {secondval.parts != [] ? (
                                      <ul
                                        className="third bg-white ps-0 shadow"
                                        style={{ zIndex: "2" }}
                                      >
                                        {secondval.parts.map((thirdval, k) => {
                                          return (
                                            <li
                                              key={k}
                                              className="text-nowrap"
                                            >
                                              <a
                                                href={thirdval}
                                                className="d-block ps-2 pe-3 py-1"
                                              >
                                                <div className="text-center h-100 d-flex align-items-center">
                                                  <TiInputChecked className="me-2" />
                                                  {thirdval}
                                                </div>
                                              </a>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    ) : (
                                      console.log()
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            console.log()
                          )
                        }
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="headerSlider owl-carousel owl-theme">
        {images.map((val, i) => {
          return (
            <div class="item" key={i}>
              <img src={require(`./Images/${val}`)} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
