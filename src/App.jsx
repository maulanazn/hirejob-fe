import EditRecruiter from "./assets/pages/edit Recruiter/index"
import EditCandidate from "./assets/pages/editCandidate/index"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
// import './App.css';
import LoginCandidate from './pages/auth/candidate/login'
import RegisterCandidate from './pages/auth/candidate/register'
import LoginRecruiter from './pages/auth/recruiter/login'
import RegisterRecruiter from './pages/auth/recruiter/register'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login/candidate' element={<LoginCandidate />} />
          <Route path='/register/candidate' element={<RegisterCandidate />} />
          <Route path='/register/recruiter' element={<RegisterRecruiter />} />
          <Route path='/login/recruiter' element={<LoginRecruiter />} />
          <Route path='/home' element={<Home />} />
          <Route path='/edit-recruiter' element={<EditRecruiter/>}/>
          <Route path='/edit-candidate' element={<EditCandidate/>}/>
          
        </Routes>
      </Router>
          </>
  )
}

export default App;

