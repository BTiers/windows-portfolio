import { useCallback, useState } from "react";

import { createContainer } from "unstated-next";

import { v4 as uuidv4 } from "uuid";
import { maxBy } from "lodash";
import { AvailableApplication } from "../components/applications/ApplicationDispatch";

export type WindowState = {
  id: string;
  fullScreen: boolean;
  minimized: boolean;
  zIndex: number;
  title: string;
  active: boolean;
  app: AvailableApplication;
};

function useWindows(initialState: WindowState[] = []) {
  let [windows, setWindows] = useState(initialState);

  const getHighestZIndex = useCallback(
    () => (maxBy(windows, "zIndex")?.zIndex || 0) + 1,
    [windows]
  );

  const addWindow = useCallback(
    (title: string, app: AvailableApplication) => {
      setWindows((previousState) => [
        ...previousState.map((window) => ({ ...window, active: false })),
        {
          id: uuidv4(),
          title,
          fullScreen: false,
          minimized: false,
          zIndex: getHighestZIndex(),
          active: true,
          app,
        },
      ]);
    },
    [getHighestZIndex]
  );

  const removeWindow = useCallback((windowId: string) => {
    setWindows((previousState) => previousState.filter(({ id }) => id !== windowId));
  }, []);

  const toggleFullScreen = useCallback(
    (windowId: string) =>
      setWindows((prevState) =>
        prevState.map((window) => {
          if (window.id === windowId)
            return {
              ...window,
              zIndex: getHighestZIndex(),
              fullScreen: !window.fullScreen,
              active: true,
            };
          return { ...window, active: false };
        })
      ),
    [getHighestZIndex]
  );

  const toggleMinimized = useCallback(
    (windowId: string) =>
      setWindows((prevState) =>
        prevState.map((window) => {
          if (window.id === windowId)
            return { ...window, zIndex: 0, minimized: !window.minimized, active: window.minimized };
          return window;
        })
      ),
    []
  );

  const toForeground = useCallback(
    (windowId: string) =>
      setWindows((prevState) =>
        prevState.map((window) => {
          if (window.id === windowId)
            return { ...window, zIndex: getHighestZIndex(), active: true, minimized: false };
          return { ...window, active: false };
        })
      ),
    [getHighestZIndex]
  );

  return { windows, addWindow, removeWindow, toggleFullScreen, toggleMinimized, toForeground };
}

export default createContainer(useWindows);
