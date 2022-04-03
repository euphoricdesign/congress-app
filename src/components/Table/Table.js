import React, {useContext, useState} from 'react'
import useMembers from '../../hooks/useMembers'
import Container from 'react-bootstrap/Container';
import { myContext } from '../../context/myContext';
import './Table.scss'


export default function TableComponent() {
  const [filterByColumn, setFilterByColumn] = useState({})


  const {data} = useMembers()
  const {term,advancedSearchActive} = useContext(myContext)

  
  const rows = data && data.map((member) => ({
    _id: member.id,
    _url: `/members/${member.id}`,
    _meta: member,
    name: `${member.first_name} ${member.last_name}`,
    title: member.title,
    party: member.party,
    gender: member.gender,
  })) 


  const headers = {
    name: {
      label: "Name",
      filterType: "string",
    },
    title: {
      label: "Title",
      filterType: "string",
    },
    party: {
      label: "Party",
      filterType: "select"
    },
    gender: {
      label: "Gender",
      filterType: "select"
    },
  }

  

  const filterdUsers = () => {
    const filtered = data.filter(obj => obj.first_name.toLowerCase().includes(term.toLowerCase()))
    return filtered
  }

  return (
    <Container>
    {data !== undefined ? (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th >
                {advancedSearchActive ? `Filter by ${headers.name.label}` : `${headers.name.label}`}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                    />
                  </div>
                )}
              </th>
              <th >
                {advancedSearchActive ? `Filter by ${headers.title.label}` : `${headers.title.label}`}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                    />
                  </div>
                )}
              </th>
              <th>
                {advancedSearchActive ? `Filter by ${headers.party.label}` : `${headers.party.label}`}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
                    />
                  </div>
                )}
              </th>
              <th>
                {advancedSearchActive ? `Filter by ${headers.gender.label}` : `${headers.gender.label}`}
                {advancedSearchActive && (
                  <div className='input-container'>
                    <input 
                      type="text"
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
                  <td>{obj.party}</td>
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
