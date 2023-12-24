import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Edit from './pages/Edit';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './pages/components/Layout';

function App() {
  return (
    <>
      <ToastContainer autoClose={ 3000 } position={ toast.POSITION.BOTTOM_LEFT } />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/edit/:id" element={ <Edit /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
