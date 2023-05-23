import React, {useEffect, useState} from 'react';

import {Table, BasicSelect} from '../Helpers'
import {CreateClientPoint} from '../Components'
import { GetClient, GetListSelectResponse } from '../API/GetCient'
import { GetCateringPointResponse, GetClientPoint } from '../API/GetCateringPoint';

export function ClientPoint() {

  const [dataValeSelect, setDataValeSelect] = useState<GetListSelectResponse[]>([]);
  const [dataList, setDataList] = useState<GetCateringPointResponse[]>([]);
  const [selectItem, setSelectItem] = useState(1);
  const Check = async () => {
    let value = await GetClient();
    if(value){
      setDataValeSelect(value);
    }
  };

  const getList = async () => {
    let value = await GetClientPoint({idClient: selectItem});
    if(value){
      setDataList(value);
    }
  };

  

  const setSelect = async (id: number) => {
    setSelectItem(id);
  };

  useEffect(() => {
    getList();
    Check();
  }, []);

  useEffect(() => {
    if(selectItem){
      getList();
    }
  }, [selectItem]);
  
    const columns = React.useMemo(
        () => [
          {
            Header: 'Дата',
            accessor: 'date'
          },
          {
            Header: 'Организация',
            accessor: 'name'
          },
          {
            Header: 'Событие',
            accessor: 'event'
          },
        ],
        []
      )
    return (<>
      ClientPoint
      <BasicSelect title='Клиент' data={dataValeSelect} onSetSelect={setSelect}/>
      <Table data={dataList} columns={columns}/>
    </>
    )
}

export default ClientPoint;