import { Link } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <div className="fs-1 mt-5 mb-5 text-center">HIREJOB APP</div>
        
        <div className='mt-5 d-flex justify-content-center'>
            <Link to={'/login/candidate'} className='btn btn-danger' >LOGIN AS USER</Link>
            <Link to={'/login/recruiter'} className='btn btn-danger ms-5' >LOGIN AS RECRUITER</Link>
        </div>
    </>
  )
}
