/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect, ChangeEvent, useMemo, useCallback } from "react";
import List, { Todo } from "./components/List";

const initialTodos: Todo[] = [
  { id: 1, task: "Go Shopping" },
  { id: 2, task: "Pay the electric bill" },
];

const App: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>("");
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    console.log("Rendering <App />");
  });

  const printTodoList = () => {
    console.log("Changing todoList");
  }

  useEffect(() => {
    printTodoList();
  }, [todoList])

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };

    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  const handleSearch = () => {
    setTerm(task);
  }

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const _filteredTodoList = useMemo(() => {
    todoList.filter((todo: Todo) => {
      console.log("Filtering...")
      return todo.task.toLowerCase().includes(term.toLowerCase())
    })
  }, []) 

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={todoList} handleDelete={handleDelete} />
    </>
  );
};

export default App;
