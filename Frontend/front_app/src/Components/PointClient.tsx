import React from 'react'

import {Table, BasicSelect} from '../Helpers'

function PointClient() {

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

      const dataSelect = React.useMemo(
        () => [
          {
            value: 1,
            titleRow: 'firstName'
          },
          {
            value: 2,
            titleRow: 'info'
          },
          {
            value: 3,
            titleRow: 'event'
          },
        ],
        []
      )
    return (<>
      ClientPoint
      <BasicSelect title='Что то' data={dataSelect}/>
      <Table data={data} columns={columns}/>
    </>
    )
}

export default PointClient;