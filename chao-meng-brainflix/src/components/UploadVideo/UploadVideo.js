import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UploadVideo.scss";
import "../../styles/global.scss";
import cover from "../../assets/images/Upload-video-preview.jpg";
function UploadVideo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = {
      title: title,
      description: descrip,
      image: "https://project-2-api.herokuapp.com/images/image1.jpg",
    };
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/videos/upload`, newVideo)
        .then((response) => {
          if (response.status === 201) {
            alert("Your video has been published");
            if (response.data && response.data.image) {
              console.log("Cover image URL:", response.data.image);
            } else {
              console.log("No image URL in the response");
            }
            navigate("/");
          } else {
            console.error("Unexpected response", response);
            alert("Error when you published video");
          }
        });
    } catch (error) {
      console.error("Error uploading video", error);
    }
  };
  return (
    <div className="upVideo">
      <h1 className="upVideo__title">Upload Video</h1>
      <div className="upVideo__divider"></div>
      <p className="upVideo__subtitle"> VIDEO THUMBNAIL</p>
      <div className="upVideo__container">
        <div className="upVideo__imgContainer">
          <img className="upVideo__img" src={cover} alt="Video Thumbnail" />
        </div>
        <form className="upVideo__form">
          <label className="upVideo__label" htmlFor="videoTitle">
            {" "}
            TITLE YOUR VIDEO
          </label>
          <input
            className="upVideo__videoTitle"
            id="videoTitle"
            type="text"
            name="video"
            placeholder="Add a title to your video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="upVideo__label" htmlFor="videoDescr">
            {" "}
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upVideo__videoDescr"
            id="videoDescr"
            name="videoDescription"
            placeholder="Add a description to your video"
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </form>
      </div>
      <div className="upVideo__divider"></div>
      <div className="upVideo__buttonContainer">
        <button
          type="submit"
          className="upVideo__button"
          onClick={handleSubmit}
        >
          PUBLISH
        </button>
        <button type="submit" className="upVideo__buttonCancel">
          CANCEL
        </button>
      </div>
    </div>
  );
}
export default UploadVideo;
