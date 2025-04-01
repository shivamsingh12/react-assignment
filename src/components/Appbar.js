import "../styles/appbar.css";
import { ReactComponent as BitcoinLogo } from "../assets/bitcoin.svg";
import { ReactComponent as BurgerMenu } from "../assets/burger.svg";
import Info from "../assets/info-icon.png";
import Notification from "../assets/notification-icon.png";

export default function Appbar() {
  return (
    <div className="appbar-content">
      <div className="appbar-content-group">
        <BitcoinLogo ariaLabel="bitcoin logo" />
        <BurgerMenu className="burger" ariaLabel="burger menu" />
      </div>
      <div className="appbar-content-group">
        <img src={Info} alt="info icon" />
        <div className="notification-container">
          <img src={Notification} alt="notification icon" />
          <div className="notification-new"></div>
        </div>
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            src={
              "https://s3-alpha-sig.figma.com/img/2efb/d882/6436e7705a635d52495da5ff20598036?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MJwxSgXp~vSScYssXFkQQaXOuDqvHqlyorpxwcOTVYS1ZdPTYuFy98-CF0Sbt5WraTiIdrOa78Ao85XQsE~SeN7SwCnXu8HyLYvc18DY94xkgAGBgJ64GkpBA5iK3uF309D6aEQoveUivnwHZ5PqA8MGHXClj43rqx4i7kM83XHvYVF-B9FUlEJeHvtNyKTYjg8G0G6VdJ5euAs1Bxhe7kMxTT13FNX5GAbRJ-~Q8cexV8sz5PpDwLyWvzqA9rtJYyBvywtHRlSbJ4WbZaZyTfsPr20GB~EH7~OUx1wzCL3-MfdMAUx55Vk5RRdH2j61f-pU7Mx6czBbstYhCIqGmQ__"
            }
            alt="profile pic"
          />
        </div>
        <div className="welcome-text">
          <div>
            Hi,
            <span>Muhammad Asad</span>
          </div>
          <p>welcome back!</p>
        </div>
      </div>
    </div>
  );
}
