import React from 'react'
import Link from '@/node_modules/next/link'
import styles from '../page.module.css'
import Form from '../components/Form'


const toDo = () => {

  return (
    <div className={styles.containerDiv}>
      <h1 className={styles.todoH1}>Todo list</h1>
    <ul>
    <Form/>
    </ul>
    <div className={styles.linkDiv}>
      <Link className={styles.backLink} href="/">Tillbaka</Link>
    </div>
    </div>
  )
}

export default toDo