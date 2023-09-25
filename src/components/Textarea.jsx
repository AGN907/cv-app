
function Textarea({
  label,
  value,
  handleChange,
  placeholder = '',
  cols,
  rows
}) {

  const keyString = label.split(' ').map((str, index) => {
    if (index === 0) {
      return str.toLowerCase()
    } else {
      return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
    }
  }).join('')

  return <textarea
    placeholder={placeholder ? placeholder : label}
    value={value}
    onChange={(e) => handleChange(e.target.value, keyString)}
    cols={cols}
    rows={rows}
  >
  </textarea>
}


export default Textarea



