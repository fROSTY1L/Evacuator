import Card from '../components/Card'
import { ContentWrap } from '../styles/Content.style'
import photo1 from "../assets/Photo.png"
import photo2 from '../assets/Photo2.png'
import SortButton from '../components/SortButton'
import SelectPage from '../components/Pagination'
const Content = () => {
  return (
    <ContentWrap>
      <SortButton/>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Эвакуатор авто. Всегда на связи! Быстро и надежно'}/>
      <Card title="Эвакуатор" img={photo2} priceCar={4000} priceMotorbike={3000} priceSUV={4000} priceMinibus={6000} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.'}/>
      <Card title="Эвакуатор" img={photo1} priceCar={5000} priceMotorbike={3000} priceSUV={null} priceMinibus={null} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Эвакуатор авто. Всегда на связи! Быстро и надежно'}/>
      <Card title="Эвакуатор" img={photo2} priceCar={4000} priceMotorbike={3000} priceSUV={4000} priceMinibus={6000} priceSuburban={50} address={'Москва, ул. Пушкина'} phoneNumber={'+7 999 99 99'} id='63' comment={'Круглосуточно. Стоянка в районе метро Технопарк, быстро доберусь в любую точку города.'}/>
      <SelectPage/>
    </ContentWrap>
  )
}

export default Content
