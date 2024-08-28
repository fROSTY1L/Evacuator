import React from 'react'
import backround from '../assets/Rectangle.png'
import { Container, Image, Overlay, TitleWrap, TitleContent, City } from '../styles/Component styles/Title.style'

const Title = () => {
  return (
    <Container>
        <TitleWrap>
            <TitleContent>
                Телефоны для вызова эвакуатора в <City>Москве</City>
            </TitleContent>
        </TitleWrap>
        <Image src={backround} alt='карта эвакуаторов'/>
        <Overlay/>
    </Container>
  )
}

export default Title
