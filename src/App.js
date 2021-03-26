import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Lifecycle from "./pages/LifeCycle/Lifecycle";
import UseStateHook from "./pages/Hooks/UseStateHook";
import BaiTapChonXe from "./pages/Hooks/BaiTapChonXe";
import UseEffectHome from "./pages/Hooks/UseEffectHome";
import ReduxHookHome from "./pages/Hooks/ReduxHookHome";
import Detail from "./pages/Detail/Detail";
import HookUseCallBack from "./pages/Hooks/HookUseCallBack";
import HookUseMemo from "./pages/Hooks/HookUseMemo";
import UseRef from "./pages/Hooks/UseRef";
import ParantComponent from "./pages/HOC/ParantComponent";
import { HomeTemplate } from "./templates/HomeTemplate";
import {AdminTemplate} from './templates/AdminTemplate';
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* So sánh bằng chứ không có chứa nữa */}
        {/* <Header /> */}
        <HomeTemplate exact path="/home" Component={Home}></HomeTemplate>
        <Loading />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <HomeTemplate
            exact
            path="/contact"
            component={Contact}
          ></HomeTemplate>
          <AdminTemplate exact path="/login" Component={Login}></AdminTemplate>
          <HomeTemplate
            exact
            path="/register"
            Component={Register}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/lifecycle"
            render={(propsRoute) => {
              return (
                <div>
                  <h3>Component lifecycle</h3>
                  <Lifecycle {...propsRoute}></Lifecycle>
                </div>
              );
            }}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/usestatedemo"
            Component={UseStateHook}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/useeffecthome"
            Component={UseEffectHome}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/reduxhook"
            Component={ReduxHookHome}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/baitapchonxe"
            Component={BaiTapChonXe}
          ></HomeTemplate>

          <HomeTemplate
            exact
            path="/usecallback"
            Component={HookUseCallBack}
          ></HomeTemplate>
          <HomeTemplate exact path="/useref" Component={UseRef}></HomeTemplate>
          <HomeTemplate
            exact
            path="/demoprops"
            Component={ParantComponent}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/usememo"
            Component={HookUseMemo}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/detail/:id"
            Component={Detail}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/checkout/:id"
            component={Checkout}
          ></HomeTemplate>
          {/* Route mặc định để dưới cùng của ứng đụng */}
          <HomeTemplate exact path="/" component={Home}></HomeTemplate>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
