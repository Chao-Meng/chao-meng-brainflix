import "./NextVideo.scss"
function NextVideo(props){//or {videoData,onSelect,currentVideoId}
    const videoData=props.videoData;
    const onSelect=props.onSelect;
    const currentVideoId=props.currentVideoId;
    //filter current playing video and donot display it on next video list
   const flieredVideos=videoData.filter(video=>video.id!==currentVideoId);
    return(<div className="nextVideo__all">
        <h2 className="title">NEXT VIDEOS</h2>
        <div className="nextVideo">
            {flieredVideos.map(video=>(
                <div className="nextVideo__list" key={video.id} onClick={()=>onSelect(video.id)}>
                   <div className="nextVideo__cover"> 
                   <img  className="nextVideo__image" src={video.image} alt={video.title}/>
                   </div>
                   <div className="nextVideo__container"> <h2 className="nextVideo__title">{video.title}</h2>
                    <p className="nextVideo__channel">{video.channel}</p></div>
                </div>
            ))}
        </div>
    </div> )
}
export default NextVideo