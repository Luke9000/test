import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface BaseProps {
    label: string;
    wrapperClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    as?: "input" | "textarea"; // Проп для выбора элемента
}


interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
    as?: "input";
}


interface TextareaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
    as: "textarea";
}


type CombinedProps = InputProps | TextareaProps;

const InputField: FC<CombinedProps> = ({
    as = "input",
    label,
    wrapperClassName,
    inputClassName,
    labelClassName,
    ...rest
}) => {
    return (
        <div className={clsx(styles.wrapper, wrapperClassName)}>
            <label className={clsx(styles.label, labelClassName)} htmlFor={rest.name}>
                {label}
            </label>
            {as === "textarea" ? (
                <textarea
                    className={clsx(styles.input, inputClassName)}
                    id={rest.name}
                    {...(rest as TextareaProps)}
                />
            ) : (
                <input
                    className={clsx(styles.input, inputClassName)}
                    id={rest.name}
                    {...(rest as InputProps)}
                />
            )}
        </div>
    );
};

export default InputField;
