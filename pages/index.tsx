import type { NextPage } from "next";

import dynamic from "next/dynamic";
import Image from "next/image";

import Windows from "../context/Windows";
import OS from "../context/OS";
import TodoList from "../context/TodoList";

import Main from "../components/layout/Main";

import Wallpaper from "../public/img/wallpaper.jpeg";

const BrightnessFilter = dynamic(() => import("../components/BrightnessFilter"), { ssr: false });
const Toolbar = dynamic(() => import("../components/layout/Toolbar"), { ssr: false });

const Home: NextPage = () => {
  return (
    <OS.Provider>
      <Windows.Provider>
        <TodoList.Provider>
          <BrightnessFilter />
          <div className="flex flex-col w-screen min-h-screen">
            <Image className="select-none" alt="Wallpaper" layout="fill" src={Wallpaper.src} />
            <Main />
            <Toolbar />
          </div>
        </TodoList.Provider>
      </Windows.Provider>
    </OS.Provider>
  );
};

export default Home;
