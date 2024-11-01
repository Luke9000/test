import { clsx } from "clsx";
import styles from "./styles.module.css";

interface Props {
    taskText: string;
  }
  
  const TaskSection = ({ taskText }: Props) => {
  const extraTask1 = '*Программа должна быть реализована с помощью функции, которая принимает необходимые аргументы'
  const extraTask2 = '**Программа должна содержать функцию для самопроверки'
  
    return (
      <div className={styles.taskSection}>
        <div className={styles.titleWithText}>
          <h3>Обычная версия задания</h3>
          <p className={clsx(styles.task, styles.disableCopy)}>{taskText}</p>
        </div>
        <div className={styles.titleWithText}>
          <h3>Усложненная версия задания</h3>
          <div className={clsx(styles.extraTask, styles.disableCopy)}>
            <p className={styles.extraTask}>{extraTask1}</p>
            <p className={styles.extraTask}>{extraTask2}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskSection;