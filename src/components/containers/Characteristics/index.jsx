import { RiReactjsFill, RiTriangleFill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'
import { characteristicsData } from '../../../data'
import SvelteIcon from '../../ui/icons/Svelte'
import BoxIcon from '../../ui/icons/Box'
import AstroIcon from '../../ui/icons/Astro'
import CharacteristicsCard from '../../CharacteristicCard'
import style from './Characteristics.module.css'

const Characteristics = () => {
  const {
    characteristics,
    characteristicsHeader,
    characteristicsCardContainer,
    characteristicsMediaContainer
  } = style

  return (
    <section className={`flex-col ${characteristics}`}>
      <header className={characteristicsHeader}>
        <h2>Everything you need to start a website</h2>
        <p>
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations
        </p>
      </header>
      <div className={characteristicsCardContainer}>
        {characteristicsData.map((characteristicItem, i) => (
          <CharacteristicsCard key={i} {...characteristicItem} />
        ))}
      </div>
      <div className={`flex-col ${characteristicsMediaContainer}`}>
        <p>Works with your tecnologies</p>
        <div>
          <RiReactjsFill />
          <SvelteIcon />
          <SiTailwindcss />
          <BoxIcon />
          <RiTriangleFill />
          <AstroIcon />
        </div>
      </div>
    </section>
  )
}

export default Characteristics
