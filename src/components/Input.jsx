
function Input({
  label,
  value,
  handleChange,
  placeholder = '',
}) {

  const keyString = label.split(' ').map((str, index) => {
    if (index === 0) {
      return str.toLowerCase()
    } else {
      return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
    }
  }).join('')

  return <input
    placeholder={placeholder ? placeholder : label}
    value={value}
    onChange={(e) => handleChange(e.target.value, keyString)}
  />
}


export default Input
