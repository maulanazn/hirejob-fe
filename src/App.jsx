import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import DetailProfile from './pages/DetailProfile';
import Hire from './pages/Hire';
import Chat from './pages/Chat';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/detail-profile' element={ < DetailProfile />}/>
          <Route path='/hire' element={ < Hire />}/>
          <Route path='/chat' element={ <Chat/> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;

