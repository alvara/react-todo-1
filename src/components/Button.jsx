import PropTypes from 'prop-types'
export default function Button({text, color, action}) {
  return (
    <button style={{backgroundColor: color}} onClick={action} >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "blue"
}

Button.propTypes = {
  action : PropTypes.func.isRequired,
}