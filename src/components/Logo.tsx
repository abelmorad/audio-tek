import logo from "../../public/logo.svg";

function Logo() {
  return (
    <div className="home-logo-wrapper">
      <img
        style={{ height: "20px", width: "20px" }}
        src={logo}
        alt="audio tek logo"
      />
      <h1>Audio Tek</h1>
    </div>
  );
}

export default Logo;
