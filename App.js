import React, { useState } from 'react';
import './App.css';

const App = () => {
  const speeds = ['Медленная', 'Средняя', 'Быстрая'];
  const actions = ['Красить стену',
  'Делать перестановку в комнате',
  'Пить воду',
  'Делать зарядку',
  'Записывать голосовую почту',
  'Убирать комнату',
  'Гладить',
  'Вязать крючком',
  'Снимать видео',
  'Слушать подкаст',
  'Расчёсывать волосы',
  'Медитировать',
  'Расписывать план дня',
  'Собирать вещи',
  'Гулять по выставке',
  'Включать/выключать свет'];
  const timings = ['7.05 мин', '6.15 мин', '5 мин', '4.30 мин', '2.48 мин', '5.51 мин', '3.45', '4.33 мин', '2 мин', '6.14 мин'];

  const [selectedSpeed, setSelectedSpeed] = useState('');
  const [selectedAction, setSelectedAction] = useState('');
  const [selectedTiming, setSelectedTiming] = useState('');

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);  };

  const handleRandomize = () => {
    const speedIndex = getRandomIndex(speeds.length);
    const actionIndex = getRandomIndex(actions.length);
    const timingIndex = getRandomIndex(timings.length);
    setSelectedSpeed(speeds[speedIndex]);
    setSelectedAction(actions[actionIndex]);
    setSelectedTiming(timings[timingIndex]);
  };

  return (
    <div className="container">
      <div className="section">
        <div className="list">
          <h2>Действие:</h2>
          <p>{selectedAction}</p>
        </div>
      </div>
      
      <div className="section">
        <div className="list">
          <h2>Скорость:</h2>
          <p>{selectedSpeed}</p>
        </div>
      </div>
      
      <div className="section">
        <div className="list">
          <h2>Время:</h2>
          <p>{selectedTiming}</p>
        </div>
      </div>
      
      <button onClick={handleRandomize}>Начать</button>
    </div>
);
};

export default App;
