import {useNavigate} from "react-router-dom";
import "./UploadVideo.scss";
import "../../styles/global.scss";
import cover from "../../assets/images/Upload-video-preview.jpg";
function UploadVideo() {
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Your video has been published");
        navigate("/");
    }
    return (
        <div className="upVideo">
            <h1 className="upVideo__title">Upload Video</h1>
            <div className="upVideo__divider"></div>
            <p className="upVideo__subtitle"> VIDEO THUMBNAIL</p>
            <div className="upVideo__container">
                <div className="upVideo__imgContainer"> 
                    <img className="upVideo__img" src={cover} alt="Video Thumbnail"/>
                </div>
                <form className="upVideo__form">
                    <label className="upVideo__label" htmlFor="videoTitle"> TITLE YOUR VIDEO</label>
                     <input className="upVideo__videoTitle" id="videoTitle" type="text" name="video" placeholder="Add a title to your video"/>
                    <label className="upVideo__label" htmlFor="videoDescr"> ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upVideo__videoDescr" id="videoDescr" name="videoDescription" placeholder="Add a description to your video"/> 
                </form>    
            </div>
            <div className="upVideo__divider"></div>
            <div className="upVideo__buttonContainer">
                <button type="submit" className="upVideo__button"  onClick={handleSubmit}>PUBLISH</button>
                <button className="upVideo__buttonCancel">CANCEL</button>
            </div>
        </div>
    )
}
export default UploadVideo