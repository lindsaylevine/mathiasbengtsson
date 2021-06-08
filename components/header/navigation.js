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
  console.log(router.query.page)

  return (
    <li className={active && `active`}>
      <Link href={`/${slug}`}>
        {title}
      </Link>
    </li>
  )
}
