import React from 'react'
import './OurPartner.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const OurPartener = () => {

    const images = [
        ["sigma.png", 'Sigma'],
        ["beyond.png", 'Beyond'],
        ["icanstudioz.png", 'Icanstudioz'],
        ["cloud-brain-technologies-pvt-ltd.png", 'Cloud-Brain-Technologies-PVT-LTD'],
        ["Savyasachi-Infotech.png", 'Savyasachi-Infotech'],
        ["bytez.png", 'Bytez'],
        ["varni-graphics.png", 'Varni-Graphics'],
        ["siya-soft.png", 'Siya-Soft'],
        ["riseup.png", 'Riseup'],
        ["max-media.png", 'Max-Media']
    ];

    return (
        <>
            <div className="container my-3">
                <div className="partsHeading py-2 d-flex flex-column align-items-center">
                    <div className="h6 text-center">STUDENT PLACEMENT</div>
                    <div className="h2 text-center">OUR RECRUITMENT PARTNERS</div>
                </div>
                <div class="ourPartner owl-carousel owl-theme pt-4">
                    {
                        images.map((val, i) => {

                            const renderTooltip = (props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                    {val[1]}
                                </Tooltip>
                            );

                            return (
                                <div class="item" key={i} className='border m-1'>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <a href="/" target='_blank'>
                                            <img src={require(`./Images/assets/${val[0]}`)} alt={val[1]} className='topHeader border' srcset="" />
                                        </a>
                                    </OverlayTrigger>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OurPartener