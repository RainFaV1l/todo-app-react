import { useState, useEffect } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoItem from "./components/TodoItem/TodoItem";

const App = () => {

  // Состоянии (данные) задач
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      date: new Date(),
      checked: false
    },
    {
      id: 2,
      name: "Заправить автомобиль (Lada Granta - чёрного цвета 21 века)",
      date: new Date(),
      checked: false
    }
  ]);

  return (
    <div className="layout">
      
      <TodoHeader setTodos={setTodos}/>

      {/* Все задачи */}
      <div className="allQuestion">
        {/* Одна задача */}
        {
          todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo} />)
        }
      </div>
    </div>
  );
};

export default App;