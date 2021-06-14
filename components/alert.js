export default function Alert({ preview }) {

  if (preview) {
    return (
      <div className="alert">
        This is a preview.{' '}
        <a href="/api/exit-preview">
          Click here to exit preview mode.
        </a>
      </div>
    )
  }

  return null
}
