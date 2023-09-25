'use client'
import Link from 'next/link'
import styles from '../page.module.css'
import AddTodo from '../todo-list/AddTodo'
import React, { useState } from 'react'
import TodoList from './TodoList'


const Home: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, text])
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1 className={styles.todoH1}>Todo list</h1>
      <AddTodo onAdd={addTodo} />
      <div className={styles.todolist}>
        <p className={styles.p}>Saker att göra:</p>
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
      <div className={styles.div}>
        <Link className={styles.backLink} href="/">Tillbaka</Link>
      </div>
    </div>
  );
};

export default Home