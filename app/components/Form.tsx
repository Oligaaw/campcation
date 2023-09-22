import React from 'react'
import styles from '../page.module.css'

function Form() {
  return (
    <div>
      <form >
      <input className={styles.inputField} placeholder='Lägg till syssla...' ></input>
      <button className={styles.inputBtn}>Lägg till</button>
    </form>
    </div>
  )
}

export default Form