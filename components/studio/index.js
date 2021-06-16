import { useState } from 'react'
import Entry from './entry'
import Indicator from './indicator'
import styles from './studio.module.css'

const INCREMENT = 200

export default function Studio({ data }) {
  const [progress, setProgress] = useState(0)

  console.log(progress)

  return (
    <div className={styles.container}>
      <ul className={`${styles.indicator} list-style-none`}>
        {data.components.map((entry, i) => (
          <Indicator key={i} data={entry} i={i} display={i === progress} />
        ))}
      </ul>
      <div className={styles.snap}>
          {data.components.map((entry, i) => (
            <Entry key={i} data={entry} i={i} display={i <= progress} state={[progress, setProgress]} />
          ))}
      </div>
    </div>
  )
}
