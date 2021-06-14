import styles from './studio.module.css'
import { Img } from '../../lib/image'

export default function Entry({ data, display }) {
  const { media, artwork } = data.fields

  return (
    <figure className={styles.asset} style={{ display: display ? "block" : "none" }}>
      <Img
        src={media.fields.file.url}
        width={media.fields.file.details.image.width}
        height={media.fields.file.details.image.height}
        alt={media.fields.description ?? "No description available"}
        />
    </figure>
  )
}
