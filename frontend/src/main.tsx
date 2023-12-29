import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import MainProvider from './context/MainProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MainProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainProvider>,
);
