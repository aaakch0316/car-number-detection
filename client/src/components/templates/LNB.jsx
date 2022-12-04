import styles from './LNB.module.scss'
const LNB = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Customers Info</div>
      <div className={styles.item}>Visitor Info</div>
      <div className={styles.item}>Car Info</div>
      <div className={styles.item}>Valet Info</div>
    </div>
  )
}

export default LNB;