import React from 'react'
import { Button, ButtonWrap, DropdownContent, DropdownElement } from '../styles/Component styles/SortButton.style'
import { DownOutlined } from '@ant-design/icons'

const SortButton = () => {
  return (
    <ButtonWrap>
      <Button className='dropdown-btn'>Сортировка <DownOutlined /></Button>
      <DropdownContent className='dropdown-content'>
        <DropdownElement>Название</DropdownElement>
        <DropdownElement>Цена</DropdownElement>
        <DropdownElement>Местоположение</DropdownElement>
      </DropdownContent>
    </ButtonWrap>
  )
}

export default SortButton
