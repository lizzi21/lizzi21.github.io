import React, { useState, useEffect } from "react";
import "./Randomizer.css";

const speedsList = ["Скорость1", "Скорость2", "Скорость3"];
const actionsList = ["Действие1", "Действие2", "Действие3"];
const intervalsList = ["2 мин", "30 сек", "7 мин"];

function getRandomOption(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function Randomizer({ setIsRunning }) {
  const [speed, setSpeed] = useState("");
  const [action, setAction] = useState("");
  const [interval, setInterval] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSpeed(getRandomOption(speedsList));
      setAction(getRandomOption(actionsList));
      setInterval(getRandomOption(intervalsList));
    }, 180000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!speed || !action || !interval) return;
    const timeoutId = setTimeout(() => {
      setSpeed("");
      setAction("");
      setInterval("");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [speed, action, interval]);

  const handleBack = () => {
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h1 className="title">Рандомайзер</h1>
      <div className="randomizer">
        <p className="option">{speed}</p>
        <p className="option">{action}</p>
        <p className="option">{interval}</p>
      </div>
      <button className="button" onClick={handleBack}>
        Назад
      </button>
    </div>
  );
}

export default Randomizer;

