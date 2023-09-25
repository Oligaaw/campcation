import React from 'react';
import Todo from './Todo'
import styles from '../page.module.css'

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul className={styles.ul}>
      {todos.map((todo, index) => (
        <div className={styles.todo} key={todo}>
        <Todo  text={todo} onDelete={() => onDelete(index)} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;