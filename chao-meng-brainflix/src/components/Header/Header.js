import { Link } from "react-router-dom";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";
import "../../styles/global.scss";
function Header() {
  return (
    <header>
      <div className="header">
        <p className="header__title">
          <Link to="/" className="header__logo">
            <img src={logo} alt="logonpm"></img>
          </Link>
        </p>
        <div className="header__container">
          <div className="header__container--left">
            <input className="header__input" placeholder="Search" type="text" />
            <Link to="/videos/upload" className="header__button">
              <button className="header__button--upload">UPLOAD</button>
            </Link>
          </div>
          <div className="header__container--right">
            <img className="header__avatar" src={avatar} alt=""></img>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
