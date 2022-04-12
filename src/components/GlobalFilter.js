import React from 'react'
import Container from 'react-bootstrap/Container';
import './GlobalFilter.scss'

export default function globalFilter({filter, setFilter}) {
  return (
      <Container className='filter-container'>
        <div>
          <input 
          value={filter || ''} 
          onChange={e => setFilter(e.target.value)} 
          placeholder='Search' 
        />
      </div>
      </Container>
  )
}
