import { ToastContainer } from 'react-toastify';

import Header from './Components/Header'
import Main from './Components/Main';
import Footer from './Components/Footer'

import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
