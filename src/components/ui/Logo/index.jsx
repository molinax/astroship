import style from './Logo.module.css'

const Logo = () => {
  return (
    <a className={style.logo} href="#">
      <span>Astro</span>
      ship
    </a>
  )
}

export default Logo
