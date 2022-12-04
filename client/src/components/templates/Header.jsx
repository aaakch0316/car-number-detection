import GNB from "./GNB";
import LNB from "./LNB";
import styles from "./Header.module.scss"

const Header = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <GNB />
      </header>
      <LNB />
      <div className={styles.main}>
        {children}
      </div>
    </>
  )
}

export default Header;