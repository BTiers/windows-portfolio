import React from "react";

type VSCodeProps = {};

const VSCode: React.FC<VSCodeProps> = ({}) => {
  return (
    <div className="relative flex flex-col flex-grow rounded-b-md">
      <iframe
        src="https://github1s.com/react-hook-form/react-hook-form"
        frameBorder="0"
        allowTransparency
        allow="encrypted-media"
        className="absolute left-0 w-full h-full rounded-b-md"
      ></iframe>
    </div>
  );
};

export default React.memo(VSCode);
