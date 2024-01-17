import "./CurrentVideo.scss"
function CurrentVideo(props){
return(
<div className="video"> 
    <video  controls className="video__current" >
    <source src={props.video.video}/>
    Your browser does not support the video tag.
    </video>
    {/* <h1>{props.video.title}</h1> comment component content */}
</div>)
}
export default CurrentVideo