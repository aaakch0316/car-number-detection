import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [enteredID, setEnteredID] = useState("")
  const [enteredPW, setEnteredPW] = useState("")

  const [enteredIDIsToched, setEnteredIDIsToched] = useState(false)
  const [enteredPWIsToched, setEnteredPWIsToched] = useState(false)
  const navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false)

  const enteredIDIsValid = enteredID.trim() === 'admin'
  const enteredPWIsValid = enteredPW.trim() === '1234'

  const idIsToched = !enteredIDIsValid && enteredIDIsToched
  const pwIsToched = !enteredPWIsValid && enteredPWIsToched

  useEffect(() => {
    if (enteredIDIsValid && enteredPWIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }

  }, [enteredIDIsValid, enteredPWIsValid])

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPW(event.target.value);
  };

  const idInputBlurHandler = (event) => {
    setEnteredIDIsToched(true)
  }

  const pwInputBlurHandler = (event) => {
    setEnteredPWIsToched(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredIDIsToched(true)
    setEnteredPWIsToched(true)

    if (!enteredIDIsValid) {
      return
    }

    if (!enteredPWIsValid) {
      return
    }

    console.log(enteredID, enteredPW)

    setEnteredID("")
    setEnteredPW("")

    setEnteredIDIsToched(false)
    setEnteredPWIsToched(false)
  };

  const InputID = idIsToched ? styles.invalid : styles.control
  const InputPW = pwIsToched ? styles.invalid : styles.control

  const navigateTosignup = () => {
    navigate("/signup");
  };

  const navigateToMonitering = () => {
    navigate("/Monitering");
  };

  return (
    <React.Fragment>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src="/images/parking-lot.jpg" />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={submitHandler}>
            <h2>VCMS Login</h2>

            <div className={styles.controls}>

              <div className={InputID}>
                <label htmlFor='id'>ID</label>
                <input
                  type="text"
                  id='id'
                  onChange={idChangeHandler}
                  onBlur={idInputBlurHandler}
                  value={enteredID}
                />
              </div>
              {idIsToched && (<p className={styles.caution}>아이디를 입력하세요</p>)}


              <div className={InputPW}>
                <label htmlFor='pw'>PW</label>
                <input
                  type='password'
                  pw='pw'
                  onChange={pwChangeHandler}
                  onBlur={pwInputBlurHandler}
                  value={enteredPW}
                />
              </div>
              {pwIsToched && (<p className={styles.caution}>비밀번호를 입력하세요</p>)}


            </div>
            <div className={styles.actions}>
              <button
                onClick={navigateToMonitering}
                disabled={!formIsValid}
              >로그인
              </button>
              <button onClick={navigateTosignup}>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div >
    </React.Fragment>
  )
}

export default Login;