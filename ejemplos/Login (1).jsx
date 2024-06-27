import { useState, createRef } from "react";
import Form from "./Form"
import Nav from "./Nav"
import Input from "./Input";
import "../Styles/Login.css"

const Login = () => {

  const tabs = ["Home", "About Us"];

  const [loggedIn, setloggedIn] = useState(false);

  const userRef = createRef();

  const passRef = createRef();

  const validate = () => {

    const userInputTxt = userRef.current.value;
    const passInputTxt = passRef.current.value;
    const userInputClass = userRef.current.classList;
    const passInputClass = passRef.current.classList;

    let valid = true;

    if (userInputTxt.trim() === "") {

      valid = false;

      userInputClass.add("error");
      
    } else {
      userInputClass.remove("error");
    }
    if (passInputTxt.trim() === "") {
      valid = false;
      passInputClass.add("error");
    } else {
      passInputClass.remove("error");
    }
    return valid;
  }

  const logIn = (e) => {
    e.preventDefault();
    if (validate())
      setloggedIn(true);
  }
  return (
    <>
      <Nav tabs={tabs} loggedIn={loggedIn}/>
      {loggedIn ? 
        <h1>Welcome!</h1> : 
        <Form inputs={[
          <Input ref={userRef} type="text" placeholder="User" key="userInput"/>,
          <Input ref={passRef} type="password" placeholder="Password" key="passInput"/>
          ]} 
          handleClick={logIn}
        />
      }
    </>
  );
}

export default Login