import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../component/navbar'

export default function Root() {
  const navigate = useNavigate();
  function logoutUser() {
    localStorage.getItem("company_name") ? navigate('/login/recruiter') : navigate('/login/candidate');
    localStorage.clear();
  }
  return (
    <>
        <NavBar/>
        <div className="fs-1 mt-5 mb-5 text-center">HIREJOB APP</div>

        <div className='mt-5 d-flex justify-content-center'>
            <Link to={'/login/candidate'} className='btn btn-danger' >LOGIN AS USER</Link>
            <Link to={'/login/recruiter'} className='btn btn-danger ms-5' >LOGIN AS RECRUITER</Link>
            {
              localStorage.getItem("token") ?
              <button onClick={logoutUser}>Log Out</button>
              :
              undefined
            }
        </div>
    </>
  )
}
