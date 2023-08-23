import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DetailProfile from './pages/DetailProfile';
import Hire from './pages/Hire';
import Chat from './pages/Chat';
import LoginCandidate from './pages/auth/candidate/login'
import RegisterCandidate from './pages/auth/candidate/register'
import LoginRecruiter from './pages/auth/recruiter/login'
import RegisterRecruiter from './pages/auth/recruiter/register'
import EditRecruiter from "./pages/edit Recruiter/index"
import EditCandidate from "./pages/editCandidate/index"
import Home from './pages/Home'
import Root from './pages/Root';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login/candidate' element={<LoginCandidate />} />
          <Route path='/register/candidate' element={<RegisterCandidate />} />
          <Route path='/register/recruiter' element={<RegisterRecruiter />} />
          <Route path='/login/recruiter' element={<LoginRecruiter />} />
          <Route path='/detail-profile/:id' element={ < DetailProfile />}/>
          <Route path='/hire/:id' element={ < Hire />}/>
          <Route path='/chat' element={ <Chat/> } />
          <Route path='/home' element={<Home />} />
          <Route path='/edit-recruiter' element={<EditRecruiter />} />
          <Route path='/edit-candidate' element={<EditCandidate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

