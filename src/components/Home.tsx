import logo from "../../public/logo.svg";
import user from "../../public/userprofile.png"

function Home() {
  return (
    <main className="home-container">
        <nav>
            <menu
                className="menu-icon"
            />
        <div className="home-logo-wrapper">
          <img
            style={{ height: "20px", width: "20px" }}
            src={logo}
            alt="audio tek logo"
          />
          <h1>Audio Tek</h1>
        </div>
        <figure>
            <img src={user} alt="dude"/>
        </figure>
        </nav>
    </main>
  )
}

export default Home