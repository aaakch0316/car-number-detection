import styles from './Monitering.module.scss'
import VideoBox from "../components/templates/videoBox.js"
import VideoBox2 from "../components/templates/videoBox2.js"
import VideoBox3 from "../components/templates/videoBox3.js"
import VideoBox4 from "../components/templates/videoBox4.js"
import Notification from "../components/templates/notification.js"
import Header from "../components/templates/Header";

const Monitering = () => {

  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <div>
          <div >
            <h2>CCTV</h2>
          </div>
          <div>
            <VideoBox
              title={'CCTV_No1'}
              name={'1번 차량'}
              type={'1'}
              carNumber={'59버 0596'}
              image={'/images/test_IMG_5288.png'}
            />

            <VideoBox4 />
            <VideoBox2
              title={'CCTV_No2'}
              image={'/images/qqqqq.png'}
            />

            <VideoBox3 />

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
