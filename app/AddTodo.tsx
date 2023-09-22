'use client';
import React, { useState } from 'react'
import styles from './page.module.css'

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const Form: React.FC<AddTodoProps> = ( {onAdd} ) => {
  const [task, setTask] = useState<string>('')
 

  const handleTask = () => {
    if (task.trim() !== '') {
      onAdd(task);
    }
    
  }

  return (
    <div>
      <form >
      <input className={styles.inputField} type='text' placeholder='Lägg till syssla...' value={task} onChange={(e) => setTask(e.target.value)} ></input>
      <button className={styles.inputBtn} onClick={handleTask}>Lägg till</button>
    </form>
    </div>
  )
}

export default Form