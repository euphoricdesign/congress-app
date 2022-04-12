import React from 'react'
import Container from 'react-bootstrap/Container';
import './ColumnFilter.scss'

export default function ColumnFilter({column}) {
  const {filterValue, setFilter} = column
  return (
      <Container className='column-filter-container'>
        <div>
          <input 
          value={filterValue || ''} 
          onChange={e => setFilter(e.target.value)} 
        />
      </div>
      </Container>
  )
}
