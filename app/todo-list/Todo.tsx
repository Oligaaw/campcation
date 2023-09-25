import React from 'react';
import styles from '../page.module.css'
import Button from './Button';

interface TodoProps {
  text: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, onDelete }) => {
  return (

    <li className={styles.li}>
      <p>{text}</p>
      <Button onClick={onDelete} />
    </li>


  );
};

export default Todo;