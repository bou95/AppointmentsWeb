import logo from './logo.svg';
import './App.css';
import './assets/css/custom.scss';
import Home from "./Views/Home";
import NavHeader from "./Views/NavHeader";
import Footer from "./Views/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./Core/AppRoutes";

function App() {
  return (
    <>
        <div>
            <NavHeader/>
            <AppRoutes className="h-100"/>
            <Footer/>
        </div>
    </>
  );
}

export default App;
