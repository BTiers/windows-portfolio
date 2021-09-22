import React from "react";

import Windows from "../../context/Windows";

import Window from "./Window";

type MainProps = {};

const Main: React.FC<MainProps> = ({}) => {
  const { windows } = Windows.useContainer();

  return (
    <div className="flex flex-grow">
      {windows.map(({ id, ...windowProps }) => (
        <Window key={id} id={id} {...windowProps} />
      ))}
    </div>
  );
};

export default React.memo(Main);
