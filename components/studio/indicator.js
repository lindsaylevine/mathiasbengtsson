import styles from './studio.module.css'

export default function Entry({ data, i, display }) {
  const { title, artwork } = data.fields

  return (
    <li className={styles.reference}>
      <span style={{ visibility: display ? "visible" : "hidden" }}>
          {title}
      </span>
      <span className={"mds "}>
        &ensp;{i + 1}
      </span>
    </li>
  )
}
