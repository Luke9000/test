import { setLocalStorageItem, getLocalStorageItem} from "../../shared/libs/manipulateLocalStarage/manipulateLocalStorage"; 
import clsx from 'clsx';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { TEST_DURATION } from "../../shared/global";


interface Props {
    className: string;
} 

const Timer = ({className}:Props) => {
    let [timeLeft, setTimeLeft] = useState(0);

  
    useEffect(() => {


        let timeLeftFromStorage = getLocalStorageItem<number>('timeLeft');
        setTimeLeft(timeLeftFromStorage !== null ? timeLeftFromStorage : TEST_DURATION);

        if (timeLeftFromStorage === 0 || timeLeftFromStorage === null) {
            timeLeft = TEST_DURATION;
            setLocalStorageItem('timeLeft',TEST_DURATION);
        }

        const interval = setInterval(() => {

            timeLeftFromStorage = getLocalStorageItem<number>('timeLeft');

            if (timeLeftFromStorage === 0 || timeLeftFromStorage === null ) {
                clearInterval(interval)
            }
            else {
                setTimeLeft(prevTimeLeft => {
                    if (prevTimeLeft > 0) 
                    {
                        const newTimeLeft = prevTimeLeft - 1;
                        setLocalStorageItem('timeLeft', newTimeLeft); 
                        return newTimeLeft;
                    } 
                    else 
                    {
                        clearInterval(interval); 
                        setLocalStorageItem('timeLeft',0)
                        return 0; 
                    }
                    
                });
            }

        }, 1000)
  

        return () => clearInterval(interval)
      }, [])



  return (
    <div className={clsx(styles.timer, className)}>
        <h3>Времени осталось</h3>
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
    </div>
  )
}

export default Timer