import { LogoURL } from "../utils.js/constants";
const Header = () => (
    <div className="header">
      <div className="logo">
          <img src = {LogoURL} className="img"></img>
      </div>
      <div className="nav-items">
          <ul>
              <li>Search</li>
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Cart</li>
          </ul>
      </div>
    </div>
  );
  export default Header 