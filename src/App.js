import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCharacter from './components/NewCharacter';
import NewUser from './components/NewUser';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <a href='/new_user'>Create new user</a>
        </li>
        <li>
          <a href='/new_character'>Create new character</a>
        </li>
      </ul>
      <Router>
        <Routes>
          <Route path='/new_user' element={<NewUser />} />
          <Route path='new_character' element={<NewCharacter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
