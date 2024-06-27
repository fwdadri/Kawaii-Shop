import Button from "./Button"

const Form = ({inputs, handleClick})=> {
  return (
    <form>
      {inputs.map(input => <div key={input.key}>{input}</div>)}
      <Button type="submit" handleClick={handleClick} text="Log In"/>
    </form>
  )
}

export default Form