import React from 'react'
import logo from '../../images/logo.webp'
import Container from 'react-bootstrap/Container';
import Button from '../Button/Button'
import './Header.scss'

export default function Header() {



  return (
    <header>
      <Container className='header-container'>
        <img src={logo} alt="" />
        <Button />
      </Container>
    </header>
  )
}
