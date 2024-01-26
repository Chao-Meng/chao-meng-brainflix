import "./CurrentVideo.scss"
function CurrentVideo(props){
    if (!props.video) {
        return <div>Loading...</div>;
    }
    
return(
<div className="video">
    <video  controls className="video__current"  poster={props.video.image}>
    Your browser does not support the video tag.
    </video>
</div>)
}
export default CurrentVideo