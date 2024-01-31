import { useState,useEffect } from 'react';
import axios from "axios";
import "./VideoDetails.scss"
import views from "../../assets/images/views.svg"
import likes from "../../assets/images/likes.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg"
function VideoDetails(props){
  function formatTime(timestamp){
    const date =new Date(timestamp);
    return date.toLocaleDateString('en-US',{
        month:'2-digit',
        day:'2-digit',
        year:'numeric'
    });
  }
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(props.videoData.comments || []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
};

 function handleAddComment(e){
    e.preventDefault();
    if (isSubmitting) 
    {
        return
    }; 
    setIsSubmitting(true);
    const commentData={
        name:"loginName",
        comment:newComment
    };
    axios.post(`${props.API_URL}/videos/${props.currentVideoId}/comments`, commentData)
    .then(response => {
        const addedComment = response.data; 
        setComments(currentComments => {
            //keep the new comment on the top
            const updatedComments = [addedComment,...currentComments];
            console.log('Updated comments:', updatedComments);  
            return updatedComments;
    });
        setNewComment("");
        alert(`You have added comment successffuly.`);
    })
    .catch(error => {
      console.error("Error adding comment: ", error);
    })
    //reset the submitting, or only added next comment after refreash page
    .finally(() => {
        setIsSubmitting(false);  
    });
 }
 useEffect(() => {
    //sort the comment via time
    const sortedComments = (props.videoData.comments || []).sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
    });
    setComments(sortedComments);
}, [props.videoData.comments]);

  const likesNum = props.videoData?.likes;
  const viewsNum = props.videoData?.views;

  if (!props.videoData ||!props.videoData.comments|| likes === undefined || views === undefined) {
    return <div>Loading...</div>;
  }
    return(
        <div className="container">
        <section className="details" key={props.videoData.id}>
            <>
            <h1 className="details__title">{props.videoData.title}</h1>
                <div className="details__divider--mobile"></div>
             <div className="details__container">
                <div className="details__container--left">
                    <p className="details__container--author">By {props.videoData.channel}</p>
                    <p className="details__container--time">{formatTime(props.videoData.timestamp)}</p>
                </div>
                <div className="details__container--right">
                    <div className="details__container--up">
                        <img className="details__container--viewImage" src={views} alt={props.videoData.title}></img>
                        <p className="details__container--views">{viewsNum}</p>
                    </div>
                    <div className="details__container--down">
                    <img className="details__container--likeImage" src={likes} alt={props.videoData.title}></img>
                        <p className="details__container--likes">{likesNum}</p>
                    </div>
                </div>
             </div> 
             <div className="details__divider"></div>
             <div className="details__descrip">{props.videoData.description}</div>
             </>
        </section>
         <form className="comments" onSubmit={handleAddComment}>
                <p className="comments__title">{props.videoData.comments.length} Comments</p> 
                <div className="comments__form">
                <div className="comments__form--left">
                    <img className="comments__avatar" src={avatar} alt={props.videoData.title}/>
                </div>
                <div className="comments__form--right">
                    <div className="comments__form--content">
                        <label  className="comments__label" htmlFor="commentsInput">JOIN THE VONVERSATION</label>
                        <textarea name="comment" className="comments__input" id="commentsInput" placeholder=" Add a new comment" value={newComment} onChange={handleCommentChange}/>
                    </div>
                     <button className="comments__button">COMMENT</button>
                </div>
            </div>
            {comments.map(comment => (
            <div className="comments__list" key={comment.id}>
                 <div className="details__divider"></div>
                <div className="comments__container">
                    <div className="comments__list--left"> 
                        <img className="comments__avatar" alt=""/>
                    </div>
                    <div className="comments__list--right">
                        <div className="comments__list--up">
                            <p className="comments__name">{comment.name}</p>
                            <p className="comments__time">{formatTime(comment.timestamp)}</p>
                        </div>
                        <p className="comments__comment">{comment.comment}</p>
                    </div>
                </div>      
            </div>    
            ))}
         <div className="details__divider--desktop"></div> 
        </form> 
    </div>) 
}
export default VideoDetails