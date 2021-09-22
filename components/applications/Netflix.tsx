import React from "react";

type NetflixProps = {};

const Netflix: React.FC<NetflixProps> = ({}) => {
  return (
    <div className="relative flex flex-col flex-grow rounded-b-md">
      <iframe
        src="https://www.netflix.com/"
        frameBorder="0"
        allowTransparency
        allow="encrypted-media"
        className="absolute left-0 w-full h-full rounded-b-md"
      ></iframe>
    </div>
  );
};

export default React.memo(Netflix);
