import './App.css';
import Background from './Components/Background';
import Page2 from './Components/Page2';
import Week1 from './Components/Week1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App font-custom">
        <Routes>
          <Route path="/" element={<Week1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;