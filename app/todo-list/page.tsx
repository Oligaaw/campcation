'use client'
import Link from '@/node_modules/next/link'
import styles from '../page.module.css'
import AddTodo from '../todo-list/AddTodo'
import React, { useState } from 'react'
import TodoList from './TodoList'


const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, text])
  };

  return (
    <div className={styles.containerDiv}>
      <h1 className={styles.todoH1}>Todo list</h1>
      <AddTodo onAdd={addTodo} />
      <p className={styles.p}>Saker att göra:</p>
      <TodoList todos={todos} />
      <div>
        <Link className={styles.backLink} href="/">Tillbaka</Link>
      </div>
    </div>
  );
};

export default ToDo