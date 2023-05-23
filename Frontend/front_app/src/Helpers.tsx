import React from 'react'

import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { GetListSelectResponse } from './API/GetCient'


export function Table({ columns, data } : any) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}


export function NotFoundPage() {
  return (<>
    Не туда ушел
  </>
  )
}

type typeSelect = {
  title: string,
  data: Array<GetListSelectResponse>,
  onSetSelect: (id: any) => void
}

export function BasicSelect({data, title, onSetSelect}: typeSelect) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onSetSelect(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label= {title}
          onChange={handleChange}
        >
          {data.map((dataOne) => (
            <MenuItem value={dataOne.id}>{dataOne.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}