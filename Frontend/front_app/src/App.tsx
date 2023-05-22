import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {useNavigate} from 'react-router-dom';
import { Table } from './Helpers';
import { GetClient } from './API/GetCient'
import './App.css';
import {CreateClientPoint} from './Components'


import Button from '@mui/material/Button';




function App() {
  const CheckClient = async () => {
    let value = await GetClient();
    console.log(value);
  };
  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate();

  const openTableClientPoint = () => {
    navigate('TableClientPoint');
  };
  const openTablePointClient = () => {
    navigate('TablePointClient');
  };
  const openForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
      {isFormVisible
            && <CreateClientPoint
                onClose={() => setIsFormVisible(false)}
            />
        }
        <p>
          Тут будет хедер
        </p>
        <Button
          onClick={() => openTableClientPoint()}
        >
          Таблица Клиент/Поставщики
        </Button>
        <Button
          onClick={() => openTablePointClient()}
        >
          Таблица Поставщики/Клиент
        </Button>
        <Button
          onClick={() => openForm()}
        >
          Открыть форму заполнения
        </Button>
      </header>
    </div>
  );
}

export default App;
