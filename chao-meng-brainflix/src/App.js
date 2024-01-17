import React,{useState}from "react";

import Header from './components/Header/Header';
import './styles/app.scss';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import videos from "./data/video-details.json"
function App() {
  const [videoData,setVideoData]=useState(videos);
  console.log(videos);
  const [currentVideo,setCurrentVideo]=useState(videos[0].id);
  return (
    <div className="App">
        <Header/>
        <main>
          <CurrentVideo video={currentVideo}/>
          </main>   
    </div>
  );
}

export default App;
