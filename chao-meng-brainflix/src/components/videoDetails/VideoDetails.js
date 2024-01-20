import "./VideoDetails.scss"
import views from "../../assets/icons/views.svg"
import likes from "../../assets/icons/likes.svg"
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
    return(
        <>
        <section className="details" key={props.video.id}>
            <>
            <h2 className="details__title">{props.video.title}</h2>
                <div className="details__divider"></div>
             <div className="details__container">
                <div className="details__container--left">
                    <p className="details__container--author">By {props.video.channel}</p>
                    <p className="details__container--time">{formatTime(props.video.timestamp)}</p>
                </div>
                <div className="details__container--right">
                    <div className="details__container--up">
                        <img className="details__container--viewImage" src={views}></img>
                        <p className="details__container--views">{props.video.views}</p>
                    </div>
                    <div className="details__container--down">
                    <img className="details__container--likeImage" src={likes}></img>
                        <p className="details__container--likes">{props.video.likes}</p>
                    </div>
                </div>
             </div> 
             <div className="details__divider"></div>
             <div className="details__descrip">{props.video.description}</div>
             </>
        </section>
        <form className="comments">
                <p className="comments__title">Comments</p>
                <div className="comments__form">
                <div className="comments__form--left">
                    <img className="comments__avatar" src={avatar}/>
                </div>
                <div className="comments__form--right">
                    <div className="comments__form--content">
                        <label className="comments__label">JOIN THE VONVERSATION</label>
                        <textarea type="text" className="comments__input" rows="6" placeholder="Add a new comment"></textarea>
                    </div>
                     <button className="comments__button">COMMENT</button>
                </div>
            </div>
            <div className="details__divider"></div>
            {props.video.comments.map(comment => (
            <div className="comments__list" key={comment.id}>
                <div className="comments__container">
                    <div className="comments__list--left"> 
                        <img className="comments__avatar"/>
                    </div>
                    <div className="comments__list--right">
                        <div className="comments__list--up">
                            <p className="comments__name">{comment.name}</p>
                            <p className="comments__time">{formatTime(comment.timestamp)}</p>
                        </div>
                        <p className="comments__comment">{comment.comment}</p>
                    </div>
                </div>
                <div className="details__divider"></div>
                
            </div>
        ))}
        </form>
        </>
    )
}
export default VideoDetails