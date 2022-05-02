import styles from "/components/logo.module.css"
import Link from 'next/link'
export default function Logo() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a> ANDRE VIOLIN</a>
        </Link>
      </div>
    </>
  )
}