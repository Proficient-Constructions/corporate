import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/header';
import Footer from './components/footer';
import AppRoutes from './router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
