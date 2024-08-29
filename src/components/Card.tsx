import React from 'react'
import { EnvironmentOutlined, PhoneFilled, PhoneOutlined, WechatOutlined } from '@ant-design/icons'
import { CardAddress, CardAddressTitle, CardAddressWrap, CardChat, CardCommentary, CardContactsWrap, CardContent, CardId, CardImg, CardImgWrap, CardInfo, CardInfoPrice, CardInfoTitle, CardInfoWrap, CardPhone, CardTitle, CardWrap } from '../styles/Component styles/Card.style'

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
    comment: string,
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
              <EnvironmentOutlined />
              Место стоянки
            </CardAddressTitle>
            <CardAddress>
              <p>{props.address}</p>
            </CardAddress>
          </CardAddressWrap>
          <CardPhone>
            <PhoneOutlined rotate={110}/>
            <p>{props.phoneNumber}</p>
          </CardPhone>
          <CardChat>
            <WechatOutlined />
            <p>Написать в чат</p>
          </CardChat>
          <CardId>
            ID объявления {props.id} 
          </CardId>
        </CardContactsWrap>
      </CardContent>
      <CardCommentary>
        {props.comment}
      </CardCommentary>
    </CardWrap>
  )
}

export default Card
