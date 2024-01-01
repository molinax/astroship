import { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import Badge from '../ui/Badge'
import style from './NavDesktopList.module.css'

const NavDesktopList = ({ data }) => {
  const [listOpened, setListOpened] = useState(false)
  const { navDesktopList, navDesktopChildrenList } = style
  const showChildrenList = { display: listOpened ? 'flex' : 'none' }
  const toggleListOpened = () => setListOpened(!listOpened)

  return (
    <ul className={navDesktopList}>
      {data.map(({ href, content, badge, children }, i) => (
        <li
          key={i}
          onClick={children && toggleListOpened}
          className="nav-list-item"
        >
          <a href={href} className={`nav-item ${badge && 'nav-item__badge'}`}>
            {content} {badge && <Badge content={badge} />}
          </a>
          {children && <RiArrowDownSLine />}
          {children && (
            <div className={navDesktopChildrenList} style={showChildrenList}>
              <NavDesktopList data={children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavDesktopList
