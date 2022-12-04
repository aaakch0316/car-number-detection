import styles from './App.module.scss'
import VideoBox from "./routes/videoBox.js"
import Notification from "./routes/notification.js"

function App() {
  return (
    <div className={styles.title}>
      <div>
        <h1>aaaaaaaaaaaaaaaaaaaaa</h1>
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
