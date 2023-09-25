import Link from '@/node_modules/next/link'
import React from 'react'
import styles from '../../page.module.css'

function about() {
  return (
    <div className={styles.containerDiv}>
      <h1 className={styles.h1}>Om mig</h1>
      <Link className={styles.backLink} href="/">Tillbaka</Link>
    </div>
  )
}

export default about