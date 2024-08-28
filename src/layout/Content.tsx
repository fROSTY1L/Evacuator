import React from 'react'
import Card from '../components/Card'
import { ContentWrap } from '../styles/Content.style'
import photo1 from "../assets/Photo.png"
const Content = () => {
  return (
    <ContentWrap>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63'/>
    </ContentWrap>
  )
}

export default Content
