import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoBox4 = () => {
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/video')
            .then(response => {
                console.log(response);
                setVideoUrl(response.request.responseURL);
            });
    }, []);

    return (
        <div >
            <div>
                {videoUrl && <video src={videoUrl} autoPlay={true} />}

            </div>
        </div>

    )
}

export default VideoBox4;


