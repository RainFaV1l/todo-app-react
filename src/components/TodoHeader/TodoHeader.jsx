import { useState } from "react";


const TodoHeader = ({ setTodos }) => {

    // Значение поля
    const [value, setValue] = useState('');

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

    // Функция обновления значения из поля
    const onChangeHandle = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="header">
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
    );
}

export default TodoHeader;