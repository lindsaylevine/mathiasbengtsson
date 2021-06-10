import styles from './archive.module.css'
import { useRouter } from 'next/router'
import { formatDate } from '../../lib/utils'

export default function Entry({ data }) {
  const router = useRouter()

  const {
    heroImage,
    material,
    dimensions,
    name,
    releaseDate,
    type,
    slug
  } = data.fields

  return (
    <li
      className={styles.listItem}
      onClick={() => router.push({
        pathname: "/archive/[artwork]",
        query: { artwork: slug },
      })}
      >
      <span>{name}</span>
      <span>{type}</span>
      <span>{material}</span>
      <span>{dimensions}</span>
      <span>{formatDate(releaseDate)}</span>
    </li>
  )
}
