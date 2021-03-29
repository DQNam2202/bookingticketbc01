import React from "react";

export default function Login() {

    const handleChange = () =>{

     }
  return (
    <form className="container">
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài Khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <p>Mật Khẩu</p>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <button type="submit" className='btn btn-success'>Đăng nhập</button>
      </div>
    </form>
  );
}
