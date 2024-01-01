import { navListData } from '../../../data'
import NavMobileList from '../../NavMobileList'
import Button from '../../ui/Button'
import style from './NavMobile.module.css'

const NavMobile = ({ hasMenu }) => {
  const { navMobile, navMobileCtaContainer } = style
  const showMenu = { display: hasMenu ? 'flex' : 'none' }

  return (
    <nav className={`${navMobile} flex-col`} style={showMenu}>
      <NavMobileList data={navListData} />
      <div className={navMobileCtaContainer}>
        <Button variant="outline" content="Log in" />
        <Button content="Sign up" />
      </div>
    </nav>
  )
}

export default NavMobile
