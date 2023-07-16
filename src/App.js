import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import MovieList from '../src/components/MovieList';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "movie/:id" element = {<h1> movie dedaitls</h1>} />
          <Route path = "movies/:type" element = {<MovieList />} />
          <Route path=  "/*" element = {<h1>Error Page</h1>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
