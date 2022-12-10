import styles from './LNB.module.scss'
import { Link } from "react-router-dom";

const LNB = () => {
  return (
    <div className={styles.container}>
      <Link to='/customer' style={{ textDecoration: 'none' }}>
        <div className={styles.item}>Customers Info</div>
      </Link>
      <Link to='/visitor-access' style={{ textDecoration: 'none' }}>
        <div className={styles.item}>Visitor Info</div>
      </Link>
      <Link to='/analysis' style={{ textDecoration: 'none' }}>
        <div className={styles.item}>Analysis</div>
      </Link>
      {/* <div className={styles.item}>
        <Link to=''>Car Info</Link>
      </div>
      <div className={styles.item}>
        <Link to=''>Valet Info</Link>
      </div> */}
      <hr className={styles.line} />
      <Link to='/Monitering' style={{ textDecoration: 'none' }}>
        <div className={styles.item}>Worker Monitering</div>
      </Link>
      <Link to='/employees' style={{ textDecoration: 'none' }}>
        <div className={styles.item}>Employees</div>
      </Link>
    </div>
  )
}

export default LNB;