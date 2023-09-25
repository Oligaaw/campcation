import React, { useState } from 'react'
import styles from '../page.module.css'

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ( {onAdd} ) => {
  const [text, setText] = useState<string>('')
 
  const handleAddClick = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('')
    } 
    
  };

  return (
    <div className={styles.toDoDiv}>
      <input 
        className={styles.inputField} 
        type="text"
        placeholder="Lägg till syssla..."
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      
      <button 
        className={styles.inputBtn} 
        onClick={handleAddClick}>
        Lägg till
        </button>
    </div>
  )
}

export default AddTodo