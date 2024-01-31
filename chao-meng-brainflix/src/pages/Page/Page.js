import {useState,useEffect}from "react";
import {useParams,useNavigate} from "react-router-dom";
import '../../styles/App.scss';
import Header from '../../components/Header/Header';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import NextVideo from "../../components/NextVideo/NextVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import axios from "axios";

const API_URL=process.env.REACT_APP_API_URL
function Page() {
  const [videoData,setVideoData]=useState([]);
  const [currentVideoId,setCurrentVideoId]=useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const {videoId}=useParams();
  const navigate=useNavigate();

useEffect(() => {
    axios.get(`${API_URL}/videos`)
      .then(response => {
        setVideoData(response.data);
        console.log("response",response.data);
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
    console.log('Video ID:', `${API_URL}/videos/${videoId}`);
    axios.get(`${API_URL}/videos/${videoId}`)
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
  //add comment callback
//   const onCommentAdded = () => {
//     getVideoDetails(currentVideoId);
// };
  useEffect(() => {
    //const video = videoData.find(video => video.id === currentVideoId);
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
                {currentVideo && <VideoDetails  className="app__videoDetails" videoData={currentVideo}   API_URL={API_URL}  onSelect={handleVideoSelect} 
                currentVideoId={videoId} />}
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
