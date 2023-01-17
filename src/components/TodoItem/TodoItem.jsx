import formatDate from "../../utils/fornatDate";

const TodoItem = ({ setTodos, todo }) => {

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
        <div className="item">
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
    );
}

export default TodoItem;