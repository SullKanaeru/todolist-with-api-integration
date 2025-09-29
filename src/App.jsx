import { Route, Routes } from "react-router";
import TodoList from "./pages/TodoList";
import AddTodoList from "./pages/AddTodoList";
import EditTodoList from "./pages/EditTodoList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/add" element={<AddTodoList />} />
      <Route path="/edit/:id" element={<EditTodoList />} />
    </Routes>
  );
};

export default App;
