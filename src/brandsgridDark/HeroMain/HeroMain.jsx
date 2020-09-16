import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import Particles from 'react-particles-js';
import { slideSlick } from "../page-demo/script";




const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--15',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--12',
        category: '',
        title: 'Development.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--13',
        category: '',
        title: 'UX Research.',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]


class Startup extends Component{
    render(){
        
        return(
            <Fragment> 
                <div className="slider-activation slider-creative-agency with-particles" id="home">
                    <div className="frame-layout__particles">
                        <Particles
                        styles={{
                            zIndex : -3 
                        }}
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 50
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <div className="slider-activation slider-startup">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                // Start Single Slider 
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="8">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div 
                                                style={{
                                                    zIndex : 5,
                                                }} 
                                                className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 // End Single Slider 
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

            
</div>
            </Fragment>
        )
    }
}
export default Startup;