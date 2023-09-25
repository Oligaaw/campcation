import React from 'react';
import Todo from './Todo'

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} />
      ))}
    </ul>
  );
};

export default TodoList;