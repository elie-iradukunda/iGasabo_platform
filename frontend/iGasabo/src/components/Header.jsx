import logo from "../assets/photoes/logo.svg";
import pic1 from "../assets/photoes/pic1.avif";
import pic2 from "../assets/photoes/pic2.avif"; 
import pic3 from "../assets/photoes/pic3.avif"; 
import pic4 from "../assets/photoes/pic4.avif"; 
import '../assets/syling/Header.css';

const Header = () => {
  return (
    <div className="header">
 
      <div className="header-nav">
        <div className="header-logo">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <span className="brand-name">Dataway</span>
        </div>

        <ul className="header-menu">
          <li>Features</li>
          <li>How it works</li>
          <li>Stories</li>
          <li>Help</li>
        </ul>

        <button className="join-button">Join</button>
      </div>

    
      <div className="header-images-top">
        <img src={pic1} alt="Top Left" className="float-img top-left" />
        <img src={pic2} alt="Top Right" className="float-img top-right" />
      </div>

     
      <div className="header-content">
        <h1 className="header-title">
          Your voice. <br /> Your community. <br /> Real impact.
        </h1>

        <p className="header-description">
          Speak up, share ideas, and connect with neighbors and local leaders—
          all in one place. Every post is public, every concern is heard,
          and every idea helps shape a more responsive, united community.
          Join the conversation and help build the change you want to see.
        </p>
      </div>

   
      <div className="header-buttons">
        <button className="btn-primary">Join now</button>
        <button className="btn-secondary">How it works</button>
      </div>

   
      <div className="header-images-bottom">
        <img src={pic3} alt="Bottom Left" className="float-img bottom-left" />
        <img src={pic4} alt="Bottom Right" className="float-img bottom-right" />
      </div>
    </div>
  );
};

export default Header;
