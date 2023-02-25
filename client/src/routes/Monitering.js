import VideoBox1 from "../components/templates/videoBox1.js"
import VideoBox2 from "../components/templates/videoBox2.js"
import VideoBoxtest2 from "../components/templates/videoBoxtest2.js"
import Notification from "../components/templates/notification.js"
import Header from "../components/templates/Header";

import React, { useState } from 'react'

const Monitering = () => {
  return (
    <Header>
      <main style={{ padding: "1rem 3rem" }}>
        <div>
          <div >
            <h2>CCTV</h2>
          </div>
          <div>
            {/* <VideoBox
              title={'CCTV_No1'}
              name={'1번 차량'}
              type={'1'}
              carNumber={'59버 0596'}
              image={'/images/test_IMG_5288.png'}
            /> */}

            <VideoBox1
              title={'CCTV_No1'} />
            <VideoBox2
              title={'CCTV_No2'} />
            {/* <VideoBoxtest2
              title={'CCTV_No3'} /> */}

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
