import Input from "./Input";
import FormSection from "./FormSection";



function PersonalInfo({ objValue, handleChange }) {
  return <FormSection label='Personal Info'>
    <Input
      label='First Name'
      value={objValue.firstName}
      handleChange={handleChange}
    />
    <Input
      label='Last Name'
      value={objValue.lastName}
      handleChange={handleChange}
    />
    <Input
      label='Address'
      value={objValue.address}
      handleChange={handleChange}
    />
    <Input
      label='Email'
      value={objValue.email}
      handleChange={handleChange}
    />
    <Input
      label='Phone Number'
      value={objValue.phoneNumber}
      handleChange={handleChange}
    />
  </FormSection>
}


export default PersonalInfo
