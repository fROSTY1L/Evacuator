import React from 'react'
import { AddButton, Logo, LogoImg, MainButtons, Nav, NavButton, Wrap } from '../styles/Header.style'
import logo from '../assets/Logo.png'
import Title from '../components/Title'

const Header = () => {
  return (
    <>
    <Wrap className='unselectable'>
      <Logo>
        <LogoImg src={logo} alt="Тут эвакуатор"/>
      </Logo>
      <MainButtons>
        <Nav>
            <NavButton>
                О ПРОЕКТЕ
            </NavButton>
            <NavButton>
                КОНТАКТЫ
            </NavButton>
        </Nav>
        <AddButton>
            ДОБАВИТЬ ОБЪЯВЛЕНИЕ
        </AddButton>
        </MainButtons>
    </Wrap>
    <Title/>
    </>
  )
}

export default Header
