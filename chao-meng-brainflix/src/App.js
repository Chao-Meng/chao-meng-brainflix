import {useState,useEffect}from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/App.scss';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import NextVideo from "./components/NextVideo/NextVideo";
import VideoDetails from "./components/videoDetails/VideoDetails";
//import videos from "./data/video-details.json";
import axios from "axios";
import Page from "./pages/Page/Page"

function App() {
  // const API_BASE_URL='https://project-2-api.herokuapp.com';
  // const API_KEY='053cc565-9868-4592-b9c3-096b59152586';
  // const apiClient=axios.create({
  //   baseUrl:API_BASE_URL,
  // });
  
  // //get video info from JSON file
  // const [videoData,setVideoData]=useState([]);


  // //access current video id and update it in the safe way
  // //const [currentVideoId,setCurrentVideoId]=useState(videoData[0]?.id);
  // const [currentVideoId,setCurrentVideoId]=useState(null);
  // const [currentVideo, setCurrentVideo] = useState(null);
  
  // useEffect(()=>{
  //   const getVideos=async ()=>{
  //     try{
  //       const response=await axios.get(`${API_BASE_URL}/videos?api_key=${API_KEY}`);
  //       setVideoData(response.data);
  //       console.log("bbbbbbbbbb",response.data)
  //       setCurrentVideoId(response.data[0]?.id);
  //     }catch(error){
  //       console.log("Error happens when fetching data ", error);
  //     }
  //   };
  //   getVideos();
  // },[]);
  // useEffect(() => {
  //   // find and set the current video
  //   const video = videoData.find(video => video.id === currentVideoId);
  //   setCurrentVideo(video);
  // }, [currentVideoId, videoData]); 
  // const handleVideoSelect = (newVideoId) => {
  //   setCurrentVideoId(newVideoId);
  //   setVideoData(videoData.filter(video => video.id !== newVideoId));
  // };
  // // console.log("current video id",currentVideoId)
  // // const currentVideo=videos.find(video=>video.id===currentVideoId)

  // // useEffect(() => {
  // //   console.log("Current video ID updated:", currentVideoId);
  // // }, [currentVideoId,currentVideo]); 

  // // const handleVideoSelect=(newVideoId)=>{
  // //   setCurrentVideoId(newVideoId);
  // //   console.log("new id",newVideoId)
  // //   //update the video list and not include the current video
  // //   setVideoData(videos.filter(video => video.id !== newVideoId))
  // //    /*update the video list and not include the current video and previous video
  // //    setVideoData(videoData.filter(video => video.id !== newVideoId))*/
    
  // // }
  // // console.log(currentVideo);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/videos/:videoId" element={<Page/>}/>
        {/* <Route path="" elenment={</>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
