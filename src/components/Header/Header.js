import React, { useContext } from 'react'
import logo from '../../images/logo.webp'
import Container from 'react-bootstrap/Container';
import Button from '../Button/Button'
import { myContext } from '../../context/myContext';
import './Header.scss'

export default function Header() {
  const {term, onHandleTermSearch} = useContext(myContext)
  // console.log(term)


  return (
    <header>
      <Container className='header-container'>
        <img src={logo} alt="" />
        <div>
          <input 
            type="text" 
            placeholder='Search' 
            id='searchBox' 
            value={term} 
            onChange={onHandleTermSearch} 
          />
        </div>
        <Button />
      </Container>
    </header>
  )
}
