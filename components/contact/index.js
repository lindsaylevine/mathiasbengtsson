import Entry from './entry'

export default function Contact({ data }) {
  return (
    <section className="block">
      {data.components.map((entry, i) => (
        <Entry key={i} data={entry} />
      ))}
    </section>
  )
}
