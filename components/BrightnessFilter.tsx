import React from "react";
import OS from "../context/OS";

type BrightnessFilterProps = {};

const BrightnessFilter: React.FC<BrightnessFilterProps> = ({}) => {
  const { settings } = OS.useContainer();

  console.log(settings?.brightness)

  return (
    <div
      className="absolute w-screen h-screen pointer-events-none not-sr-only backdrop-filter z-[9999]"
      style={{
        backdropFilter: `brightness(${settings?.brightness}%)`,
      }}
    />
  );
};

export default React.memo(BrightnessFilter);
