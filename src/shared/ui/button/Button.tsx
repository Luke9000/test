
import React, { FC } from 'react'
type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface ButtonProps extends BaseButtonAttributes {
    enabled?: boolean;
    className?:string,
    text: string
  }

 
  
  const Button: FC<ButtonProps> = ({enabled,className,text, ...rest}) => {
    return (
      <button 
        className={className} 
        disabled={enabled} 
        {...rest}> 

      {text}</button>
    )
  }
  
  export default Button