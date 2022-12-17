import styles from './Monitering.module.scss'
import VideoBox from "../components/templates/videoBox.js"
import Notification from "../components/templates/notification.js"
import Header from "../components/templates/Header";

const Monitering = () => {
  return (
    <Header>
      <div>
        <div className={styles.title}>
          <h2>CCTV + 알림페이지</h2>
        </div>
        <VideoBox />
        <Notification />
      </div>

    </Header>

  );
}

export default Monitering;
