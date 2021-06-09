import styles from './studio.module.css'

export default function Entry({ data, i }) {
  const { title, artwork } = data.fields

  return (
    <li className={styles.reference}>
      {title} {i + 1}
    </li>
  )
}
