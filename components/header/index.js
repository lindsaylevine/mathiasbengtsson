import Navigation from './navigation'

export default function Header({ index }) {
  return (
    <header className="main">
      <div className="mb-title">
        Mathias Bengtsson
      </div>
      <Navigation index={index} />
    </header>
  )
}
