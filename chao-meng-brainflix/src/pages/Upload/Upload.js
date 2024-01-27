import Header from '../../components/Header/Header';
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import "./Upload.scss"
function Upload() {
    return (
       <>
            <Header/>
            <div className="upload__divider"></div>
            <UploadVideo/>
        </>
    )
}
export default Upload