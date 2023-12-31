import React, { useRef } from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


let data = [
  {
      img: "https://i.ibb.co/jwdFtgX/tiktok12.png",
      desc: "Levei uma conta no TikTok do ZERO aos 10Milhões de views e 1Milhão de likes em menos de 5meses",
      more: false,
  },
  {
      img: "https://i.ibb.co/YkRCLs2/blindagem1.png",
      desc: "Produção de videos de formato curto para uma loja de informática"
  },
  {
      img: "https://i.ibb.co/N1VyT5r/animeworldmap.png",
      desc: "Projeto consumindo API do google maps, criando um mapa customizado utilizando apenas HTML, CSS e Javascript",
      more: true,
      moreLink: "https://robex-custom-map.surge.sh/"
  },
  {
      img: "https://i.ibb.co/SBWDV0D/marketplace.png",
      desc: "Marketplace criado para portifólio, com multiplas telas e algumas funcionalidades de checkout utilizando React, Bootstrap, Styled Components, ContextAPI e outras tecnologias.",
      more: true,
      moreLink: "https://github.com/robex99/dreamprice-marketplace"
  },
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

export default function SliderComp() {

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

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    color: #6B7FD7;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`