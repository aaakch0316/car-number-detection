import styles from './App.module.scss'
import VideoBox from "./components/templates/videoBox.js"
import Notification from "./components/templates/notification.js"

function App() {
  return (
    <div className={styles.title}>
      <div>
        <h1>CCTV + 알림페이지</h1>
      </div>
      <VideoBox />
      <VideoBox />
      <VideoBox />
      <VideoBox />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  );
}

export default App;
