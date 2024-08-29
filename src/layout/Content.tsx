import React from 'react'
import Card from '../components/Card'
import { ContentWrap } from '../styles/Content.style'
import photo1 from "../assets/Photo.png"
import SortButton from '../components/SortButton'
const Content = () => {
  return (
    <ContentWrap>
      <SortButton/>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Эвакуатор авто. Всегда на связи! Быстро и надежно'}/>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Эвакуатор авто. Всегда на связи! Быстро и надежно'}/>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Эвакуатор авто. Всегда на связи! Быстро и надежно'}/>
    </ContentWrap>
  )
}

export default Content
