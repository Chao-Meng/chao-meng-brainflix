import {useState,useEffect}from "react";
import './styles/app.scss';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import NextVideo from "./components/NextVideo/NextVideo";
import videos from "./data/video-details.json"
function App() {
  //get video info from JSON file
  const [videoData,setVideoData]=useState(videos);
  console.log("cideoooooooo",videoData);

  //access current video id and update it in the safe way
  const [currentVideoId,setCurrentVideoId]=useState(videoData[0]?.id);
  console.log("current video id",currentVideoId)
  const currentVideo=videos.find(video=>video.id===currentVideoId)

  useEffect(() => {
    console.log("Current video ID updated:", currentVideoId);
  }, [currentVideoId,currentVideo]); 

  const handleVideoSelect=(newVideoId)=>{
    setCurrentVideoId(newVideoId);
    console.log("new id",newVideoId)
    //update the video list and not include the current video
    setVideoData(videos.filter(video => video.id !== newVideoId))
     /*update the video list and not include the current video and previous video
     setVideoData(videoData.filter(video => video.id !== newVideoId))*/
    
  }
  console.log(currentVideo);

  return (
    <div className="App">
        <Header/>
        <main>
          <CurrentVideo video={currentVideo}/>
          {videoData.length>0?( <NextVideo videoData={videoData} 
          onSelect={handleVideoSelect} 
          currentVideoId={currentVideoId}/>):<div>More videoes are on the way here...</div>}
         
          </main>   
    </div>
  );
}

export default App;
