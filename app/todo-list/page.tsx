'use client'
import Link from '@/node_modules/next/link'
import styles from '../page.module.css'
import AddTodo from '../AddTodo'
import React, { useState } from 'react'
import TodoList from '../todoList'


const toDo: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (text: string) => {
    setTodos([...todos, text])
  };

  return (
    <div className={styles.containerDiv}>
      <h1 className={styles.todoH1}>Todo list</h1>
      <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} />
      <div>
        <Link className={styles.backLink} href="/">Tillbaka</Link>
      </div>
    </div>
  )
}

export default toDo