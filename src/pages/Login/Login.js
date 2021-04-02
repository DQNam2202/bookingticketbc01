import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import {useDispatch} from 'react-redux'
import { dangNhapAction } from "../../redux/actions/NguoiDungAction";

export default function Login(props) {

  const dispatch = useDispatch();

  // console.log("props: ", props);
  // Các Props của formik cung cấp
  const { handleChange, handleSubmit, errors, handleBlur, touched ,isValid} = useFormik(
    {
      // Chứa thuộc tính ứng với trường input của mình
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email:""
      },
      // Validation cho thẻ input thông qua thư viện yup
      validationSchema: yup.object().shape({
        taiKhoan: yup
          .string()
          .required("Tài khoản không được bỏ trống")
          .min(6, "Tài khoản tối đa 6 ký tự"),
        matKhau: yup.string().required("Mật khẩu không được bỏ trống"),
        email: yup.string().required("Email không được bỏ trống").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Email không hợp lệ")
      }),
      // Khi ấn vào submit sẽ tổng hợp những value đưa vào thuộc tính value cho mình
      onSubmit: (value) => {
        // value <=> this.state.value (react class component)
        console.table(value);
        // Gọi API hoặc action đưa dữ liệu về server
        dispatch(dangNhapAction(value))
      },
    }
  );

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài Khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.taiKhoan && touched.taiKhoan ? (
          <p className="text-danger">{errors.taiKhoan}</p>
        ) : null}
      </div>
      <div className="form-group">
        <p>Mật Khẩu</p>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.matKhau && touched.matKhau ? (
          <p className="text-danger">{errors.matKhau}</p>
        ) : null}
      </div>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        {errors.email && touched.email ? (
          <p className="text-danger">{errors.email}</p>
        ) : null}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success" disabled={!isValid}>
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

// const FormLogin = withFormik({
//   //withFomik giống như connect
//   mapPropsToValues: () => {
//     return {
//       taiKhoan: "",
//       matKhau: "",
//     };
//   },
//   validationSchema: yup.object().shape({
//     taiKhoan: yup.string().required("Tài khoản không được bỏ trống"),
//     matKhau: yup.string().required("Mật khẩu không được bỏ trống"),
//   }),
//   // HandleSubmit sẽ nhận vào tham số là value của các ô
//   handleSubmit: (value, props) => {
//     console.log("value: ", value);
//   },
//   displayName: "FormLogin",
// })(Login);

// export default FormLogin;
