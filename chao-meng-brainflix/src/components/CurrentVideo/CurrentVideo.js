import "./CurrentVideo.scss"
function CurrentVideo(props){
    console.log(props.video);
    if (!props.video) {
        return <div>Loading...</div>;
    }
    console.log("test",props.video.image);
    
return(
<div className="video"> 
    <video  controls className="video__current" poster={props.video.image}>
    <div className="video__current--container">
    <img  className="video__current--cover" src={props.video.image} alt={props.video.title}/> </div>
    Your browser does not support the video tag.
    </video>
</div>)
}
export default CurrentVideo