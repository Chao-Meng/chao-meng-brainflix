import { Link } from 'react-router-dom';
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";
import "../../styles/global.scss"
function Header(){
return(
<header>
    <div className="header">
        <a className="header__title"> 
        <Link to="/">
            <img className="header__logo" src={logo}></img>
        </Link>
        </a>
        <div className="header__container">
            <div className="header__container--left">
                <input className="header__input" placeholder="Search" type="text"/>   
                <button className="header__button">UPLOAD</button>
            </div>
            <div className="header__container--right">
            <img className="header__avatar" src={avatar}></img>
            </div>
        </div>
    </div>
</header>)

}
export default Header;