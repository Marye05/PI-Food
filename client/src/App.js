import './App.css';
import Home from './views/homePage/HomePage';
import Form from './views/formPage/FormPage';
import Detail from './views/detailPage/DetailPage'
import Landing from './views/landingPage/LandingPage';
import { Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';


function App() {
// location es un hooks
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar /> }
      
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
      
          
    </div>
  );
}

export default App;
