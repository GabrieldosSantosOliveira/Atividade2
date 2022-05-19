import Image from "next/image"
import styles from "/components/imagem.module.css"
export default function Imagem() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src='/images/profile.jpg'
          height={1156}
          width={521}
          alt="Your Name"
        />
      </div>
    </>
  )
}