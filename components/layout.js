import Meta from '../components/meta'
import Alert from '../components/alert'

export default function Layout({ preview, children }) {

  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <header>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
