import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {useNavigate} from 'react-router-dom';
import { Table } from './Helpers';
import { GetClient } from './API/GetCient'
import './App.css';
import {CreateClientPoint, CreatePointForm} from './Components'
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';




function App() {
  const CheckClient = async () => {
    let value = await GetClient();
    console.log(value);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisiblePoint, setIsFormVisiblePoint] = useState(false);

  const navigate = useNavigate();

  const openTableClientPoint = () => {
    navigate('TableClientPoint');
  };
  const openTablePointClient = () => {
    navigate('TablePointClient');
  };
  const openFormClient = () => {
    setIsFormVisible(!isFormVisible);
  };

  const openFormPoint = () => {
    setIsFormVisiblePoint(!isFormVisiblePoint);
  };

  return (
    <div className="App">
      <div>
      <Box sx={{ minWidth: 120 }}>
        {isFormVisible
            && <CreateClientPoint
                onClose={() => setIsFormVisible(false)}
            />
        }
        {isFormVisiblePoint
            && <CreatePointForm
                onClose={() => setIsFormVisiblePoint(false)}
            />
        }
      </Box>
        <p>
          Тут будет хедер
        </p>
        <Button
          variant="outlined"
          onClick={() => openTableClientPoint()}
        >
          Таблица Клиент/Поставщики
        </Button>
        <Button
          variant="outlined"
          onClick={() => openTablePointClient()}
        >
          Таблица Поставщики/Клиент
        </Button>
        <Button
          variant="outlined"
          onClick={() => openFormClient()}
        >
          Открыть форму заполнения клиент
        </Button>
        <Button
          variant="outlined"
          onClick={() => openFormPoint()}
        >
          Открыть форму заполнения поинт
        </Button>
      </div>
    </div>
  );
}

export default App;
