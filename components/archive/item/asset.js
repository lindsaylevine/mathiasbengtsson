import styles from './assets.module.css'

export default function Asset({ data }) {
  const {
    asset,
    caption,
    fullscreen,
    rightAligned
  } = data.fields
  console.log({asset, fullscreen, rightAligned})
  const position = rightAligned === true ? " right-aligned " : rightAligned === false ? " left-aligned " : " centered "
  const isFullscreen = fullscreen ? "fullscreen" : "margins"
  return (
    <figure className={styles.asset + position + isFullscreen}>
      <img
        src={asset.fields.file.url}
        />
      {caption &&
        <figcaption>
          {caption}
        </figcaption>
      }
    </figure>
  )
}
