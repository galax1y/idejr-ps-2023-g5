import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/home.module.css'
import borderStyles from '../../styles/borders.module.css'

export default function HomeSection() {
  return (
    <section id='home' className={styles.section}>
      <Image
        alt=''
        width={704}
        height={803}
        className={styles.img}
        quality={100}
        priority
        src='/img/neko-anotando.png'
      />

      <div className={styles.titulo}>
        <p className={styles.dropShadow}>POKE</p>
        <p className={styles.dropShadow}>
          <span className={styles.textoVermelho}>IDE</span>X
        </p>
        <Link
          className={`${borderStyles.gridElementCorners} ${borderStyles.white} ${styles.botao}`}
          href='#start'
        >
          <span className={styles.dropShadow}>START</span>
        </Link>
      </div>
    </section>
  )
}
