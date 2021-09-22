import { useCallback } from "react";
import { useLocalStorage } from "react-use";

import { createContainer } from "unstated-next";

export type OSSettings = {
  brightness: number;
};

function useOS(initialState: OSSettings = { brightness: 100 }) {
  const [settings, setSettings] = useLocalStorage("os-settings", initialState);

  const setBrightness = useCallback(
    (brightness: number) => {
      setSettings((settings) => ({ ...settings, brightness }));
    },
    [setSettings]
  );

  return { settings, setBrightness };
}

export default createContainer(useOS);
