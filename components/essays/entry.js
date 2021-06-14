import styles from './archive.module.css'
import { useRouter } from 'next/router'
import { objectToInlineList, formatDate } from '../../lib/utils'

export default function Entry({ data }) {
  const router = useRouter()

  const {
    authors,
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
      <span>{objectToInlineList(authors)}:</span>
      <span>{title}</span>
      <span>{formatDate(date)}</span>
    </li>
  )
}
