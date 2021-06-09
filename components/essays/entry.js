import styles from './archive.module.css'
import { useRouter } from 'next/router'

export default function Entry({ data }) {
  const router = useRouter()

  const {
    author,
    date,
    title,
    slug
  } = data.fields

  return (
    <li
      className={styles.listItem}
      onClick={() => router.push({
        pathname: "/essays/[essay]",
        query: { essay: slug },
      })}
      >
      <span>{author}</span>
      <span>{title}</span>
      <span>{date}</span>
    </li>
  )
}
