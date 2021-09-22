import React from "react";

import Browser from "./Browser";
import Spotify from "./Spotify";
import TodoList from "./TodoList";
import VSCode from "./VSCode";
import Contact from "./Contact";

import { AiFillChrome } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import VSCodeLogo from "../icons/VSCodeLogo";

export type AvailableApplication =
  | "browser"
  | "todolist"
  | "spotify"
  | "vscode"
  | "contact";

type ApplicationDispatchProps = {
  application: AvailableApplication;
};

const ApplicationDispatch: React.FC<ApplicationDispatchProps> = ({ application }) => {
  switch (application) {
    case "browser":
      return <Browser />;
    case "todolist":
      return <TodoList />;
    case "spotify":
      return <Spotify />;
    case "vscode":
      return <VSCode />;
    case "contact":
      return <Contact />;
  }
};

const ApplicationIconDispatch: React.FC<ApplicationDispatchProps & { iconClassNames: string }> = ({
  application,
  iconClassNames,
}) => {
  switch (application) {
    case "browser":
      return (
        <span className="text-blue-500">
          <AiFillChrome className={iconClassNames} />
        </span>
      );
    case "todolist":
      return (
        <span>
          <FcTodoList className={iconClassNames} />
        </span>
      );
    case "spotify":
      return (
        <span className="text-green-400">
          <FaSpotify className={iconClassNames} />
        </span>
      );
    case "vscode":
      return (
        <span className="text-blue-700">
          <VSCodeLogo className={iconClassNames} />
        </span>
      );
    case "contact":
      return (
        <span className="text-purple-500">
          <BiMailSend className={iconClassNames} />
        </span>
      );
  }
};

export { ApplicationDispatch, ApplicationIconDispatch };
