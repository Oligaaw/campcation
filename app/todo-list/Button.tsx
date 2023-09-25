import React from 'react'
import styles from '../page.module.css'

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {

  return (
    <button className={styles.button} onClick={onClick}>Radera</button>
  )
}

export default Button