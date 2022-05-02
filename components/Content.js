import styles from "/components/content.module.css"
export default function Content(props){
  return (
    <>
      <div className={styles.container}>
        {props.text}
      </div>
    </>
  )
}