import style from "./Button.module.css"

const Button = ({isOutline, icon,  text, ...rest}) => {

  return (
    <button {...rest} className={isOutline ? style.Outline_btn: style.primary_btn}> 
    {icon}
    {text}
    </button>
  )
}

export default Button;
