import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import Not from './pages/Not';
import Layout from './pages/components/Layout';
import AddProduct from './pages/AddProduct';
import SignIn from './pages/SignIn';
import MainContext from './context/MainContext';

function App() {
  const { authorization, api } = useContext(MainContext);
  const { user } = authorization;
  const { queryData } = api;

  console.log(queryData);

  const title = 'Acesso não autorizado';

  return (
    <>
      <ToastContainer autoClose={ 3000 } position={ toast.POSITION.BOTTOM_LEFT } />
      <Routes>
        <Route path="/moderator" element={ <SignIn /> } />
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route
            path="addproduct"
            element={ user ? <AddProduct /> : <Not title={ title } /> }
          />
          <Route
            path="/edit/:id"
            element={ user ? <EditProduct /> : <Not title={ title } /> }
          />
        </Route>
        <Route path="/*" element={ <Not title="Página não encontrada" /> } />
      </Routes>
    </>
  );
}

export default App;
