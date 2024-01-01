import { useState, useEffect } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import Logo from '../../ui/Logo'
import NavMobile from '../NavMobile'
import NavDesktop from '../NavDesktop'
import style from './Header.module.css'

const Header = () => {
  const [hasMenu, setHasMenu] = useState(false)
  const { headerContainer, headerIcon } = style

  const toggleMenu = () => setHasMenu(!hasMenu)

  useEffect(() => {
    const handleResize = () => window.innerWidth > 960 && setHasMenu(false)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header>
      <div className={headerContainer}>
        <Logo />
        <NavDesktop />
        {hasMenu
          ? <RiCloseLine className={headerIcon} onClick={toggleMenu} />
          : <RiMenuLine className={headerIcon} onClick={toggleMenu} />}
      </div>
      <NavMobile hasMenu={hasMenu} />
    </header>
  )
}

export default Header
