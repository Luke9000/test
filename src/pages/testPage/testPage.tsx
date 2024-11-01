
import styles from "./styles.module.css";
import TaskSection from "../../widgets/TaskSection/TaskSection";
import { selectRandomText } from "../../shared/libs/selectRandomText/selectRandomText";
import InputSection from "../../widgets/InputSection/InputSection";
import ExampleSection from "../../widgets/ExampleSection/ExampleSection";
import { getLocalStorageItem, setLocalStorageItem } from "../../shared/libs/manipulateLocalStarage/manipulateLocalStorage";



const testPage = () => {

    

    let randomText = ''
    const question = getLocalStorageItem<string>('Question');
    const timeLeft = getLocalStorageItem<number>('timeLeft');

    if (question == null || timeLeft == null || timeLeft < 1)
    {
      randomText = selectRandomText();
      setLocalStorageItem('Question',randomText)
    }
    else 
    {
      randomText = question;
    }
    
    
    

    return (
    <>
      <div className={styles.sections}>
        <TaskSection taskText={randomText}></TaskSection>
        <InputSection taskText={randomText}></InputSection>
        <ExampleSection></ExampleSection>
      </div>
    </>
    )
}

export default testPage