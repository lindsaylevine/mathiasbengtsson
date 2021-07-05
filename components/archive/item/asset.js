import styles from './assets.module.css'
import { Img } from '../../../lib/image'

export default function Asset({ data }) {
  const {
    asset,
    caption,
    fullscreen,
    rightAligned
  } = data.fields

  console.log(asset)

  const position = rightAligned === true ? " right-aligned " : rightAligned === false ? " left-aligned " : " centered "
  const isFullscreen = fullscreen ? "fullscreen" : "margins"
  return (
    <figure className={styles.asset + position + isFullscreen}>
      {asset &&
        <Img
          src={asset.fields.file.url}
          width={asset.fields.file.details.image.width}
          height={asset.fields.file.details.image.height}
          alt={asset.fields.description ?? "No description available"}
          />
      }
      {caption &&
        <figcaption>
          {caption}
        </figcaption>
      }
    </figure>
  )
}
