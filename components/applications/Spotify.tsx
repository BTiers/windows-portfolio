import React from "react";

type SpotifyProps = {};

const Spotify: React.FC<SpotifyProps> = ({}) => {
  return (
    <div className="relative flex flex-col flex-grow rounded-b-md">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZzDkZsrzkqm"
        frameBorder="0"
        allowTransparency
        allow="encrypted-media"
        className="absolute left-0 w-full h-full rounded-b-md"
      ></iframe>
    </div>
  );
};

export default React.memo(Spotify);
