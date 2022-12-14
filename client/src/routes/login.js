import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPW, setEnteredPW] = useState("")

  const [enteredEmailIsToched, setEnteredEmailIsToched] = useState(false)
  const [enteredPWIsToched, setEnteredPWIsToched] = useState(false)
  const navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false)

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
  const enteredPWIsValid = enteredPW.trim() !== ''

  const idIsToched = !enteredEmailIsValid && enteredEmailIsToched
  const pwIsToched = !enteredPWIsValid && enteredPWIsToched

  useEffect(() => {
    if (enteredEmailIsValid && enteredPWIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredEmailIsValid, enteredPWIsValid])

  const idChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pwChangeHandler = (event) => {
    setEnteredPW(event.target.value);
  };

  const idInputBlurHandler = (event) => {
    setEnteredEmailIsToched(true)
  }

  const pwInputBlurHandler = (event) => {
    setEnteredPWIsToched(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredEmailIsToched(true)
    setEnteredPWIsToched(true)

    if (!enteredEmailIsValid) {
      return
    }

    if (!enteredPWIsValid) {
      return
    }

    console.log(enteredEmail, enteredPW)

    setEnteredEmail("")
    setEnteredPW("")

    setEnteredEmailIsToched(false)
    setEnteredPWIsToched(false)
  };

  const InputEmail = idIsToched ? styles.invalid : styles.control
  const InputPW = pwIsToched ? styles.invalid : styles.control

  const navigateTosignup = () => {
    navigate("/signup");
  };

  const navigateToMonitering = async () => {
    try {
      const res = await axios.post('http://localhost:3005/auth/login', {
        email: enteredEmail,
        pw: enteredPW
      })
      console.log(res)
      if (res.data.success) {
        navigate("/Monitering");
      }
    } catch (e) { console.log(e.message) }
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

              <div className={InputEmail}>
                <label htmlFor='id'>Email</label>
                <input
                  placeholder='someone@example.com'
                  type="text"
                  id='id'
                  onChange={idChangeHandler}
                  onBlur={idInputBlurHandler}
                  value={enteredEmail}
                />
              </div>
              {idIsToched && (<p className={styles.caution}>???????????? ???????????????</p>)}


              <div className={InputPW}>
                <label htmlFor='pw'>PW</label>
                <input
                  placeholder='********'
                  type='password'
                  pw='pw'
                  onChange={pwChangeHandler}
                  onBlur={pwInputBlurHandler}
                  value={enteredPW}
                />
              </div>
              {pwIsToched && (<p className={styles.caution}>??????????????? ???????????????</p>)}


            </div>
            <div className={styles.actions}>
              <button
                onClick={navigateToMonitering}
                disabled={!formIsValid}
              >?????????
              </button>
              <button onClick={navigateTosignup}>
                ????????????
              </button>
            </div>
          </form>
        </div>
      </div >
    </React.Fragment>
  )
}

export default Login;