import React from "react";

import { format } from "date-fns";

import TodoListContext from "../../context/TodoList";

import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useMemo } from "react";
import { first } from "lodash";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = ({}) => {
  const { todolist, addList, removeList, addTodo, removeTodo, setList, setActiveList, setTodo } =
    TodoListContext.useContainer();

  const activeList = useMemo(
    () => todolist?.list.find(({ active }) => active) || first(todolist?.list),
    [todolist]
  );

  return (
    <div className="relative flex flex-1 max-h-full overflow-y-auto rounded-b-md">
      <div className="w-1/4 min-w-[100px] overflow-y-auto bg-gray-900 rounded-bl-md flex flex-col">
        <div className="flex flex-col flex-1 h-0 overflow-y-auto bg-gray-900 divide-y divide-gray-800">
          {todolist?.list.map(({ id, items, updatedAt, title, active }) => (
            <div
              key={id}
              className={`flex ${
                active ? "bg-blue-600" : ""
              } justify-between flex-shrink-0 pl-6 pr-4 space-y-1 group`}
            >
              <button className="flex flex-col flex-1 py-3 overflow-hidden" onClick={() => setActiveList(id || "")}>
                <div className="flex max-w-full min-w-0 text-sm font-black tracking-normal text-gray-100">
                    <p className="truncate">{title}</p></div>
                <div className="flex items-baseline justify-between w-full">
                  <span className="text-xs text-gray-100">
                    {format(new Date(updatedAt), "MM/dd/yyyy")}
                  </span>
                  <div className={`text-xs ${active ? "text-gray-200" : "text-gray-400"}`}>
                    {items.length} item{items.length > 1 ? "s" : ""}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => addList("New list")}
          className="flex items-center justify-center flex-shrink-0 py-3 space-x-3 bg-blue-600 hover:bg-blue-700"
        >
          <span className="text-white">
            <AiOutlinePlus />
          </span>
          <span className="text-sm font-semibold text-white">Create a list</span>
        </button>
      </div>
      {!activeList ? (
        <div className="flex flex-col items-center justify-center flex-grow space-y-4 bg-gray-800 border-t border-gray-900 rounded-br-md">
          <div className="text-2xl font-semibold text-gray-500">Get Started by creating a list</div>
          <button
            onClick={() => addList("New list")}
            className="flex items-center justify-center flex-shrink-0 px-4 py-2 space-x-3 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <span className="text-white">
              <AiOutlinePlus />
            </span>
            <span className="text-sm font-semibold text-white">Create a list</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col flex-grow px-8 pt-6 space-y-4 bg-gray-800 border-t border-gray-900 rounded-br-md">
          <div className="flex items-center justify-between space-x-3">
            <input
              placeholder="Your list name..."
              className="block w-full px-2 py-1 -ml-2 text-3xl text-gray-100 bg-gray-800 border-0 rounded appearance-none font-semi bold focus:outline-none focus:bg-gray-700 focus:text-white overflow-ellipsis focus:ring-0"
              value={activeList?.title}
              onChange={(e) => setList(activeList?.id, { title: e.target.value })}
            />
            <button
              onClick={() => removeList(activeList?.id)}
              className="p-2 text-white bg-gray-700 rounded-full hover:bg-red-600"
            >
              <AiOutlineDelete />
            </button>
          </div>
          <div className="flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between py-4 space-x-3">
              <span className="text-sm font-semibold text-gray-100 uppercase">Todos</span>
              <button
                onClick={() => addTodo(activeList?.id, "New todo")}
                className="flex items-center justify-center flex-shrink-0 p-2 bg-gray-600 rounded-full hover:bg-gray-700"
              >
                <span className="text-white">
                  <AiOutlinePlus className="w-4 h-4" />
                </span>
              </button>
            </div>
            <div className="flex flex-col flex-1 space-y-3 overflow-y-auto">
              {activeList?.items.map(({ id, title, checked }) => (
                <div key={id} className="flex items-center px-1 space-x-3 bg-gray-800 group">
                  <input
                    type="checkbox"
                    className="bg-gray-800 rounded appearance-none cursor-pointer !ring-0 box-border focus:outline-none"
                    checked={checked}
                    onChange={(e) => setTodo(activeList?.id, id, { checked: e.target.checked })}
                  />
                  <input
                    className={`"block flex-grow py-1 px-2 text-sm font-semibold text-gray-100 focus:outline-none bg-gray-800 border-0 appearance-none focus:bg-gray-700 focus:text-white overflow-ellipsis focus:ring-0 ${
                      checked ? "text-gray-300 line-through focus:no-underline" : "text-gray-100"
                    } rounded`}
                    value={title}
                    onChange={(e) => setTodo(activeList?.id, id, { title: e.target.value })}
                  />
                  <button
                    onClick={() => removeTodo(activeList?.id, id)}
                    className="invisible p-2 text-white bg-gray-700 rounded-full group-hover:visible hover:bg-red-600"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(TodoList);
