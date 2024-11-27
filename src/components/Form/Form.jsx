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
          <Input onChange={handleInputChange} className={s.input}/>
          <Button onClick={handleButtonClick} className={s.btn} text="Start Order"/>
      </form>
    </div>
  );
};

export default Form;
