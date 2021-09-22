import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";

import Windows from "../context/Windows";

import { GrWindows } from "react-icons/gr";
import { RiShutDownLine } from "react-icons/ri";
import { ApplicationIconDispatch } from "./applications/ApplicationDispatch";

type MainMenuProps = {};

const MainMenu: React.FC<MainMenuProps> = ({}) => {
  const { addWindow } = Windows.useContainer();

  return (
    <Popover className="z-50 flex items-center justify-center">
      <Popover.Button className="flex items-center justify-center p-2 rounded-sm hover:bg-gray-500 hover:backdrop-blur-lg hover:bg-opacity-20">
        <span className="flex items-center justify-center rounded-sm">
          <GrWindows className="w-5 h-5 text-blue-600" />
        </span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute select-none z-[9999] flex flex-col rounded-md shadow-md text-gray-50 left-3 bottom-14 bg-gray-900 backdrop-blur-2xl">
          <div className="flex items-center justify-between px-16 pt-8">
            <div className="text-xs font-semibold">Pinned</div>
            <button className="px-2 py-1 text-xs bg-gray-400 rounded backdrop-blur-lg bg-opacity-10">
              All apps <span className="ml-2">&gt;</span>
            </button>
          </div>
          <div className="grid grid-cols-5 px-12 mt-3 gap-x-8 gap-y-2">
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Poorly featured Chrome", "browser")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="browser" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Chrome</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Spotify", "spotify")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="spotify" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Spotify</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Netflix", "netflix")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="netflix" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Netflix</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Todos", "todolist")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="todolist" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Todos</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("VSCode", "vscode")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="vscode" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">VSCode</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Contact me", "contact")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="contact" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Contact me</span>
            </Popover.Button>

            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Poorly featured Chrome", "browser")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="browser" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Chrome</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Spotify", "spotify")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="spotify" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Spotify</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Netflix", "netflix")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="netflix" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Netflix</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Todos", "todolist")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="todolist" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Todos</span>
            </Popover.Button>

            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Poorly featured Chrome", "browser")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="browser" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Chrome</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Spotify", "spotify")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="spotify" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Spotify</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Netflix", "netflix")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="netflix" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Netflix</span>
            </Popover.Button>
            <Popover.Button
              className="flex flex-col items-center p-2 space-y-2 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
              onMouseUp={() => addWindow("Todos", "todolist")}
            >
              <span className="flex items-center justify-center text-lg font-black uppercase rounded-sm text-gray-50">
                <ApplicationIconDispatch application="todolist" iconClassNames="w-8 h-8" />
              </span>
              <span className="text-xs font-semibold text-gray-50">Todos</span>
            </Popover.Button>
          </div>
          <div className="flex justify-between px-16 mt-8">
            <div className="text-xs font-semibold">Recommended</div>
            <button className="px-2 py-1 text-xs font-semibold bg-gray-400 rounded backdrop-blur-lg bg-opacity-10">
              More <span className="ml-2">&gt;</span>
            </button>
          </div>
          <div className="grid grid-cols-2 px-16 mt-3 gap-x-6 gap-y-2">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <Popover.Button
                  className="flex items-center p-2 space-x-3 rounded hover:bg-gray-100 hover:backdrop-blur-lg hover:bg-opacity-20"
                  key={index}
                >
                  <span className="flex items-center justify-center w-4 h-4 p-4 text-lg font-black uppercase bg-blue-600 rounded-sm text-gray-50">
                    {index + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-50">{index + 1} - icons</span>
                    <span className="text-xs text-gray-300">4h ago</span>
                  </div>
                </Popover.Button>
              ))}
          </div>
          <div className="flex items-center justify-between px-16 py-4 mt-10 bg-gray-800 rounded-b-lg filter backdrop-blur-lg bg-opacity-30">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full" />
              <span className="text-xs text-gray-100">Tom Morello</span>
            </div>
            <div className="text-gray-50">
              <RiShutDownLine className="w-5 h-5" />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default React.memo(MainMenu);
