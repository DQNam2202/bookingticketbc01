import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import Lifecycle from './pages/LifeCycle/Lifecycle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe';

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
          <Route exact path="/lifecycle" render={(propsRoute)=>{
              return <div>
                <h3>Component lifecycle</h3>
                <Lifecycle {...propsRoute}>

                </Lifecycle>
              </div>
          }}></Route>
          <Route exact path="/usestatedemo" component={UseStateHook}></Route>
          <Route exact path="/baitapchonxe" component={BaiTapChonXe}></Route>
          {/* Route mặc định để dưới cùng của ứng đụng */}
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
