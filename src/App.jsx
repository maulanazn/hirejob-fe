import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import './App.css';
import EditRecruiter from "./assets/pages/edit Recruiter/index"
import EditCandidate from "./assets/pages/editCandidate/index"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/edit-recruiter' element={<EditRecruiter/>}/>
          <Route path='/edit-candidate' element={<EditCandidate/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App;

