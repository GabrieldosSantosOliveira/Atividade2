import Link from 'next/link'
import Image from 'next/image'
import  styles from "/components/menu.module.css"


export default function Menu() {
  return( 
    <>
      <div className={styles.container}>
      <div>
     <Link href="/posts/sobre">
    <a>Sobre</a>
    </Link>
      </div>
        <div>
    <Link href="/posts/login">
    <a>Login</a>
    </Link>
          </div>
        <div>
    <Link href="/posts/contatos">
    <a>Contatos</a>
    </Link>
          </div>
        <div>
    <Link href="/posts/cadastro">
    <a>Cadastro</a>
        </Link>
          </div>
        </div>
    </>
    )
}