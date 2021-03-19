import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { LayDanhSachPhimAction } from "../../redux/actions/PhimAction";

class Home extends Component {
  //Tạo state danh sách film
  // Dữ liệu phim bị thay đổi

  // state = {
  //   arrFilms: [],
  // };

  // Lấy thông tin từ backend
  loadFilm = () => {
    this.props.dispatch(LayDanhSachPhimAction())
    // const promise = axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });
    // //Xử lý thành công
    // promise.then((result) => {
    //   console.log("result", result.data);
    //   // lấy dữ liệu về dispatch lên reducer
    //   this.props.dispatch({
    //     type:'LAY_DANH_SACH_PHIM',
    //     mangPhim: result.data
    //   })
    // });
    // promise.catch((error) => {
    //   console.log("err", error.respone.data);
    // });
  };

  renderFilms = () => {
    return this.props.mangPhim.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        Home
        <button
          onClick={() => {
            this.loadFilm();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">Danh sách phim</div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
  // hàm giống hàm render của react của react component kế thừa nên có

  componentDidMount() {
    // khi render ra giao diện nó chỉ chạy một lần duy nhất
    // API muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    // render xong thì nó sẽ tự động kich hoạt
    this.loadFilm();
  }
}

const mapStateToProps = (state) => {
  return {
    mangPhim: state.PhimReducer.mangPhim,
  };
};

export default connect(mapStateToProps)(Home);
