import React, { Component } from "react";

export default class Register extends Component {
  state = {
    value: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
    error: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
    },
  };
  // target đúng ngay vị trí xảy ra sự kiện
  handleChange = (event) => {
    const { value, name } = event.target;

    let newValue = { ...this.state.value };

    newValue[name] = value;

    let newError = { ...this.state.error };

    let errors = "";
    if (value === "") {
      errors = name + " không được bỏ trống";
    }

    newError[name] = errors;

    this.setState({
      value: newValue,
      error: newError,
    });

    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  handleSubmit = (event) => {
    // Chặn sự kiện reload của Browser
    event.preventDefault();
    let valid = true;
    // Lỗi khi valid không hợp lệ
    // Lỗi xảy ra khi bất kỳ thuộc tính nào của errors khác rỗng error != ''
    // Hoặc bất kỳ thuộc tính của value bằng rỗng là bị lỗi value = ''
    for (const keyError in this.state.error) {
      if (this.state.error[keyError] !== "") {
        valid = false;
      }
    }
    for (const keyValue in this.state.value) {
      if (this.state.error[keyValue] !== "") {
        valid = false;
      }
    }
    if(!valid){
        alert("Dữ liệu không hợp lệ !!");
        return ;
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="display-4">Đăng ký</div>
        <div className="form-group">
          <p>Tài Khoản</p>
          <input
            name="taiKhoan"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.taiKhoan}</p>
        </div>
        <div className="form-group">
          <p>Họ Tên</p>
          <input
            name="hoTen"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.hoTen}</p>
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            name="matKhau"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.matKhau}</p>
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            name="email"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.email}</p>
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input
            name="soDienThoai"
            className="form-control"
            onChange={this.handleChange}
          ></input>
          <p className="text-danger">{this.state.error.soDienThoai}</p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng Ký
          </button>
        </div>
      </form>
    );
  }
}
