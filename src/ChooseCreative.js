import React from 'react'
import './ChooseCreative.css'

const ChooseCreative = () => {

    const data = [
        {
            width: "0px",
            heigth: "0px",
            color: "#F6475F",
            heading: "Industry Experts As Trainers",
            containt: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis.",
        },
        {
            width: "0px",
            heigth: "-100px",
            color: "#FFBC06",
            heading: "Latest Curriculum",
            containt: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.",
        },
        {
            width: "0px",
            heigth: "-200px",
            color: "#B3D369",
            heading: "Latest Technology",
            containt: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.",
        },
        {
            width: "0px",
            heigth: "-300px",
            color: "#554DA7",
            heading: "Interview Assistance",
            containt: "At the end of each training,our training instructor will go through the possible technical questions you may be asked.",
        },
        {
            width: "0px",
            heigth: "-400px",
            color: "#4382FF",
            heading: "Free Upgradation",
            containt: "We will be provided free upgradation for any newer version of the course you have.",
        },
        {
            width: "0px",
            heigth: "-500px",
            color: "#F94FA4",
            heading: "Lifetime Support",
            containt: "We will provide you lifetime support on all the courses you learned from us.",
        }
    ]

    return (
        <>
            <div className="bg-secondary bg-opacity-10 py-5 my-2 d-md-block d-none">
                <div className="container">
                    <div className="partsHeading py-2 d-flex flex-column align-items-center">
                        <div className="h6 text-center">READ OUR DIFFERENCE</div>
                        <div className="h2 text-center">WHY CHOOSE CREATIVE</div>
                    </div>
                    <div className="row cardCreative">
                        {
                            data.map((val, i) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-3">
                                        <div className="card p-4 border-white shadow h-100" key={i}>
                                            <div className="roundImg p-2 d-flex justify-content-center">
                                                <div
                                                    style={{ backgroundImage: `url(${require('./Images/assets/asset 62.png')})`, height: "100px", width: "100px", backgroundColor: `${val.color}`, backgroundPosition: `${val.width} ${val.heigth}` }}
                                                    className=' Img rounded-circle border'>
                                                    <div className="outLinePart w-100 h-100 rounded-circle"></div>
                                                </div>
                                                {/* <img src={require('./Images/assets/asset 62.png')} alt="" srcset="" className='bg-primary' style={{ heigth:"100px" }} /> */}
                                            </div>
                                            <div className="contentCreative py-2">
                                                <div className="h5 fw-bold text-center">
                                                    {val.heading}
                                                </div>
                                                <div className="h-6 text-dark fw-bold text-opacity-50 text-center">
                                                    {val.containt}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseCreative