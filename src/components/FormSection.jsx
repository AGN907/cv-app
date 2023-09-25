import '../styles/FormSection.css'
function FormSection({
  label,
  children
}) {

  return (
    <fieldset className="form">
      <legend>{label}</legend>
      {children}
    </fieldset>
  )

}


export default FormSection
