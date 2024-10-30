import React, { useState } from 'react'
import InputField from '../../shared/ui/inputField/InputField'
import styles from "./styles.module.css";
import Button from '../../shared/ui/button/Button';


interface Props {
  taskText: string;
}

const InputSection = ({ taskText }: Props) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [group, setGroup] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = async () => {
    const baseUrl = 'https://script.google.com/macros/s/AKfycbwSRgZaJCI5DBKJ38Iph0wVXOGliGrEls8uCW1zRSh3CmAC2okv4aQ7Ln7dLkV_ikTo/exec'
    const basePathAndAction = '?path=Test1&action=write&'
    const url = baseUrl + basePathAndAction + `Name=${encodeURIComponent(name)}&Surname=${encodeURIComponent(surname)}&Group=${encodeURIComponent(group)}&Question=${encodeURIComponent(taskText)}&Answer=${encodeURIComponent(solution)}&Timespent=${'53'}`;
    console.log(url); 

    try {
      const response = await fetch(url, {
        redirect: "follow",
        method: 'GET',
        headers: {
          // "Content-Type": "application/json",
          'Content-Type': "text/plain;charset=utf-8"
        },
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
  
      const data = await response.json(); 
      console.log('Ответ от сервера:', data); 
  
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  return (
    <>
      <div className={styles.horizontalInputs}>
        <div className={styles.verticalInputs}>
          <InputField 
              name='Name' 
              label='Имя' 
              placeholder='Иван' 
              labelClassName={styles.label} 
              inputClassName={styles.input}
              value={name} 
              onChange={(e) => setName(e.target.value)}
          />

          <InputField 
              name='surName' 
              label='Фамилия' 
              placeholder='Иванов' 
              labelClassName={styles.label} 
              inputClassName={styles.input}
              value={surname} 
              onChange={(e) => setSurname(e.target.value)}  
          />

          <InputField 
              name='Group' 
              label='Группа' 
              placeholder='1-МД-1' 
              labelClassName={styles.label} 
              inputClassName={styles.input}
              value={group} 
              onChange={(e) => setGroup(e.target.value)}
          />
        </div>

        <InputField 
              as='textarea'
              name='Solution' 
              label='Решение' 
              placeholder='a = int(input("Введите число"))...' 
              inputClassName={styles.inputBig} 
              wrapperClassName={styles.wrapperInputBig}
              value={solution} 
              onChange={(e) => setSolution(e.target.value)}
          />

          <div className={styles.timerAndSubmit}>
            <div className={styles.timers}></div>
            <Button text={'Отправить'} onClick={handleSubmit}></Button>
          </div>

      </div>
    </>
  )
}

export default InputSection