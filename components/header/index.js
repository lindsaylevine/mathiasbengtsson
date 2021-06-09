import Navigation from './navigation'
import Link from 'next/link'

export default function Header({ index, margin, fixed }) {
  return (
    <header className={"main " + (margin ? "block " : "inline ") + (fixed ? "fixed" : "static")}>
      <div className="mb-title">
        <Link href={"/"}>
          Mathias Bengtsson
        </Link>
      </div>
      <Navigation index={index} />
    </header>
  )
}
