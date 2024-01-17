import React,{useState}from "react";
import './styles/app.scss';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import NextVideo from "./components/NextVideo/NextVideo";
import videos from "./data/video-details.json"
function App() {
  //get video info from JASON file
  const [videoData,setVideoData]=useState(videos);
  console.log(videoData);

  //get current video id and update it
  const [currentVideoId,setCurrentVideoId]=useState(videos[0].id);
  const currentVideo=videoData.find(video=>video.id===currentVideoId)
  
  const handleVideoSelect=(newVideoId)=>{
    setCurrentVideoId(newVideoId);
  }
  return (
    <div className="App">
        <Header/>
        <main>
          <CurrentVideo video={currentVideo}/>
          <NextVideo videoData={videoData} onSelect={handleVideoSelect} currentVideoId={{currentVideoId}}/>
          </main>   
    </div>
  );
}

export default App;
