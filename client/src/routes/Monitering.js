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
        <VideoBox>
          {'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzExMjVfMTI5%2FMDAxNTExNTc1MDI3MDc4.YgvgSCXx0uPIUzQ92b_IKI8mixNtiYqEsERhYX0Syisg.r4kE_VLu-eoZmBFGVgkaj0_2jvcnVaRrknulqCE2RLYg.JPEG%2FICCw4nec63dl3OblCGx86lHoMAsY.jpg&type=a340'}
        </VideoBox>
        <VideoBox>
          {'https://post-phinf.pstatic.net/MjAxNzA0MTVfMTAz/MDAxNDkyMjI0Mzk2MTgx.ke7SFCtfrR6af-ml7TQU43v0IRYcx0EoPVt77u8l9WMg.ocLsIIaXnJa8FsULMrNMkoCXjpn6bBFLvojq4trHkjgg.JPEG/3.jpg?type=w1200'}
        </VideoBox>
        <VideoBox>
          {'https://image.hogangnono.com/image/nowatermark/original/review/20200205133637_Cg6kgKBTCqqczQG7X8?s=720x180&t=outside&q=100'}
        </VideoBox>
        <VideoBox>
          {'http://bundangclean.com/m/img/sub1/con6_5_3.jpg'}
        </VideoBox>
        <div>
          <Notification />
        </div>


      </div>

    </Header>

  );
}

export default Monitering;
