import React, {Component} from 'react'
import styled        from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PackageList} from "../../Data/PackageList.js";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Packages_Slider.css'



const CardWrapper =styled.div`
padding-top: 20%;
padding-left: 20%;
z-index:100;
align-items:center;
justify-content:center;
display:flex;
text-align:center;
`;
const ButtonWrapper=styled.div`
    padding-left: 30px;
`;


const Packages_Slider = () => {
    var settings_3 = {
        dots            : true,
        infinite        : true,
        speed           : 500,
        slidesToShow    : 3,
        slidesToScroll  : 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
          ]
        
    };
     
    return (
        <Slider {...settings_3 }>
                {PackageList.map((items,index) => (
                    <CardWrapper id='slider' >
                        <div className = "card" style={{width: '15rem'}}>
                            {/* <img src = {items.image} className="card-img-top" alt="..." height="200px"/> */}
                                <div className = "card-body">
                                    <h3 className  = "card-title">{items.title}</h3>
                                        <h5 className   = "card-text">{items.Range}</h5>
                                    <ButtonWrapper>
                                    {/* <Button primary = 'true' >Check Menue</Button> */}
                                    </ButtonWrapper>
                                </div>
                        </div>
                    </CardWrapper>
        ))}
       
</Slider>
    )
}

export default Packages_Slider
