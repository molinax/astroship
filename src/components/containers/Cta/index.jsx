import Button from '../../ui/Button'
import style from './Cta.module.css'

const Cta = () => {
  return (
    <section className={`flex-col ${style.cta}`}>
      <h2>Build fasters websites</h2>
      <p>Pull content from anywhere and serve it fast with Astro&apos;s next-gen island architecture.</p>
      <Button variant="outline" content="Get started" />
    </section>
  )
}

export default Cta
