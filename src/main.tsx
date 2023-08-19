import ReactDOM from 'react-dom';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
