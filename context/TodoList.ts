import { useCallback } from "react";
import { useLocalStorage } from "react-use";

import { createContainer } from "unstated-next";
import { v4 as uuidv4 } from "uuid";

export type TodoItem = {
  id: string;
  title: string;
  checked: boolean;
};

export type TodoList = {
  title: string;
  updatedAt: number;
  id: string;
  active: boolean;
  items: TodoItem[];
};

export type TodoListState = {
  list: TodoList[];
};

function useTodoList(initialState: TodoListState = { list: [] }) {
  const [todolist, setTodolist] = useLocalStorage("todolist", initialState);

  const addList = useCallback(
    (title: string) => {
      setTodolist({
        list: [
          ...(todolist?.list.map((list) => ({ ...list, active: false })) || []),
          { title, active: true, updatedAt: Date.now(), items: [], id: uuidv4() },
        ],
      });
    },
    [setTodolist, todolist]
  );

  const removeList = useCallback(
    (listId: string) => {
      setTodolist({
        list: [...(todolist?.list.filter(({ id }) => id !== listId) || [])].map((list, index) => ({
          ...list,
          active: index === 0,
        })),
      });
    },
    [setTodolist, todolist]
  );

  const setList = useCallback(
    (listId: string, newList: Partial<TodoList>) => {
      setTodolist({
        list:
          todolist?.list.map((list) => {
            if (list.id === listId) return { ...list, updatedAt: Date.now(), ...newList };
            return { ...list };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  const setActiveList = useCallback(
    (listId) => {
      setTodolist({
        list:
          todolist?.list.map((list) => {
            if (list.id === listId) return { ...list, active: true };
            return { ...list, active: false };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  const addTodo = useCallback(
    (listId: string, title: string) => {
      setTodolist({
        list:
          todolist?.list.map(({ id, ...list }) => {
            if (id === listId)
              return {
                ...list,
                updatedAt: Date.now(),
                items: [{ title, checked: false, id: uuidv4() }, ...list.items],
                id,
              };
            return { ...list, id };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  const removeTodo = useCallback(
    (listId: string, itemId: string) => {
      setTodolist({
        list:
          todolist?.list.map(({ id, ...list }) => {
            if (id === listId)
              return {
                ...list,
                updatedAt: Date.now(),
                items: [...list.items.filter(({ id: todoItemId }) => todoItemId !== itemId)],
                id,
              };
            return { ...list, id };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  const toggleTodo = useCallback(
    (listId: string, itemId: string) => {
      setTodolist({
        list:
          todolist?.list.map(({ id, ...list }) => {
            if (id === listId)
              return {
                ...list,
                updatedAt: Date.now(),
                items: [
                  ...list.items.map(({ id: todoItemId, checked, ...todoItem }) => {
                    if (todoItemId === itemId)
                      return { ...todoItem, id: todoItemId, checked: !checked };
                    return { id: todoItemId, checked, ...todoItem };
                  }),
                ],
                id,
              };
            return { ...list, id };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  const setTodo = useCallback(
    (listId: string, todoId: string, newTodo: Partial<TodoItem>) => {
      setTodolist({
        list:
          todolist?.list.map((list) => {
            if (list.id === listId)
              return {
                ...list,
                updatedAt: Date.now(),
                items: list.items.map((item) => {
                  if (item.id === todoId) return { ...item, ...newTodo };
                  return { ...item };
                }),
              };
            return { ...list };
          }) || [],
      });
    },
    [setTodolist, todolist]
  );

  return {
    todolist,
    addList,
    addTodo,
    removeList,
    removeTodo,
    setList,
    setActiveList,
    setTodo,
    toggleTodo,
  };
}

export default createContainer(useTodoList);
