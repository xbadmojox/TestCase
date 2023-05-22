import React, {useEffect, useState} from 'react';

import {Table, BasicSelect} from '../Helpers'
import {CreateClientPoint} from '../Components'
import { GetClient, GetListSelectResponse } from '../API/GetCient'

export function ClientPoint() {

  const [dataValeSelect, setDataValeSelect] = useState<GetListSelectResponse[]>([]);
  const CheckClient = async () => {
    let value = await GetClient();
    if(value){
      setDataValeSelect(value);
    }
      

  };
  console.log(CheckClient());
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
      <BasicSelect title='Клиент' data={dataValeSelect}/>
      <Table data={data} columns={columns}/>
    </>
    )
}

export default ClientPoint;