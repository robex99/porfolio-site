import React from 'react'
import styled from 'styled-components'
import { FaLinkedinIn } from "react-icons/fa";
import my_pic from '../../assets/my_pic.png';


export default function ProfComponent() {
  return (
    <Container>
        <Texts>
            <h4>Olá,  <span className='blue'>Eu sou o</span></h4>
            <h1 className='blue'>Robex</h1>
            <h3>Desenvolvedor Web e Editor</h3>
            <p>Todo o site foi criado por mim, utilizando o React</p>
            <a href='#contact'>
              <button>
                Fale comigo!
              </button>
            </a>
            
            <Social>
            <p>Confira meu LinkedIn</p>
            <div className="social-icons">
              <span>
                <a href="https://www.linkedin.com/in/roberthy-lima-4a75441b7/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
        <Profile>
          <img
            src={my_pic}
            alt="profile"
          />
        </Profile>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #6B7FD7;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #6B7FD7);
    :hover {
      filter: drop-shadow(0px 10px 10px #6B7FD7);
    }
  }
`

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #6B7FD7;
      position: relative;
      transition: transform 400ms ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #6B7FD7);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &:hover img {
    transform: translateY(-10px);
  }
`