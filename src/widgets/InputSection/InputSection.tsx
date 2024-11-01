import { useState } from 'react'
import InputField from '../../shared/ui/inputField/InputField'
import styles from "./styles.module.css";
import Button from '../../shared/ui/button/Button';
import Timer from '../../features/timer/Timer'
import Window from '../../shared/ui/window/Window'
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '../../shared/libs/manipulateLocalStarage/manipulateLocalStorage';
import { TEST_DURATION, TEST_MIN_DURATION } from '../../shared/global';
import moment from 'moment';


interface Props {
  taskText: string;
}

const InputSection = ({ taskText }: Props) => {

  const [window, showWindow] = useState<boolean>(false)
  const [windowText, setWindowText] = useState<string>('')
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [group, setGroup] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = async () => {
    const timeLeft = getLocalStorageItem<number>('timeLeft')
    const timeSpent = timeLeft !== null? TEST_DURATION - timeLeft : null;
    const sentAt = moment().format('HH:mm DD.MM.YYYY');
    const baseUrl = 'https://script.google.com/macros/s/AKfycbwSRgZaJCI5DBKJ38Iph0wVXOGliGrEls8uCW1zRSh3CmAC2okv4aQ7Ln7dLkV_ikTo/exec'
    const basePathAndAction = '?path=Test1&action=write&'
    const url = baseUrl + basePathAndAction + `Name=${encodeURIComponent(name)}&Surname=${encodeURIComponent(surname)}&Group=${encodeURIComponent(group)}&Question=${encodeURIComponent(taskText)}&Answer=${encodeURIComponent(solution)}&Timespent=${encodeURIComponent(timeSpent == null?0:timeSpent)}&SentAt=${encodeURIComponent(sentAt)}`;
    
    if (timeSpent === null)
    {
      setWindowText('Тест окончен. Для прохождения нового теста перезагрузите страницу')
      showWindow(true);
    }
    else if (timeSpent < TEST_MIN_DURATION)
    {
      setWindowText('От начала прохождения теста прошло слишком мало времени')
      showWindow(true);
    }
    else if (name == '')
      {
        setWindowText('Вы забыли указать имя')
        showWindow(true);
      }
    else if (surname == '')
      {
        setWindowText('Вы забыли указать фамилию')
        showWindow(true);
      }
    else if (group == '')
      {
        setWindowText('Вы забыли указать группу')
        showWindow(true);
      }
    else if (solution == '')
      {
        setWindowText('Вы забыли ввести решение')
        showWindow(true);
      }
    else
    {
        setWindowText('Ответ отправлен Хорошего вам дня!');
        showWindow(true);
        setLocalStorageItem('timeLeft',0);
        removeLocalStorageItem('timeLeft');
        // console.log('timeLeft from input: ', getLocalStorageItem('timeLeft'));
        setName('');
        setSurname('');
        setGroup('');
        setSolution('');


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
           console.log('Response:', data); 
          
      
        } catch (error) {
          console.error('Ошибка при отправке запроса:', error);
        }
    }

  };

  return (
    <>
      <Window open = {window} onClose = {() => showWindow(false)} text = {windowText}></Window>
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
            <Timer className={styles.timers}></Timer>
            <Button text={'Отправить'} onClick={handleSubmit}></Button>
          </div>

      </div>
    </>
  )
}

export default InputSection