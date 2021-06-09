import Entry from './entry'

export default function Biography({ data }) {

  return (
    <section className="block col-2 soft-breaks">
      {data.components.slice(0, 2).map((entry, i) => (
        <Entry data={entry} />
      ))}
    </section>
  )
}
