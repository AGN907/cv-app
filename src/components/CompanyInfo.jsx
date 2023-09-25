import Input from "./Input";
import Textarea from "./Textarea";
import FormSection from "./FormSection";


function CompanyInfo({
  objValue,
  handleChange,
}) {
  return <FormSection label='Company Info'>
    <Input
      label='Company Name'
      value={objValue.companyName}
      handleChange={handleChange}
    />
    <Input
      label='Position'
      value={objValue.position}
      handleChange={handleChange}
    />
    <Input
      label='From'
      value={objValue.from}
      handleChange={handleChange}
    />
    <Input
      label='To'
      value={objValue.to}
      handleChange={handleChange}
    />
    <Textarea
      label='Main responsibilities'
      value={objValue.mainResponsibilities}
      cols={42}
      rows={8}
      handleChange={handleChange}
    />
  </FormSection>


}


export default CompanyInfo
