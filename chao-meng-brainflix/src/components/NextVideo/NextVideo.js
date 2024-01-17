import "./NextVideo.scss"
function NextVideo(props){//or {videoData,onSelect,currentVideoId}
    const videoData=props.videoData;
    const onSelect=props.onSelect;
    const currentVideoId=props.currentVideoId;
    //filter current playing video and donot display it on next video list
   const flieredVideos=videoData.filter(video=>video.id!==currentVideoId);
    return(<>
        <h2 className="title">NEXT VIDEOS</h2>
        <div className="video">
            {flieredVideos.map(video=>(
                <div className="video__list" key={video.id} onClick={()=>onSelect(video.id)}>
                   <div className="video__cover"> 
                   <img  className="video__image" src={video.image} alt={video.title}/>
                   </div>
                   <div className="video__container"> <h2 className="video__title">{video.title}</h2>
                    <p className="video__channel">{video.channel}</p></div>
                </div>
        ))}
        </div>
        </>
    )
}
export default NextVideo