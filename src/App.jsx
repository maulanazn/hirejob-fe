import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import DetailProfile from './pages/DetailProfile';
import Hire from './pages/Hire';
import Chat from './pages/Chat';
import LoginCandidate from './pages/auth/candidate/login'
import RegisterCandidate from './pages/auth/candidate/register'
import LoginRecruiter from './pages/auth/recruiter/login'
import RegisterRecruiter from './pages/auth/recruiter/register'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/login/candidate' element={<LoginCandidate/>}/>
          <Route path='/register/candidate' element={<RegisterCandidate/>}/>
          <Route path='/register/recruiter' element={<RegisterRecruiter/>}/>
          <Route path='/login/recruiter' element={<LoginRecruiter/>}/>
          <Route path='/detail-profile/:id' element={ < DetailProfile />}/>
          <Route path='/hire/:id' element={ < Hire />}/>
          <Route path='/chat' element={ <Chat/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;

