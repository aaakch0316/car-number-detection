import styles from './Monitering.module.scss'
import VideoBox from "../components/templates/videoBox.js"
import Notification from "../components/templates/notification.js"
import Header from "../components/templates/Header";
import Webcam from "react-webcam";
const Monitering = () => {

  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <div>
          <div >
            <h2>CCTV + 알림페이지</h2>
          </div>
          <div>
            <VideoBox
              name={'1번 차량'}
              type={'1'}
              carNumber={'59버 0596'}
              image={'/images/test_IMG_5288.png'}
            />
            <VideoBox
              name={'2번 차량'}
              type={'2'}
              carNumber={'23차 3171'}
              image={'https://post-phinf.pstatic.net/MjAxNzA0MTVfMTAz/MDAxNDkyMjI0Mzk2MTgx.ke7SFCtfrR6af-ml7TQU43v0IRYcx0EoPVt77u8l9WMg.ocLsIIaXnJa8FsULMrNMkoCXjpn6bBFLvojq4trHkjgg.JPEG/3.jpg?type=w1200'}
            />
            <VideoBox
              name={'3번 차량'}
              type={'1'}
              carNumber={'07가 7907'}
              image={'https://image.hogangnono.com/image/nowatermark/original/review/20200205133637_Cg6kgKBTCqqczQG7X8?s=720x180&t=outside&q=100'}
            />
            <VideoBox
              name={'4번 차량'}
              type={'1'}
              carNumber={'23차 3171'}
              image={''}
            />
          </div>
          <div>
            <Notification />
          </div>


        </div>
      </main>

    </Header>

  );
}

export default Monitering;
