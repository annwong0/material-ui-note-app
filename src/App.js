import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Note from './pages/Note';
import Create from './pages/Create';

import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Note/>} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
