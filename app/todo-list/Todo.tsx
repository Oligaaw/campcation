import React from 'react';
import styles from '../page.module.css'

interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  return (

      <li className={styles.li}>
        <span>{text}</span>
      </li>
    

  );
};

export default Todo;