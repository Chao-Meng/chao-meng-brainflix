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
         <form className="comments">
                 <p className="comments__title">{props.videoData.comments.length} Comments</p> 
                <div className="comments__form">
                <div className="comments__form--left">
                    <img className="comments__avatar" src={avatar} alt={props.videoData.title}/>
                </div>
                <div className="comments__form--right">
                    <div className="comments__form--content">
                        <label htmlFor="comments__input" className="comments__label">JOIN THE VONVERSATION</label>
                        <textarea type="text" id="comments__input" className="comments__input"  placeholder=" Add a new comment"></textarea>
                    </div>
                     <button className="comments__button">COMMENT</button>
                </div>
            </div>
            {props.videoData.comments.map(comment => (
            <div className="comments__list" key={comment.id}>
                 <div className="details__divider"></div>
                <div className="comments__container">
                    <div className="comments__list--left"> 
                        <img className="comments__avatar" />
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