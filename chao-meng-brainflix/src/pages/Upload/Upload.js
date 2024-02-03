import Header from "../../components/Header/Header";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import "./Upload.scss";
function Upload() {
  //const API_URL=process.env.REACT_APP_API_URL
  return (
    <>
      <Header />
      <div className="upload__divider"></div>
      <UploadVideo />
    </>
  );
}
export default Upload;
