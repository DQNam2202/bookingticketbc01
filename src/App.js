import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* So sánh bằng chứ không có chứa nữa */}
        <Header />
        <Loading />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          {/* Route mặc định để dưới cùng của ứng đụng */}
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
