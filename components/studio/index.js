import { useState } from 'react'
import Entry from './entry'
import Indicator from './indicator'
import styles from './studio.module.css'

export default function Studio({ data }) {
  const [progress, setProgress] = useState(1)

  return (
    <section className={styles.grid}>
      <div className="assets">
        {data.components.map((entry, i) => (
          <Entry key={i} data={entry} />
        ))}
      </div>
      <ul className="indicator list-style-none">
        {data.components.map((entry, i) => (
          <Indicator key={i} data={entry} i={i} />
        ))}
      </ul>
    </section>
  )
}
