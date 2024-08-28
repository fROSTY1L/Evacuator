import React from 'react'
import location from '../assets/weui_location-filled.png'
import { CardAddress, CardAddressTitle, CardAddressTitleImg, CardAddressTitleImgWrap, CardAddressWrap, CardContactsWrap, CardContent, CardImg, CardImgWrap, CardInfo, CardInfoPrice, CardInfoTitle, CardInfoWrap, CardTitle, CardWrap } from '../styles/Component styles/Card.style'

interface CardProps {
    id: string,
    title: string,
    priceCar: number | null,
    priceMotorbike: number | null,
    priceSUV: number | null,
    priceMinibus: number | null,
    priceSuburban: number | null,
    phoneNumber: string | null,
    address: string | null,
    img: string

}
const Card = (props: CardProps) => {
  return (
    <CardWrap>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>
        <CardImgWrap>
            <CardImg src={props.img}/>
        </CardImgWrap>
        <CardInfoWrap>
           <CardInfo>
            <CardInfoTitle>Легковой автомобоиль</CardInfoTitle>
            <CardInfoPrice>{props.priceCar != null ? props.priceCar + ' руб' : 'нет'}</CardInfoPrice>
           </CardInfo>
           <CardInfo>
            <CardInfoTitle>Мотоцикл(квадроцикл и т.д.)</CardInfoTitle>
            <CardInfoPrice>{props.priceMotorbike != null ? props.priceMotorbike + ' руб' : 'нет'}</CardInfoPrice>
           </CardInfo>
           <CardInfo>
            <CardInfoTitle>Внедорожник</CardInfoTitle>
            <CardInfoPrice>{props.priceSUV != null ? props.priceSUV + ' руб' : 'нет'}</CardInfoPrice>
           </CardInfo>
           <CardInfo>
            <CardInfoTitle>Микроавтобус</CardInfoTitle>
            <CardInfoPrice>{props.priceMinibus != null ? props.priceMinibus + ' руб' : 'нет'}</CardInfoPrice>
           </CardInfo>
           <CardInfo>
            <CardInfoTitle>Загородный тариф</CardInfoTitle>
            <CardInfoPrice>{props.priceSuburban != null ? props.priceSuburban + ' руб/км' : 'нет'}</CardInfoPrice>
           </CardInfo>
        </CardInfoWrap>
        <CardContactsWrap>
          <CardAddressWrap>
            <CardAddressTitle>
              <CardAddressTitleImgWrap>
                <CardAddressTitleImg src={location} alt=""/>
              </CardAddressTitleImgWrap>
              Место стоянки
            </CardAddressTitle>
            <CardAddress>
              {props.address}
            </CardAddress>
          </CardAddressWrap>
        </CardContactsWrap>
      </CardContent>
    </CardWrap>
  )
}

export default Card
