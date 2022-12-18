import React, { useEffect, useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [enteredID, setEnteredId] = useState("")
  const [enteredPW, setEnteredPw] = useState("")
  const [enteredPwCheck, setEnteredPwCheck] = useState("")
  const [enteredName, setEnteredName] = useState("")

  const [enteredIDIsToched, setEnteredIDIsToched] = useState(false)
  const [enteredPWIsToched, setEnteredPWIsToched] = useState(false)
  const [enteredPWcheckIsToched, setEnteredPWcheckIsToched] = useState(false)
  const [enteredNameIsToched, setEnteredNameIsToched] = useState(false)

  const [formIsValid, setFormIsValid] = useState(false)

  const enteredIDIsValid = enteredID.trim() !== ''
  const enteredPWIsValid = enteredPW.trim() !== ''
  const enteredPWCheckIsValid = enteredPwCheck.trim() !== ''
  const enteredNameIsValid = enteredName.trim() !== ''

  const idIsToched = !enteredIDIsValid && enteredIDIsToched
  const pwIsToched = !enteredPWIsValid && enteredPWIsToched
  const pwcheckIsToched = !enteredPWCheckIsValid && enteredPWcheckIsToched
  const nameIsToched = !enteredNameIsValid && enteredNameIsToched

  useEffect(() => {
    if (enteredIDIsValid && enteredPWIsValid && enteredPWCheckIsValid && enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }

  }, [enteredIDIsValid, enteredPWIsValid, enteredPWCheckIsValid, enteredNameIsValid])


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

  const idChangeblurHandler = (event) => {
    setEnteredIDIsToched(true);
  };

  const pwChangeblurHandler = (event) => {
    setEnteredPWIsToched(true);
  };

  const pwcheckChangeblurHandler = (event) => {
    setEnteredPWcheckIsToched(true);
  };

  const nameChangeblurHandler = (event) => {
    setEnteredNameIsToched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredIDIsToched(true)
    setEnteredPWIsToched(true)
    setEnteredPWcheckIsToched(true)
    setEnteredNameIsToched(true)

    if (!enteredIDIsValid) {
      return
    }

    if (!enteredPWIsValid) {
      return
    }
    if (!enteredPWCheckIsValid) {
      return
    }
    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredID, enteredPW, enteredPwCheck, enteredName)


    setEnteredId("")
    setEnteredPw("")
    setEnteredPwCheck("")
    setEnteredName("")

    setEnteredIDIsToched(false)
    setEnteredPWIsToched(false)
    setEnteredPWcheckIsToched(false)
    setEnteredNameIsToched(false)

  };

  const InputID = idIsToched ? styles.invalid : styles.control
  const InputPW = pwIsToched ? styles.invalid : styles.control
  const InputPWcheck = pwcheckIsToched ? styles.invalid : styles.control
  const InputName = nameIsToched ? styles.invalid : styles.control


  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className={styles.card}>
        <form className={styles.aaa}
          onSubmit={submitHandler}>
          <h2 className={styles.title}>Sign up</h2>

          <div className={styles.controls}>

            <div className={InputID}>
              <label htmlFor='id'>아이디</label>
              <input
                id='id'
                type="text"
                onChange={idChangeHandler}
                onBlur={idChangeblurHandler}
                value={enteredID}
              />
            </div>
            {idIsToched && (<p className={styles.caution}>아이디를 입력하세요</p>)}

            <div className={InputPW}>
              <label>비밀번호</label>
              <input
                type="password"
                onChange={pwChangeHandler}
                onBlur={pwChangeblurHandler}
                value={enteredPW}
              />
            </div>
            {pwIsToched && (<p className={styles.caution}>비밀번호를 입력하세요</p>)}

            <div className={InputPWcheck}>
              <label>비밀번호 확인</label>
              <input
                type="password"
                onChange={pwcheckChangeHandler}
                onBlur={pwcheckChangeblurHandler}
                value={enteredPwCheck}
              />
            </div>
            {pwcheckIsToched && (<p className={styles.caution}>비밀번호가 일치하지 않습니다</p>)}

            <div className={InputName}>
              <label>이름</label>
              <input
                type="text"
                onChange={nameChangeHandler}
                onBlur={nameChangeblurHandler}
                value={enteredName}
              />
            </div>
            {nameIsToched && (<p className={styles.caution}>이름을 입력하세요</p>)}


          </div>
          <div className={styles.actions}>
            <button
              onClick={navigateToHome}
              disabled={!formIsValid}
              type='submit'>가입하기
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Login;