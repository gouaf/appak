import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Salin.
          </a>
        </div>

        <div className="right">
          <div className="toogler" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          {/* <div className="iconContainer">
            <div className="icon">
              <Person />
              <span>sfddf</span>
            </div>
            <div className="iconContainer">
              <div className="icon">
                <Mail />
                <span>sfd@f</span>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
