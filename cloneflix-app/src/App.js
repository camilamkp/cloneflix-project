import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Login, NotFound } from './Pages';
import { Page } from './components';

const App = () =>
{
  return (
  <div>
    <Router>

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/dashboard' element={ <Page/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>

      </Router>
  </div>);
};

export default App;

