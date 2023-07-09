import React from 'react'
import styled from "styled-components";
import { BiBookContent } from "react-icons/bi";
import { AiOutlineEdit } from 'react-icons/ai'
import { CgWebsite } from "react-icons/cg";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";


export default function Skills() {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h4>
          <span className="blue">Habilidades</span>
        </h4>
        <h1>O que eu faço</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={CgWebsite}
            title={"Desenvolvedor Web"}
            desc={`Realizo o desenvolvimento de aplicações WEB, geralmente utilizando de tecnologias 
            como: HTML, CSS, Javascript, React, Node, Java, dentre outras.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={AiOutlineEdit}
            title={"Editor de Video"}
            desc={`Faço edições de videos para edits, tutoriais, vlogs, gameplays, videos comerciais e outros. 
            Sou capaz de fazer edições tanto para videos de formato longo, quanto para videos de formato curto.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={BiBookContent}
            title={"Criador de conteúdo"}
            desc={`Crio conteúdo para canais pessoais e para clientes, planejando o 
            roteiro do video visando atingir um grande público e uma ótima qualidade.`}
          />
        </Slide>
      </Cards>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`