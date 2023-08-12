import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Header title="Task Tracker" />
        <Body />
        <Routes>
          <Route path="/about" component={About} />
        </Routes>

        <Footer alias="Psyfo Hadebe" />
      </div>
    </Router>
  );
}

export default App;
