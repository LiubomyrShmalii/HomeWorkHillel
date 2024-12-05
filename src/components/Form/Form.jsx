import { useContext } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './Form.module.css';
import { useNavigate } from 'react-router';
import { UserNameContext } from '../../App';

const Form = () => {

  const { userName, setUserName } = useContext(UserNameContext)
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate("/menu");
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
