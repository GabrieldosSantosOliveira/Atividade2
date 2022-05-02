import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Menu from '../../components/Menu'
import Content from "../../components/Content"
import Footer from "../../components/Footer"
import Logo from "../../components/Logo"
import Imagem from "../../components/Imagem"

export default function Contatos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>Will
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <Menu />
      <Imagem />
      <Content text="Contatos" />
      <Footer />


    </div>
  )
}
