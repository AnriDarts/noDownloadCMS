import "./watch.scss";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const { from } = location.state;
  const { videoToPlay } = location.state;

  console.log(from);
  console.log(videoToPlay);

  return (
    <div className="watch">
      <Link to={from}>
        <div className="back">
          <div className="icon-box">
            <KeyboardBackspaceIcon className="icon" />
          </div>
          <span>Home</span>
        </div>
      </Link>

      <video
        className="video"
        progress="true"
        autoPlay
        controls
        muted
        src={videoToPlay}
      />
    </div>
  );
}
