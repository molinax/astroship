import style from './Badge.module.css'

const Badge = ({ content }) => {
  return (
    <span className={style.badge}>
      {content}
    </span>
  )
}

export default Badge
