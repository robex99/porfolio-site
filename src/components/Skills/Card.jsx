import React from 'react'
import styled from 'styled-components';

export default function Card (props) {
    const { Icon, desc, title } = props;
  return (
    <Container>
        <span className='blue'><Icon/></span>
        <h1>{title}</h1>
        <p>{desc}</p>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`