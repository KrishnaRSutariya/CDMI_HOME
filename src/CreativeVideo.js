import React from 'react'
import './CreativeVideo.css'
import { BsArrowRightShort, BsFillPlayFill } from 'react-icons/bs'
import { GiCancel } from "react-icons/gi";

const CreativeVideo = () => {

    const ShowYouTube = () => {
        document.getElementsByTagName('iframe')[0].src='https://www.youtube.com/embed/ZZpoqf-mwEM';
        document.getElementsByClassName('youtubePart')[0].classList.remove('d-none');
    }
    const HideYouTube = () => {
        document.getElementsByTagName('iframe')[0].src='';
        document.getElementsByClassName('youtubePart')[0].classList.add('d-none');
    }

    return (
        <>
            <div className="container-fluid overflow-hidden">
                <div className="CreativeVideo row my-5 py-5 mx-0">
                    <div className="col-lg-7 col-12 px-0 d-flex align-items-center">
                        <div className="VideoContaint py-5">
                            <div className="px-5 mx-5 py-1 fs-6 d-flex flex-column align-items-start align-items-xxl-center text-xxl-center text-start">
                                <div className="ps-4 partsHeading text-dark py-2 d-flex flex-column align-items-start">
                                    <div className='h6 text-opacity-75' style={{ marginLeft: "35px" }}>READ OUR DIFFERENCE</div>
                                    <div className="fw-bold">WHY CHOOSE CREATIVE</div>
                                </div>
                                <div className="ps-4 text-secondary text-justify" style={{ textAlign: "justify" }}>
                                    Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                                </div>
                                <div className="ps-4 EnrollNowBTN">
                                    <button className='btn mt-3 text-white px-3 py-2' title='Click here for Enroll Now..'> Enroll Now ..! <BsArrowRightShort className='fs-4' /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 d-flex align-items-center">
                        <div className='FullImgVideo w-100'>
                            <img src={require('./Images/assets/asset 37.jpeg')} alt="" srcset="" className='w-100' />
                            <div className="layer"></div>
                            <a onClick={ShowYouTube} className='PlayBtnVideo text-decoration-none' title='View On Youtube' style={{ cursor: "pointer" }}><BsFillPlayFill /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="youtubePart d-flex justify-content-center align-items-center d-none" onClick={HideYouTube}>
                <div className="video position-relative" style={{ width: "68%", height: "78%" }}>
                    <iframe width="100%" height="100%" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='IframVideo'></iframe>
                    <GiCancel className='CloseBtn position-absolute top-0 start-100 fs-1 translate-middle' title='Close' onClick={HideYouTube} />
                </div>
            </div>
        </>
    )
}

export default CreativeVideo