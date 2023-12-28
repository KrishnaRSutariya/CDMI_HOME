import React, { isValidElement } from "react";
import "./HappyStudent.css";
import { MdFormatQuote } from "react-icons/md";

const HappyStudent = () => {
  const data = [
    {
      image: "asset 38.jpeg",
      name: "Nilay Rabadiya",
      qualification: "CEO",
      company: "Techtical Solution",
      message:
        "Good place to get trained on all the programming languages! Highly qualified trainers with enthusiastic founder! Must visit for all the students who are interested to get jobs!",
    },
    {
      image: "asset 39.jpeg",
      name: "KOLADIYA MANSI",
      qualification: "UI/UX Designer",
      company: "Patoliya Infotech",
      message:
        "I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.",
    },
    {
      image: "asset 40.jpeg",
      name: "Goti Shruti",
      qualification: "Android Developer",
      company: "KD Infotech",
      message:
        "Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.",
    },
    {
      image: "asset 41.jpeg",
      name: "Ishita Chopada",
      qualification: "Flutter Developer",
      company: "Samp Technology",
      message:
        "Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!",
    },
    {
      image: "asset 42.jpeg",
      name: "Patel Harsh",
      qualification: "NodeJS Developer",
      company: "Trueline Solution",
      message:
        "Trainers are good and very supportive. creative multimedia institute provide lot of opportunities to get placed.I am happy to joined creative multimedia institute.",
    },
    {
      image: "asset 43.jpeg",
      name: "PABADIYA JAIMIN",
      qualification: "UI/UX Designer",
      company: "ViPrak Web Solutions",
      message:
        "Good institute and excellent presentation skills and if any doubts regarding topics they will clear immediately.",
    },
    {
      image: "asset 44.jpeg",
      name: "Henish Mavani",
      qualification: "CEO",
      company: "Growstar Infotech",
      message: "Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.",
    },
    {
      image: "asset 45.jpeg",
      name: "Diyora Om",
      qualification: "React JS Developer",
      company: "Artbees Solution",
      message: "One of the best blockchain Institute in surat. All staff members are really good and they explained every concept in detailed. They provide good support for placement. Thank you so much for guiding me throughout the session.",
    },
    {
      image: "asset 46.jpeg",
      name: "MALAVIYA TEJAS",
      qualification: "Front End Designer",
      company: "Microcreative",
      message: "I visited this coaching center and they treated me with good care and I am loving time here everyone is highly friendly and the learning atmosphere is great.",
    },
  ];

  return (
    <>
      <div className="Students bg-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 p-1 d-flex flex-column justify-content-between">
              <div className="partsHeading py-2 d-flex flex-column align-items-start">
                <div className="h6" style={{ margin: "10px 30px" }}>
                  HAPPY STUDENTS
                </div>
                <div className="h2">ALUMNI SPEAK</div>
              </div>
              <div>
                <MdFormatQuote className="quotes" />
                <div class="HappyStudent owl-carousel owl-theme px-2">
                  {data.map((val, i) => {
                    return (
                      <div class="item" key={i} className="m-1">
                        <div className="topContaint text-secondary">
                          {val.message}
                        </div>
                        <div className="ImgContaint py-4">
                          <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-2 offset-sm-0 offset-4 col-4 d-flex justify-contain-center">
                              <img
                                src={require(`./Images/assets/${val.image}`)}
                                className="rounded-circle w-100"
                                alt={val.name}
                                srcset=""
                              />
                            </div>
                            <div className="col-lg-10 col-md-9 col-sm-10 col-12 text-sm-start text-center">
                              <div
                                className="h6 fw-bold"
                                style={{ color: "#003366" }}
                              >
                                {val.name}
                              </div>
                              <div
                                className="h6 d-flex justify-content-sm-start justify-content-center"
                                style={{ gap: "0px 3px" }}
                              >
                                <div className="text-warning">{val.qualification} </div>
                                <span> @ </span>
                                <div className="text-capitalize">
                                  {" "}
                                  {val.company}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-1 d-flex align-items-center">
              <div className="imgShape position-relative">
                <img
                  src={require("./Images/assets/asset 47.png")}
                  className="w-100 position-absolute top-0 start-0"
                  alt="Our Happy Students"
                  srcset=""
                />
                <img
                  src={require("./Images/assets/asset 61.jpeg")}
                  className="w-100 "
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyStudent;
