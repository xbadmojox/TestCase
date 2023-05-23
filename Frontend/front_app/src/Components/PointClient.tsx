import React, {useState, useEffect} from 'react';

import {Table, BasicSelect} from '../Helpers'
import { GetPoint, GetListSelectResponse } from '../API/GetPoint'
import { GetCateringPointResponse, GetPointClient } from '../API/GetCateringPoint';

function PointClient() {


  const [dataValeSelect, setDataValeSelect] = useState<GetListSelectResponse[]>([]);
  const [dataList, setDataList] = useState<GetCateringPointResponse[]>([]);
  const [selectItem, setSelectItem] = useState(1);

  const Check = async () => {
    let value = await GetPoint();
    if(value){
      setDataValeSelect(value);
    }
  };


  const getList = async () => {
    let value = await GetPointClient({idPoint: selectItem});
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
      <BasicSelect title='Поинт' data={dataValeSelect} onSetSelect={setSelect}/>
      <Table data={dataList} columns={columns}/>
    </>
    )
}

export default PointClient;