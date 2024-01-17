import "./CurrentVideo.scss"
function CurrentVideo(props){
return(
<div className="video"> 
    <video  controls className="video__current" >
    <source src={props.video.video}/>
    Your browser does not support the video tag.
    </video>
</div>)
}
export default CurrentVideo