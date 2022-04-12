import React, { useMemo, useContext } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import {COLUMNS} from '../colums'
import useMembers from '../../hooks/useMembers'
import Container from 'react-bootstrap/Container'
import GlobalFilter from '../GlobalFilter'
import { myContext } from '../../context/myContext'
import { Link } from 'react-router-dom'
import BarLoader from "react-spinners/BarLoader";
import './Table.scss'


export default function TableComponent() {
  const {data, loading} = useMembers()
  // console.log(data)

  const {advancedSearchActive} =useContext(myContext)
  
  const columns = useMemo(() => COLUMNS,[])
  const congressPerson = useMemo(() => data,[data])

  
  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups, 
    footerGroups,
    rows, 
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({
    columns,
    data: congressPerson
  }, 
  useFilters,
  useGlobalFilter
  )

  const {globalFilter} = state

  return (
    <Container>
    {loading ? (
      <div className="loader">
        <BarLoader 
          size={80} 
          color={"#5790e6;"}
          loading={loading} 
        />
      </div>
      ) : (
      <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <div className="App">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th style={{'width':'20%'}} {...column.getHeaderProps()}>{column.render('Header')}
                    {advancedSearchActive ? <div>{column.canFilter ? column.render('Filter') : null}</div> : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}><Link className='link' to={`/members/${row.original.id}`} key={cell.row.id}>{cell.render('Cell')}</Link></td>
                  })}
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            {footerGroups.map(footerGroup => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                    <td {...column.getFooterProps}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
      </>
      )}
    </Container>
  )
}
