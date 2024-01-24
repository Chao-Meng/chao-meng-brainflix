import {useState,useEffect}from "react";
import {useParams,useNavigate} from "react-router-dom";
import '../../styles/App.scss';
import Header from '../../components/Header/Header';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import NextVideo from "../../components/NextVideo/NextVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";

function Page() {
  const API_BASE_URL='https://project-2-api.herokuapp.com';
  const API_KEY='053cc565-9868-4592-b9c3-096b59152586';
  const [videoData,setVideoData]=useState([]);
  const [currentVideoId,setCurrentVideoId]=useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const {videoId}=useParams();
  const navigate=useNavigate();

useEffect(() => {
    axios.get(`${API_BASE_URL}/videos?api_key=${API_KEY}`)
      .then(response => {
        setVideoData(response.data);
        const firstVideoId=videoId||response.data[0].id;
        if (response.data.length > 0) {     
         setCurrentVideoId(firstVideoId);
         getVideoDetails(firstVideoId)
        }if(!videoId){
            navigate(`/videos/${firstVideoId}`);
        }
      })
      .catch(error => {
        console.log("Error fetching videos: ", error);
      });
  }, [videoId,navigate]);

const getVideoDetails = (videoId) => {
    axios.get(`${API_BASE_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then(response => {
        setCurrentVideo(response.data);
      })
      .catch(error => {
        console.error("Error fetching video details: ", error);
      });
  };

//load video with the selected video id 
  useEffect(() => {
    if (currentVideoId) {
      getVideoDetails(currentVideoId);
    }
  }, [currentVideoId]); 
  
  useEffect(() => {
    const video = videoData.find(video => video.id === currentVideoId);
  }, [videoId]);

  const handleVideoSelect = (newVideoId) => {
    setCurrentVideoId(newVideoId);
    //have to navigate to videos/id to get comments and likes, views information
    navigate(`/videos/${newVideoId}`);
  };
  return (
    <div className="app">
        <Header/>
        <main>
            {currentVideo &&<CurrentVideo video={currentVideo}/>}
            <div className="app__container">
                {currentVideo && <VideoDetails  className="app__videoDetails" videoData={currentVideo}  onSelect={handleVideoSelect} 
                currentVideoId={videoId}/>}
                <div className="app__divider"></div>
                <NextVideo className="app__videoList" videoData={videoData} 
                onSelect={handleVideoSelect} 
                currentVideoId={currentVideoId}/>
            </div>
        </main>   
    </div>
  );
}

export default Page;
