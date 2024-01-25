import {useState,useEffect}from "react";
import {useParams,useNavigate} from "react-router-dom";
import Header from '../../components/Header/Header';
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import "./Upload.scss"
import axios from "axios";


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