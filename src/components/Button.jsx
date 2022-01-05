export default function Button({text, color}) {
  return (
    <button style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "blue"
}