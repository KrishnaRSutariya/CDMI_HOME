import React from 'react'
import './Scroller.css';

const Scroller = () => {

    const data = [
        {
            width: "0px",
            height: "0px",
            number: "14000+",
            title: "HAPPY STUDENTS"
        },
        {
            width: "0px",
            height: "-68px",
            number: "10+",
            title: "CERTIFICATION APPROVAL"
        },
        {
            width: "0px",
            height: "-138px",
            number: "70+",
            title: "CERTIFIED TEACHERS"
        },
        {
            width: "0px",
            height: "64px",
            number: "9000+",
            title: "STUDENTS PLACED"
        },
    ]

    return (
        <>
            <div className="scroller position-relative my-4 overflow-hidden">
                <div className="ScrollerImg position-relative">
                    <img src={require('./Images/assets/asset 59.jpeg')} className='Images BackImgInScroller' alt="LapTop Images" srcset="" style={{ width: "100%", objectFit: "cover" }} />
                    <div className="layer"></div>
                </div>
                <div className="ScrollerContaint w-100 h-100">
                    <div className="container h-100">
                        <div className="row h-100 text-white d-flex align-items-center">
                            {
                                data.map((val, i) => {
                                    return (
                                        <div className="col-md-3 col-6 d-flex flex-column align-items-center" key={i}>
                                            <div style={{ backgroundImage: `url(${require('./Images/assets/asset 60.png')})`, backgroundPosition: `${val.width} ${val.height}`, width: "60px", height: "60px" }}></div>
                                            <div className="h2 text-center py-1">{val.number}</div>
                                            <div className="h5 text-center">{val.title}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scroller