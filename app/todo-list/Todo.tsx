import React from 'react';
import styles from '../page.module.css'

interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  return (
    <>
    <p className={styles.p}>Saker att göra:</p>
    <li>
      <p>{text}</p>
    </li>
    </>
  );
};

export default Todo;