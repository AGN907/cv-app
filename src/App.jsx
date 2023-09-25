import { useState } from 'react'
import './styles/App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import CompanyInfo from './components/CompanyInfo'
import Preview from './components/Preview'

function App() {
  const [info, setInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    address: 'New York, USA',
    email: 'example@example.com',
    phoneNumber: '555-555-555',
    schoolName: 'Harvard University',
    degree: 'Bachelor of Computer Science',
    graduationDate: 'May 2018',
    companyName: 'Lavenar',
    position: 'Full Stack Developer',
    from: 'July 2018',
    to: 'June 2023',
    mainResponsibilities: 'Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create web pages.',
  })

  function handleChange(newValue, label) {
    console.log(label)
    const newObj = { ...info }
    let newValueCopy = newValue

    newObj[label] = newValueCopy
    setInfo(newObj)
  }


  return (
    <>
      <main>

        <div>
          <PersonalInfo objValue={info} handleChange={handleChange} />
          <EducationInfo objValue={info} handleChange={handleChange} />
          <CompanyInfo objValue={info} handleChange={handleChange} />


        </div>
        <Preview data={info} />

      </main>
    </>
  )
}

export default App
