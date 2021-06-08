import Meta from '../components/meta'
import Alert from '../components/alert'
import Navigation from './header/navigation'

export default function Layout({ preview, children, index }) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <header>
        <div className="mb-title">
          Mathias Bengtsson
        </div>
        <Navigation index={index} />
      </header>
      <main>
        {children}
      </main>
    </>
  )
}
