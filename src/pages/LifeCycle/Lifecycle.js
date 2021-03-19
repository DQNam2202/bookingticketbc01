import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateNumber:{
          num: 1
      }
    };
    console.log("contructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  // Chạy sau khi state hoặc props của component thay đổi và trước render
  shouldComponentUpdate(newProps, newState) {
    // sau khi hàm này trả về giá trị false thì giao diện sẽ được render laị
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        {/* khi setState thì hai thằng render sẽ chạy lại */}
        <h3>{this.state.stateNumber.num}</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            // this.setState({
            //   num: this.state.num + 1,
            // });

            let newStateNumber = {...this.state.stateNumber};

            newStateNumber.num += 1;

            this.setState({
                stateNumber: newStateNumber
            })
          }}
        >
          Click me
        </button>

        {this.state.stateNumber.num < 2 ? <ChildComponent stateNumber={this.state.stateNumber}></ChildComponent> : " "}
      </div>
    );
  }

  // lifeCycle dùng để gọi API
  componentDidMount() { // chayj một lần sau lần render đầu tiên
    console.log("componentDisMount");
  }
  //lifeCycle là những phương thức có sẵn của component

  // componentDidUpdate chạy kể từ lần thay đổi Props hoặc State
  componentDidUpdate(prevProps, prevState){ //Chạy mỗi lần setState hoặc Props
    //Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
    console.log('componentDidUpdate');
  }
}
