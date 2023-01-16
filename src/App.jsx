import { useState, useEffect } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}.${month}.${year}`;
}

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

  // Значение поля
  const [value, setValue] = useState('');

  // Функция обновления значения из поля
  const onChangeHandle = (event) => {
    setValue(event.target.value);
  }

  // Функция добавления задачи
  const onSubmitHandle = (event) => {
    event.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];

      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false
      });

      return prevState;
    });

    setValue('');
  }

  // Функция переключение статуса задачи
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked
          }
        }

        return todo;
      });

      return prevState;
    });
  }

  // Функция удаления todo из массива по ID
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.filter((todo) => todo.id !== id);

      return prevState;
    });
  }

  return (
    <div className="layout">
      <div>
        <form onSubmit={(e) => onSubmitHandle(e)}>
          <h2>Добавить задачу:</h2>
          <input
            type="text"
            placeholder="Купить молоко..."
            onChange={(e) => onChangeHandle(e)}
            value={value}
          />
        </form>
      </div>

      {/* Все задачи */}
      <div className="allQuestion">
        {/* Одна задача */}
        {
          todos.map((todo) => {
            return (
              <div>
                <h3>{todo.name} ({formatDate(todo.date)})</h3>
                <div>
                  <button
                    onClick={() => onCheckedToggle(todo.id)}
                  >
                    {todo.checked ? "Не выполнена" : "Выполнено"}
                  </button>
                  <button className="del"
                    onClick={() => onDeleteTodoById(todo.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default App;