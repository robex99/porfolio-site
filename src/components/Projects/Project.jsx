import React from 'react'
import styled from 'styled-components'

export default function Project(props) {
    const { img, desc, more, moreLink } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="desc">
            <h1>Descrição</h1>
            <p>{desc}
            {more ? <a href={moreLink} target="_blank" rel="noreferrer">Ver mais</a> : <></>}
            </p>
        </div>
    </Container>
  )
}

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .desc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    &:hover > img{
        transform: scale(1.3);
    }

    &:hover > .desc{
        bottom: 0;
    }

`