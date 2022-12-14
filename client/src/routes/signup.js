import React, { useEffect, useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import useInput from './useInput.js'

const Signup = () => {
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: hasErrorEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailChangeblurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== '' && value.includes('@'))

  const {
    value: enteredPW,
    isValid: enteredPWIsValid,
    hasError: hasErrorPW,
    valueChangeHandler: PWChangeHandler,
    inputBlurHandler: PWChangeblurHandler,
    reset: resetPWInput,
  } = useInput(value => value.trim() !== '' && value.trim() !== '')

  const {
    value: enteredPWcheck,
    isValid: enteredPWcheckIsValid,
    hasError: hasErrorPWcheck,
    valueChangeHandler: PWcheckChangeHandler,
    inputBlurHandler: PWcheckChangeblurHandler,
    reset: resetPWcheckInput,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: hasErrorName,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameChangeblurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '')


  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (enteredEmailIsValid &&
      enteredPWIsValid &&
      enteredPWcheckIsValid &&
      enteredNameIsValid &&
      (enteredPW === enteredPWcheck
      )) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredEmailIsValid, enteredPWIsValid, enteredPWcheckIsValid, enteredNameIsValid, enteredPW, enteredPWcheck])

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid) {
      return
    }
    if (!enteredPWIsValid) {
      return
    }
    if (!enteredPWcheckIsValid) {
      return
    }
    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredEmail, enteredPW, enteredPWcheck, enteredName)

    resetEmailInput()
    resetPWInput()
    resetPWcheckInput()
    resetNameInput()
  };

  const InputEmail = hasErrorEmail ? styles.invalid : styles.control
  const InputPW = hasErrorPW ? styles.invalid : styles.control
  const InputPWcheck = hasErrorPWcheck ? styles.invalid : styles.control
  const InputName = hasErrorName ? styles.invalid : styles.control

  const navigateToHome = async () => {
    console.log(enteredEmail, enteredPW, enteredName)
    try {
      const res = await axios.post('http://localhost:3005/auth/register', {
        email: enteredEmail,
        name: enteredName,
        pw: enteredPW
      })
    } catch (e) { console.log(e.message) }
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className={styles.card}>
        <form className={styles.aaa}
          onSubmit={submitHandler}>
          <h2 className={styles.title}>Sign up</h2>

          <div className={styles.controls}>

            <div className={InputEmail}>
              <label htmlFor='email'>?????????</label>
              <input
                id='email'
                type="text"
                onChange={emailChangeHandler}
                onBlur={emailChangeblurHandler}
                value={enteredEmail}
              />
            </div>
            {hasErrorEmail && (<p className={styles.caution}>???????????? ???????????????</p>)}

            <div className={InputPW}>
              <label>????????????</label>
              <input
                type="password"
                onChange={PWChangeHandler}
                onBlur={PWChangeblurHandler}
                value={enteredPW}
              />
            </div>
            {hasErrorPW && (<p className={styles.caution}>??????????????? ???????????????</p>)}

            <div className={InputPWcheck}>
              <label>???????????? ??????</label>
              <input
                type="password"
                onChange={PWcheckChangeHandler}
                onBlur={PWcheckChangeblurHandler}
                value={enteredPWcheck}
              />
            </div>
            {hasErrorPWcheck && (<p className={styles.caution}>???????????? ???????????????</p>)}
            {(enteredPW !== enteredPWcheck) && (<p className={styles.caution}>??????????????? ???????????? ????????????</p>)}

            <div className={InputName}>
              <label>??????</label>
              <input
                type="text"
                onChange={NameChangeHandler}
                onBlur={NameChangeblurHandler}
                value={enteredName}
              />
            </div>
            {hasErrorName && (<p className={styles.caution}>????????? ???????????????</p>)}

          </div>
          <div className={styles.actions}>
            <button
              onClick={navigateToHome}
              disabled={!formIsValid}
              type='submit'>????????????
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Signup;