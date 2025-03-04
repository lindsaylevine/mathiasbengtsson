import styles from './index.module.css'
import { useRouter } from 'next/router'

export default function Figure({ data }) {
  const router = useRouter()
  const {
    asset,
    caption,
  } = data
  const isLandscape = asset.fields.file.details.image.width >= asset.fields.file.details.image.height


  return (
    <figure
      className={`${styles.container} ${isLandscape ? styles.landscape : styles.portrait}`}
      style={{ width: "100vw", height: "100vh", background: `url(${asset.fields.file.url})`, backgroundSize: "cover" }}
      onClick={() => router.push("/studio")}>
      <figcaption className={styles.caption}>
        Click or press to enter
      </figcaption>
    </figure>
  )
}
