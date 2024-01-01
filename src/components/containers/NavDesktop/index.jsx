import { navListData } from '../../../data.js'
import NavDesktopList from '../../NavDesktopList'
import Button from '../../ui/Button'
import style from './NavDesktop.module.css'

const NavDesktop = () => {
  const { navDesktop, navDesktopCtaContainer } = style
  return (
    <nav className={navDesktop}>
      <NavDesktopList data={navListData} />
      <div className={navDesktopCtaContainer}>
        <Button variant="outline" content="Log in" />
        <Button content="Sign up" />
      </div>
    </nav>
  )
}

export default NavDesktop
