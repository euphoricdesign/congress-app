import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'first_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Title',
    Footer: 'Title',
    accessor: 'title',
    Filter: ColumnFilter
  },
  {
    Header: 'Party',
    Footer: 'Party',
    accessor: 'party',
    Filter: ColumnFilter
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
    Filter: ColumnFilter
  }
]