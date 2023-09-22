import Link from '@/node_modules/next/link'
import React from 'react'
import styles from '../../page.module.css'

function page() {
  return (
    <div className={styles.containerDiv}>
      <h1 className={styles.h1}>
        Kontakt
      </h1>
      <Link className={styles.backLink} href="/">Tillbaka</Link>
    </div>
  )
}

export default page