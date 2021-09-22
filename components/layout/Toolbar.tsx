import React, { Fragment, useState } from "react";

import { useInterval, useNetworkState } from "react-use";
import { format } from "date-fns";

import { Popover, Transition } from "@headlessui/react";

import Windows from "../../context/Windows";
import OS from "../../context/OS";

import MainMenu from "../MainMenu";

import { AiFillAlert, AiOutlineClose, AiOutlineDisconnect, AiOutlineWifi } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FaEthernet } from "react-icons/fa";
import { ApplicationIconDispatch } from "../applications/ApplicationDispatch";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useInterval(() => setTime(new Date()), 1000);

  return (
    <div className="flex flex-col items-center !ml-2 text-xs text-gray-100">
      <span>{format(time, "p")}</span>
      <span>{format(time, "eeee")}</span>
      <span>{format(time, "M/dd/yyyy")}</span>
    </div>
  );
};

const Brightness: React.FC = () => {
  const { setBrightness, settings } = OS.useContainer();

  return (
    <Popover>
      <Popover.Button className="flex items-center justify-center p-2 rounded-sm hover:bg-gray-500 hover:backdrop-blur-lg hover:bg-opacity-20">
        <span className="flex items-center justify-center rounded-sm">
          <FiSun className="w-4 h-4 text-gray-100" />
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
        <Popover.Panel className="absolute flex flex-col px-3 py-2 bg-gray-800 rounded-md text-gray-50 right-3 bottom-14 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="text-sm font-semibold">Brightness</span>
              <span className="text-sm font-semibold text-gray-300">{settings?.brightness}%</span>
            </div>
            <input
              className="h-2"
              value={settings?.brightness}
              onChange={(e) => setBrightness(e.target.valueAsNumber)}
              type="range"
              min="20"
              max="100"
            />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Network: React.FC = () => {
  const networkState = useNetworkState();

  return (
    <Popover>
      <Popover.Button className="flex items-center justify-center p-2 rounded-sm hover:bg-gray-500 hover:backdrop-blur-lg hover:bg-opacity-20">
        <span className="flex items-center justify-center rounded-sm">
          {!networkState.online ? (
            <AiOutlineDisconnect className="w-5 h-5 text-gray-100" />
          ) : networkState.type === "wifi" || !!networkState.effectiveType ? (
            <AiOutlineWifi className="w-5 h-5 text-gray-100" />
          ) : networkState.type === "ethernet" ? (
            <FaEthernet className="w-5 h-5 text-gray-100" />
          ) : null}
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
        <Popover.Panel className="absolute flex flex-col px-3 py-2 bg-gray-800 rounded-md text-gray-50 right-3 bottom-14 backdrop-blur-2xl">
          <div className="flex flex-col w-48 space-y-2">
            <span className="text-sm font-semibold">Network details :</span>
            <div className="flex justify-between space-x-1 font-semibold">
              <span className="text-xs text-gray-400">Status :</span>
              <span className="text-xs text-gray-200">
                {networkState.online ? "Connected" : "Disconnected"}
              </span>
            </div>
            <div className="flex justify-between space-x-1 font-semibold">
              <span className="text-xs text-gray-400">Connection type :</span>
              <span className="text-xs text-gray-200">
                {networkState.type === "wifi" && "Wifi"}
                {networkState.type === "ethernet" && "Ethernet"}
                {networkState.effectiveType}
              </span>
            </div>
            <div className="flex justify-between space-x-1 font-semibold">
              <span className="text-xs text-gray-400">Since :</span>
              <span className="text-xs text-gray-200">
                {format(networkState.since || new Date(), "p")}
              </span>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = ({}) => {
  const { windows, removeWindow, toForeground } = Windows.useContainer();

  return (
    <div className="flex items-center justify-between w-full h-12 max-w-full bg-gray-800 backdrop-blur-lg bg-opacity-30">
      <div className="flex items-center flex-1 flex-shrink min-w-0 px-1 space-x-3">
        <MainMenu />
        <span className="w-0.5 h-8 !ml-1 bg-gray-600/10" />
        {windows.map(({ title, id, app, active }) => (
          <div
            key={id}
            className={`flex items-center min-w-0 rounded px-3 space-x-1 text-sm font-semibold text-white ${
              active ? "bg-gray-100/20" : "bg-gray-400/10"
            }`}
          >
            <button
              className="flex items-center min-w-0 py-2 space-x-2"
              onClick={() => toForeground(id)}
            >
              <ApplicationIconDispatch application={app} iconClassNames="w-5 h-5" />
              <span className="truncate">{title}</span>
            </button>
            <button
              className="flex items-baseline mt-0.5 p-1 rounded-full hover:bg-white group"
              onClick={() => removeWindow(id)}
            >
              <AiOutlineClose className="w-3 h-3 text-white group-hover:text-gray-800" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-shrink-0 mr-3 space-x-1">
        <Brightness />
        <Network />
        <Clock />
      </div>
    </div>
  );
};

export default React.memo(Toolbar);
