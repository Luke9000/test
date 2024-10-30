
import styles from "./styles.module.css";
import TaskSection from "../../widgets/TaskSection/TaskSection";
import { selectRandomText } from "../../shared/libs/selectRandomText/selectRandomText";
import InputSection from "../../widgets/InputSection/InputSection";
import ExampleSection from "../../widgets/ExampleSection/ExampleSection";



const testPage = () => {

    const randomText = selectRandomText();

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