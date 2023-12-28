import React, { useState } from "react";
import "./OurDemand.css";

const OurDemand = () => {
  const demand = [
    "Learn Basic Computer Course from the best computer institute in surat",
    "Adobe illustrator design",
    "CCC course certificate institute in Surat",
    "Multimedia training institute in varachha",
    "Angular js training institute in Mota Varachha",
    "flutter training institute in surat",
    "flutter training course",
    "Lumion training institute in Mota Varachha",
    "PHP training institute in Mota Varachha",
    "Google sketchup training institute in Mota Varachha",
    "mechanical engineering training institute",
    "flutter training institute in varachha",
    "Unity game development course",
    "php institute in varachha",
    "Graphics design training in surat",
    "Best 3ds max training institute",
    "Game design training institute in katargam",
    "Advance java training institute",
    "Latest technology course training institute in varachha",
    "Adobe xd design training institute in surat",
  ];
  const [more,setmore] = useState(demand.length/2);

  return (
    <div>
      <div className="container pb-5 pt-3">
        <div className="h5 fw-bold">Our Demanded Course -</div>
        <div className="course d-flex flex-wrap" style={(more==demand.length/2)?{maxHeight:"290px",overflow:"hidden"}:{minHeight:"100px"}}>
          {demand.map((val,i) => {
            if (i < more) {
              return (
                <>
                  <a
                    href="#"
                    className="demandCourse border px-1 m-1"
                    title={val + "."}
                  >
                    {val}.
                  </a>
                </>
              );
            }
          })}
        </div>
        <a className="showMore text-decoration-none px-2" onClick={()=>{
            (more==demand.length/2)?setmore(demand.length):setmore(demand.length/2)
        }}>
          Show {(more==demand.length/2)?"More":"Less"}
        </a>
      </div>
    </div>
  );
};

export default OurDemand;
