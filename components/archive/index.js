import Entry from './entry'

export default function Archive({ data }) {
  return (
    <section className="block">
      <ul className="list list-style-none">
      {data.components.map((entry, i) => (
        <Entry key={i} data={entry} />
      ))}
      </ul>
    </section>
  )
}
