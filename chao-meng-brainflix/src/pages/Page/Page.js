import {useState,useEffect}from "react";
import {useParams} from "react-router-dom";
import '../../styles/App.scss';
import Header from '../../components/Header/Header';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import NextVideo from "../../components/NextVideo/NextVideo";
import VideoDetails from "../../components/videoDetails/VideoDetails";
import axios from "axios";

function Page() {
  const API_BASE_URL='https://project-2-api.herokuapp.com';
  const API_KEY='053cc565-9868-4592-b9c3-096b59152586';
  const apiClient=axios.create({
    baseUrl:API_BASE_URL,
  });
  
  const [videoData,setVideoData]=useState([]);
  const [currentVideoId,setCurrentVideoId]=useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  
//   useEffect(()=>{
//     const getVideos=async ()=>{
//       try{
//         const response=await axios.get(`${API_BASE_URL}/videos?api_key=${API_KEY}`);
//         setVideoData(response.data);
//         console.log("bbbbbbbbbb",response.data)
//         setCurrentVideoId(response.data[0]?.id);
//       }catch(error){
//         console.log("Error happens when fetching data ", error);
//       }
//     };
//     getVideos();
//   },[]);
useEffect(() => {
    axios.get(`${API_BASE_URL}/videos?api_key=${API_KEY}`)
      .then(response => {
        setVideoData(response.data);
        console.log("Videos:", response.data);
        if (response.data.length > 0) {
          setCurrentVideoId(response.data[0].id);
        }
      })
      .catch(error => {
        console.log("Error fetching videos: ", error);
      });
  }, []);

  const {videoId}=useParams();
console.log("dddd",videoId)
//   const getVideoDetails = async (videoId) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/videos/${videoId}?api_key=${API_KEY}`);
//       setCurrentVideo(response.data);
//       console.log("dedede",response.data)
//       console.log("Video details: ", response.data);
//     } catch (error) {
//       console.error("Error fetching video details: ", error);
//     }
//   };
//   useEffect(()=>{
//    if(currentVideoId){
//     getVideoDetails(videoId);   
//    }       
//   },[videoId]);
const getVideoDetails = (videoId) => {
    axios.get(`${API_BASE_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then(response => {
        setCurrentVideo(response.data);
        console.log("Video details: ", response.data);
      })
      .catch(error => {
        console.error("Error fetching video details: ", error);
      });
  };
  useEffect(() => {
    // 只在 videoId s有效时调用
    if (currentVideoId) {
      getVideoDetails(currentVideoId);
    }
  }, [currentVideoId]); 
  
  useEffect(() => {
    const video = videoData.find(video => video.id === currentVideoId);
    setCurrentVideo(video);
  }, [currentVideoId, videoData]); 
  const handleVideoSelect = (newVideoId) => {
    setCurrentVideoId(newVideoId);
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
