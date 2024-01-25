import "./UploadVideo.scss"
import "../../styles/global.scss"
import cover from "../../assets/images/Upload-video-preview.jpg"
function UploadVideo() {
    return (
        <div className="upVideo">
    
            <h1 className="upVideo__title">Upload Video</h1>
            <div>
                <p className="upVideo__subtitle"> VIDEO THUMBNAIL</p>
                <div className="upVideo__imgContainer">
                    <img className="upVideo__img" src={cover}/>
                </div>
                <form className="upVideo__form">
                    <label className="upVideo__label" for="videoName"> TITLE YOUR VIDEO</label>
                <input className="upVideo__videoTitle" id="videoTitle"type="text" placeholder="Add a title to your video"/>
                    <label className="upVideo__label" for="videoDescr"> ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upVideo__videoDescr" id="videoDescr"type="text" placeholder="Add a description to your video"/> 
                </form>
                <div className="upVideo__divider"></div>
                <div className="upVideo__buttonContainer">
                    <button className="universal__button">PUBLISH</button>
                    <button className="upVideo__buttonCancel">CANCEL</button>
                </div>
            </div>
          
    
        </div>
    )
}
export default UploadVideo