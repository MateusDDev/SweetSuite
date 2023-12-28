import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './pages/components/Layout';
import AddProduct from './pages/AddProduct';
import ProductsProvider from './context/ProductsProvider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ProductsProvider>
      <ToastContainer autoClose={ 3000 } position={ toast.POSITION.BOTTOM_LEFT } />
      <Routes>
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="addproduct" element={ <AddProduct /> } />
          <Route path="/edit/:id" element={ <EditProduct /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
