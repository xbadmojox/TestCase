import React from 'react'

import {Table, BasicSelect} from '../Helpers'

export function ClientPoint() {

    const columns = React.useMemo(
        () => [
          {
            Header: 'Дата',
            accessor: 'firstName'
          },
          {
            Header: 'Организация',
            accessor: 'info'
          },
          {
            Header: 'Событие',
            accessor: 'event'
          },
        ],
        []
      )
      
      const data = React.useMemo(
        () => [
          {
            firstName: 'Name',
            info: 'Info',
            event: 'какое то событие'
          },
          {
            firstName: 'Name',
            info: 'Info',
            event: 'какое то событие'
          },
          {
            firstName: 'Name',
            info: 'Info',
            event: 'какое то событие'
          },
          {
            firstName: 'Name',
            info: 'Info',
            event: 'какое то событие'
          },
          {
            firstName: 'Что то',
            info: 'Отлично',
            event: 'какое то событие'
          }
        ],
        []
      )
    return (<>
      ClientPoint
      <Table data={data} columns={columns}/>
    </>
    )
}

export default ClientPoint;