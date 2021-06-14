import styles from './studio.module.css'

export default function Entry({ data, i, display }) {
  const { title, artwork } = data.fields

  return (
    <li className={styles.reference}>
      <span style={{ display: display ? "inline" : "none" }}>–{title}–</span><span className="md">&ensp;{i + 1}</span>
    </li>
  )
}
