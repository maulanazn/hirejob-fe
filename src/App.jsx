import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DetailWorker from './pages/DetailWorker';
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
import WorkExpEditView from './pages/editCandidate/WorkExpEditView';
import PortfolioEditView from './pages/editCandidate/PortfolioEditView';
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
          <Route path='/detail-candidate/:id' element={ < DetailWorker />}/>
          <Route path='/hire/:id' element={ < Hire />}/>
          <Route path='/chat' element={ <Chat/> } />
          <Route path='/home' element={<Home />} />
          <Route path='/edit-recruiter' element={<EditRecruiter />} />
          <Route path='/edit-candidate' element={<EditCandidate />} />
          <Route path='/edit-candidate/:id' element={<WorkExpEditView />} />
          <Route path='/edit-portofolio/:id' element={<PortfolioEditView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

