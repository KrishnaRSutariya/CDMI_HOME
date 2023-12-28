import React from 'react'
import './OurCourse.css'
import { BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs'

const OurCourse = () => {

    const data = [
        {
            images: [
                "asset 13.webp",
                "asset 14.webp",
                "asset 15.webp",
                "asset 16.webp"
            ],
            title: "Development Courses"
        },
        {
            images: [
                "asset 17.webp",
                "asset 18.webp",
                "asset 19.webp",
                "asset 20.webp"
            ],
            title: "Design Courses"
        },
        {
            images: [
                "asset 21.webp",
                "asset 22.webp",
                "asset 23.jpeg",
                "asset 24.webp"
            ],
            title: "Programming IT"
        },
        {
            images: [
                "asset 25.webp",
                "asset 26.webp",
                "asset 27.webp",
                "asset 28.webp"
            ],
            title: "Trendy Courses"
        },
        {
            images: [
                "asset 29.webp",
                "asset 30.webp",
                "asset 31.webp",
                "asset 32.webp"
            ],
            title: "Civil-Mech. Engineering"
        },
        {
            images: [
                "asset 33.webp",
                "asset 34.jpeg",
                "asset 35.webp",
                "asset 36.webp"
            ],
            title: "Business Development"
        }
    ]

    return (
        <>
            <div className="container py-4 mt-5">
                <div className="partsHeading py-2 d-flex flex-column align-items-center">
                    <div className="h6 text-center">CREATIVE COURSE</div>
                    <div className="h2 text-center">OFFERED COURSES</div>
                </div>
                <div className="py-4">
                    <div className="OurCourse row mx-0">
                        {
                            data.map((val, i) => {
                                return (
                                    <div className="col-lg-4 col-sm-6 col-12 p-3">
                                        <div className="card shadow-sm overflow-hidden">
                                            <div className="ImgCard">
                                                <a href="#" title={val.title}>
                                                    {/* <img src={require('./Images/assets/asset 13.webp')} alt="" className='w-100' /> */}
                                                    <div className="CourseImgCard owl-carousel owl-theme">
                                                        {
                                                            val.images.map((image, j) => {
                                                                return (
                                                                    <div class="item" key={j}>
                                                                        <img src={require(`./Images/assets/${image}`)} alt="" className='w-100' srcset="" />
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="pt-3 pb-0 px-3 fw-bold fs-5">
                                                <a href="#" className='text-hover-effect text-decoration-none' title={val.title}>{val.title}</a>
                                            </div>
                                            <hr />
                                            <div className="px-3">
                                                <div className="mb-3 d-flex justify-content-between">
                                                    <div className="text-warning d-flex align-items-center">
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarFill />
                                                        <BsStarHalf />
                                                    </div>
                                                    <div className="KnowMoreBTN">
                                                        <button className='btn text-white px-md-2 py-md-1 px-1 py-1' title={val.title} > Know More..! </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="EnrollNowBTN mt-3 d-flex justify-content-center">
                    <button className='btn text-white px-3 py-2' title='View All Courses'> View All Courses <BsArrowRightShort className='fs-4' /> </button>
                </div>
            </div>
        </>
    )
}

export default OurCourse