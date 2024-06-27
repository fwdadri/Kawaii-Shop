const Button = ({type, handleClick, text, className}) => {
  return <button className={className} type={type} onClick={handleClick}>{text}</button>
}

export default Button