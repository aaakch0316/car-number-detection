import styles from './GNB.module.scss'
import { Link } from "react-router-dom";


const GNB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <h3>한시경</h3>
        <div className={styles.item}><b><Link href="#">Monitoring</Link></b></div>
        <div className={styles.item}><b><Link href="#">admin</Link></b></div>
      </div>
      <div>
        <div className={styles.logout}>logout</div>
      </div>
    </div>
  )
}

export default GNB;