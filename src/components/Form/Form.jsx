import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './Form.module.css';

const Form = () => {
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <div className={s.container}>
      <form className={s.form}>
        <h1>The best pizza.</h1>
        <p className={s.subtitle}>Straight out of the oven, straight to you.</p>
        <p className={s.welcome}>👉 Welcome! Please start by telling us your name:</p>
        <div onChange={handleInputChange}>
          <Input />
        </div>
        <div onClick={handleButtonClick}>
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Form;
