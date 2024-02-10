import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/header';
import Footer from './components/footer';
import AppRoutes from './router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
