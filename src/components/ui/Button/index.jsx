import style from './Button.module.css'

const Button = ({ variant, content, children }) => {
  const variants = {
    default: 'defaultBtn',
    outline: 'outlineBtn'
  }

  const getVariant =
    variants[variant] !== undefined ? variants[variant] : style.defaultBtn

  return (
    <button className={`${style.btn} ${getVariant}`}>
      {content}
      {children}
    </button>
  )
}

export default Button
