import Input from "./Input";
import FormSection from "./FormSection";

function EducationInfo({
  objValue,
  handleChange
}) {
  return <FormSection label='Education Info'>
    <Input
      label='School Name'
      value={objValue.schoolName}
      handleChange={handleChange}
    />
    <Input
      label='Degree'
      value={objValue.degree}
      handleChange={handleChange}
    />
    <Input
      label='Graduation date (eg: May-2018")'
      value={objValue.graduationDate}
      handleChange={handleChange}
    />
  </FormSection>


}


export default EducationInfo
