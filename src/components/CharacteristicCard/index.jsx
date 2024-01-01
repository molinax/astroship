import {
  RiSuitcaseFill,
  RiTerminalWindowFill,
  RiBox3Fill,
  RiRobot2Fill,
  RiFileSearchFill,
  RiUser3Fill,
  RiFileExcelLine
} from 'react-icons/ri'

import style from './CharacteristicCard.module.css'

const CharacteristicsIcons = ({ iconName }) => {
  const icons = {
    suitcase: <RiSuitcaseFill />,
    terminal: <RiTerminalWindowFill />,
    component: <RiBox3Fill />,
    bot: <RiRobot2Fill />,
    searchFile: <RiFileSearchFill />,
    user: <RiUser3Fill />
  }

  return icons[iconName] || <RiFileExcelLine />
}

const CharacteristicsCard = ({ iconName, title, content }) => {
  const { characteristicCard, characteristicCardIconContainer } = style

  return (
    <article className={characteristicCard}>
      <span className={characteristicCardIconContainer}>
        <CharacteristicsIcons iconName={iconName} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default CharacteristicsCard
