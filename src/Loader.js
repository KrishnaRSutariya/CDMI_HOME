import React from "react";
import "./Loader.css";

const Loader = () => {

  setTimeout(()=>{
    document.getElementsByClassName('loderCDMI')[0].classList.add('d-none');
  },2000);

  return (
    <>
      <div className="loderCDMI">
        <div class="loader"></div>
      </div>
    </>
  );
};

export default Loader;
