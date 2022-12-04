import React, { useState } from 'react';
import styles from './login.module.scss';
// import "./login.css"

const Login = () => {
  const [enteredId, setEnteredId] = useState("")
  const [enteredPw, setEnteredPw] = useState("")

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPw(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      id: enteredId,
      pw: enteredPw,
    };
    console.log(ExpenseData)
    setEnteredId()
    setEnteredPw()
  };

  return (
    <div className={styles.aaa}>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>

        <div className={styles.controls}>
          <div className={styles.control}>
            <label>ID</label>
            <input type="text" value={enteredId} onChange={idChangeHandler} />
          </div>
          <div className={styles.control}>
            <label>PW</label>
            <input type="text" value={enteredPw} onChange={pwChangeHandler} />
          </div>
        </div>
        <div className={styles.actions}>
          <button type='submit'>로그인</button>
        </div>
      </form>
    </div >
  )
}

export default Login;