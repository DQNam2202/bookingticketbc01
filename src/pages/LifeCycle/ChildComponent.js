import React, { Component, PureComponent } from "react";


// Pure Component giống với Componet tuy nhiên PureComponenet sẽ xem xét 
// giá trị đầu vào của props có thay đổi hay không => nếu có thì mới render lại
//shouldComponent không tồn tại trong pureComponent (vì PureComponet đã xử lý render tự động tương đương với lifeCycle này)

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log("contructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps Child");
    return currentState;
  }
  render() {
    console.log('render lại rồi nha');
    return <div>
        <br />;
        Props Child;
        {this.props.stateNumber.num}
    </div>;
  }
  // lifeCycle dùng để gọi API
  componentDidMount() {
    // chayj một lần sau lần render đầu tiên
    console.log("componentDisMount Child");
  }

  // componentDidUpdate chạy kể từ lần thay đổi Props hoặc State
  componentDidUpdate(prevProps, prevState) {
    //Chạy mỗi lần setState hoặc Props
    //Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
    console.log("componentDidUpdate Child");
    this.setInterval = setInterval(() =>{
        console.log("object");
     },1000)
  }

  //Trước khi componet mất khỏi giao diện thì mình làm những gì
  // Lifecycle chạy trước khi component mất khỏi giao diện
  componentWillUnmount(){
    clearInterval(this.setInterval);
  }
}
