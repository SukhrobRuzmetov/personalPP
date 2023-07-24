import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
        disc : "Creating contucts and saving to favourites list , also you can edit , delet and remove your favourite list ",
        demo: "https://homework3-nine.vercel.app/"
    },
    {
        img : "https://miro.medium.com/v2/resize:fill:1200:632/g:fp:0.77:0.45/1*_vn_DxohPzVD6e_J5LH0Dw.png",
        disc : "Movie app , you can search all movies here and add to your favourites",
        demo: "https://sukhrobdev-movieapp.netlify.app/"
    },
    {
        img : "https://img.freepik.com/premium-vector/mobile-weather-app-interface-design-gui-elements-weather-forecast-mobile-app-realistic-phone-temperature-weather-condition-user-interface-generator-ui-ux-toolkit-vector-illustration_397674-1044.jpg",
        disc : "Weather app , you can see all the detailes about the selected city",
        demo: "https://sukhrob-weather-app.netlify.app/"
    },
    {
        img : "https://cdn1.vectorstock.com/i/1000x1000/89/65/g20-countries-flags-major-world-advanced-vector-26888965.jpg",
        disc : "Where in the world ,  here you can find all countries and their main info ",
        demo: "https://countries-webpack-project.netlify.app/"
    },
    {
        img : "https://reactjsexample.com/content/images/2018/11/todolist.jpg",
        disc : "CRUD ToDoList app ... ",
        demo: "https://pro-crud-todolist.netlify.app/"
    },
    {
      img: "https://image5.sixthtone.com/image/5/37/31.jpg",
      disc: "Create teachers and Teacher's students .. ",
      demo: "https://sukhrob-api-exam.netlify.app/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`