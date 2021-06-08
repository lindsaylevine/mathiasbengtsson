export default function Navigation({ index }) {
  console.log(index.pages)

  return (
    <nav>
      <div>
        Menu
      </div>
      <ul>
        {index.pages.map((page, i) => (
          <li key={i}>
            {page.fields.title}
          </li>
        ))}
      </ul>
    </nav>
  )
}
