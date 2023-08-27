import React from "react";
import Youtube from "react-youtube";
import "./Watchmovie.css";
function Watchmovie() {
  return (
    <div className="movieparentdiv">
      {localStorage.getItem("Trailer") ? (
        <Youtube
          className="youtube "
          allowfullscreen="allowfullscreen"
          opts={{
            playerVars: { autoplay: 1 },
          }}
          videoId={localStorage.getItem("Trailer")}
        />
      ) : (
        <img
          className="nomovie"
          src="../../Watchmovie/Nomovie.jpg"
          alt=""
        ></img>
      )}
    </div>
  );
}

export default Watchmovie;
