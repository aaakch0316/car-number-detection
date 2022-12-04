import React, { useState } from 'react';
import styles from './signup.module.scss';
// import "./signup.css"

const Login = () => {
  const [enteredId, setEnteredId] = useState("")
  const [enteredPw, setEnteredPw] = useState("")
  const [enteredPwCheck, setEnteredPwCheck] = useState("")
  const [enteredName, setEnteredName] = useState("")

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPw(event.target.value);
  };

  const pwcheckChangeHandler = (event) => {
    setEnteredPwCheck(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      id: enteredId,
      pw: enteredPw,
      pwcheck: enteredPwCheck,
      name: enteredName,
    };
    console.log(ExpenseData)
    setEnteredId("")
    setEnteredPw("")
    setEnteredPwCheck("")
    setEnteredName("")

  };

  return (
    <div className={styles.card}>
      <form className={styles.aaa}
        onSubmit={submitHandler}>
        <h2>sign up</h2>

        <div className={styles.controls}>
          <div className={styles.control}>
            <label>아이디</label>
            <input type="text" value={enteredId} onChange={idChangeHandler} />
          </div>

          <div className={styles.control}>
            <label>비밀번호</label>
            <input type="text" value={enteredPw} onChange={pwChangeHandler} />
          </div>
          <div className={styles.control}>
            <label>비밀번호 확인</label>
            <input type="text" value={enteredPwCheck} onChange={pwcheckChangeHandler} />
          </div>
          <div className={styles.control}>
            <label>이름</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler} />
          </div>

        </div>
        <div className={styles.actions}>
          <button type='submit'>회원가입</button>
        </div>
      </form>
    </div>
  )
}

export default Login;