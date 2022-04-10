import React, {useContext} from 'react'
import useMembers from '../../hooks/useMembers'
import Container from 'react-bootstrap/Container'
import { myContext } from '../../context/myContext'
import './Table.scss'


export default function TableComponent() {
  const {data} = useMembers()
  
  const {term,advancedSearchActive} = useContext(myContext)

  const partyString = (party) => {
    let partyString
    switch (party) {
      case 'D' : 
        partyString = "Democrata"
        break
      case 'R' : 
        partyString = "Republicano"
        break
      case 'ID' :
        partyString = "Independiente"
        break
      default : 
        partyString = ""
    }
    return partyString
  }

  const filterdUsers = () => {
    let resultadosBusqueda = data.filter((elemento)=>{
      // let rowToString = Object.values(elemento).join(" + ").toLowerCase();
      // let globalCondition = term !== null && rowToString.includes(term.toLowerCase());

      if(elemento.first_name.toString().toLowerCase().includes(term.toLowerCase())
      || elemento.title.toString().toLowerCase().includes(term.toLowerCase())
      || elemento.party.toString().toLowerCase().includes(term.toLowerCase())
      || elemento.gender.toString().toLowerCase().includes(term.toLowerCase())
      ){
        return elemento;
      }
    });
    return resultadosBusqueda
  }

  return (
    <Container>
    {data !== undefined ? (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th >
                {advancedSearchActive ? null : 'Name'}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                      placeholder='Search by name'
                    />
                  </div>
                )}
              </th>
              <th >
              {advancedSearchActive ? null : 'Title'}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                      placeholder='Search by title'
                    />
                  </div>
                )}
              </th>
              <th>
              {advancedSearchActive ? null : 'Party'}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                      placeholder='Search by party'
                    />
                  </div>
                )}
              </th>
              <th>
              {advancedSearchActive ? null : 'Gender'}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                      placeholder='Search by gender'
                    />
                  </div>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filterdUsers().map((obj) => {
              return (
                <tr key={obj.id}>
                  <td >{`${obj.first_name} ${data[0].last_name}`}</td>
                  <td >{obj.title}</td>
                  <td>{partyString(obj.party)}</td>
                  <td>{obj.gender}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      ): <div className="loading">
          loading...
        </div>}
    </Container>
  )
}
