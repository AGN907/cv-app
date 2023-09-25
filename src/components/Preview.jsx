import '../styles/Preview.css'

function Preview({
  data,

}) {
  return <div className='preview'>
    <div className='preview__header'>
      <h2 className='preview__name'>{data.firstName} {data.lastName}</h2>
      <div className='preview__contact'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4ZM20 8l-7.475 4.675q-.125.075-.263.113t-.262.037q-.125 0-.263-.037t-.262-.113L4 8v10h16V8Zm-8 3l8-5H4l8 5ZM4 8v.25v-1.475v.025V6v.8v-.012V8.25V8v10V8Z"></path></svg>
          {data.email}
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9Zm8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z"></path></svg>
          {data.phoneNumber}
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M83.19 174.4a8 8 0 0 0 11.21-1.6a52 52 0 0 1 83.2 0a8 8 0 1 0 12.8-9.6a67.88 67.88 0 0 0-27.4-21.69a40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 0 0 1.59 11.2ZM112 112a24 24 0 1 1 24 24a24 24 0 0 1-24-24Zm96-88H64a16 16 0 0 0-16 16v24H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v40H32a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H64V40h144Z"></path></svg>
          {data.address}
        </span>
      </div>
      <div className='preview__section'>

        <h2>Education</h2>
        {data.schoolName &&
          <>
            <p><strong>{data.schoolName}</strong> - {data.degree}</p>
            <span className='preview__text_gray'>{data.graduationDate}</span>
          </>
        }
      </div>
      <div className='preview__section'>
        <h2>Work History</h2>
        {data.companyName &&
          <>
            <p><strong>{data.companyName}</strong> - {data.position}</p>
            <span className='preview__text_gray'>{data.from} - {data.to}</span>
            <p>{data.mainResponsibilities}</p>
          </>
        }


      </div>

    </div>

  </div>
}


export default Preview
