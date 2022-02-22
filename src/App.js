import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CompleteProfile from './components/CompleteProfile';
import Navbar from './components/Navbar';
import PendingServices from './components/PendingServices';
import UserProfile from './components/UserProfile';
import Workers from './components/Workers';
import AuthState from './context/auth/AuthState';
function App() {
  return (
    <div className="App">
      <AuthState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Workers />} />
            <Route exact path='/pendingservices' element={<PendingServices />} />
            <Route exact path='/updateprofile' element={<CompleteProfile />} />
            <Route exact path='/userprofile' element={<UserProfile />} />
          </Routes>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
