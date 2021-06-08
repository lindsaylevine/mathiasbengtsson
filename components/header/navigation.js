import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Navigation({ index }) {

  return (
    <nav>
      <div>
        Menu
      </div>
      <ul>
        {index.pages.map((page, i) => (
          <Li key={i} data={page} />
        ))}
      </ul>
    </nav>
  )
}

function Li({ data }) {
  const { slug, title } = data.fields
  const router = useRouter()
  const active = router.query.page === slug
  const archive = router.query.item && slug === "archive"

  return (
    <li className={active || archive ? `active` : undefined}>
      <Link href={`/${slug}`}>
        {title}
      </Link>
    </li>
  )
}
