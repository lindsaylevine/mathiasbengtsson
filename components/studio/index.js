import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Entry from './entry'
import Indicator from './indicator'
import styles from './studio.module.css'

const INCREMENT = 200

export default function Studio({ data }) {
  const [progress, setProgress] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    const calc = Math.round(-currPos.y / INCREMENT)
    if (calc !== progress) setProgress(calc)
  }, [progress])

  return (
    <div className={styles.container} style={{ height: `calc(100vh + ${(data.components.length - 1) * INCREMENT}px)` }}>
      <section className={styles.grid}>
        <div className={styles.assets}>
          {data.components.map((entry, i) => (
            <Entry key={i} data={entry} display={i <= progress} />
          ))}
        </div>
        <ul className={`${styles.indicator} list-style-none`}>
          {data.components.map((entry, i) => (
            <Indicator key={i} data={entry} i={i} display={i === progress} />
          ))}
        </ul>
      </section>
    </div>
  )
}
