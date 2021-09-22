import React, { ReactChild, useState } from "react";

import { Rnd } from "react-rnd";

import { BsSquare } from "react-icons/bs";
import { AiOutlineLine, AiOutlineClose } from "react-icons/ai";

import Windows, { WindowState } from "../../context/Windows";
import { ApplicationDispatch, ApplicationIconDispatch } from "../applications/ApplicationDispatch";
import { useWindowSize } from "react-use";

type WindowProps = WindowState;

const Window: React.FC<WindowProps> = ({
  title,
  id,
  zIndex,
  fullScreen,
  minimized,
  active,
  app,
}) => {
  const windowSize = useWindowSize();
  const { toggleFullScreen, toggleMinimized, removeWindow, toForeground } = Windows.useContainer();

  const [size, setSize] = useState({ width: 800, height: 600 });
  const [position, setPosition] = useState({
    x: windowSize.width / 2 - 400,
    y: windowSize.height / 2 - 300,
  });

  return (
    <Rnd
      bounds="parent"
      className={`flex ${minimized ? "invisible" : ""} bg-gray-900 ${
        fullScreen ? "" : "rounded-md"
      } shadow-md`}
      style={{ zIndex: fullScreen ? 9999 : zIndex }}
      size={
        fullScreen ? { width: "100vw", height: "100%" } : { width: size.width, height: size.height }
      }
      position={fullScreen ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
      onDragStop={(_, dimensions) => setPosition({ x: dimensions.x, y: dimensions.y })}
      onResizeStop={(_, __, ref, ___, position) => {
        setSize({
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        setPosition({ ...position });
      }}
      minWidth={"400px"}
      disableDragging={fullScreen}
      dragHandleClassName="draggable-handle"
      resizeHandleClasses={
        fullScreen
          ? {
              top: "!w-0 !h-0",
              right: "!w-0 !h-0",
              bottom: "!w-0 !h-0",
              left: "!w-0 !h-0",
              topRight: "!w-0 !h-0",
              bottomRight: "!w-0 !h-0",
              bottomLeft: "!w-0 !h-0",
              topLeft: "!w-0 !h-0",
            }
          : undefined
      }
    >
      <div className="flex flex-col h-full shadow-lg" onClick={active ? undefined : () => toForeground(id)}>
        <div
          className={`flex items-center justify-between flex-shrink-0 w-full h-10 px-4 space-x-3 bg-gray-800 ${
            fullScreen ? "" : "rounded-t-md"
          } draggable-handle`}
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            <ApplicationIconDispatch application={app} iconClassNames="w-5 h-5" />
            <span className="min-w-0 text-sm font-semibold truncate cursor-default text-gray-50">
              {title}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-100">
            <button onClick={() => toggleMinimized(id)}>
              <AiOutlineLine className="w-4 h-4" />
            </button>
            <button onClick={() => toggleFullScreen(id)}>
              <BsSquare className="w-3 h-3" />
            </button>
            <button onClick={() => removeWindow(id)}>
              <AiOutlineClose className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto rounded-b-md">
          <ApplicationDispatch application={app} />
        </div>
      </div>
    </Rnd>
  );
};

export default React.memo(Window);
