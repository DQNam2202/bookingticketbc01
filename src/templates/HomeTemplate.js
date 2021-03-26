import React from "react";
import { Route } from "react-router";
import Header from "../Components/Header/Header";

export const HomeTemplate = (props) => {
  let { Component, ...restRoute } = props;

  // restRoute là exac và pathName gõ đúng '/home' mới render ra Component  

  return (
    <Route
      {...restRoute}
      // Render của thẻ Route
      // HOC một component nhận vào một component khác để tạo ra 1 component mới
      // khi dùng hàm render muốn có thêm header thì sử dụng HomeTemplate
      render={(propsRoute) => {
        return (
          <div>
            <Header></Header>
            <Component {...propsRoute}></Component>
          </div>
        );
      }}
    ></Route>   
  );
};
