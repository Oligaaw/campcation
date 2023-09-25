import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import pic from '../public/IMG_20191110_035612_912.jpg'

export default function Home() {
  return (
    <>
    <h1 className={styles.h1}>Olivia Gawelek</h1>
    <div className={styles.div}>
      <Image className={styles.image} priority={true} alt='image' src={pic}></Image>
      <ul className={styles.firstPageUl}>
        <li>
        <Link className={styles.todoLink} href="/todo-list">Att göra-lista</Link>
        </li>
        <li>
        <Link className={styles.todoLink} href="/todo-list/contact">Kontakt</Link>
        </li>
        <li>
        <Link className={styles.todoLink} href="/todo-list/about">Om mig</Link>
        </li>
      </ul>
    </div>
 
    
  </>
  )
}
