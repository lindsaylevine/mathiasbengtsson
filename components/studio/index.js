import Entry from './entry'

export default function Studio({ data }) {

  return (
    <section>
      {data.components.map((entry, i) => (
        <Entry key={i} data={entry} />
      ))}
    </section>
  )
}
