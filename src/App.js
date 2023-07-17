import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';

import HomePage from './pages/Home/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={`/`} element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
