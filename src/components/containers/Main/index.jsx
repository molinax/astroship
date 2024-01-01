import Hero from '../Hero'
import Characteristics from '../Characteristics'
import Cta from '../Cta'
import style from './Main.module.css'

const Main = () => {
  return (
    <main className={`${style.main} flex-col`}>
      <Hero />
      <Characteristics />
      <Cta />
    </main>
  )
}

export default Main
