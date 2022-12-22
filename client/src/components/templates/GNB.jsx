import styles from './GNB.module.scss'
import { Link } from "react-router-dom";


const GNB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3>
          <div>
            <img className={styles.item} src="/images/1o_clock.png" />
          </div>

        </h3>
      </div>
      <div>
        <div className={styles.logout}><Link to="/">logout</Link></div>
      </div>
    </div>
  )
}

export default GNB;