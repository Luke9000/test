
import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>   {
    name: string;
    label: string;
    wrapperClassName?: string
    inputClassName?: string;
    labelClassName?: string;
}



const InputField: FC<InputProps> = ({name,label,wrapperClassName,inputClassName,labelClassName,type, ...rest}) => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
        <label className={labelClassName} htmlFor={name}>{label}</label>
        <input className={clsx(inputClassName, styles.input)} id={name} {...rest}></input>  
    </div>
  )
}

export default InputField 


