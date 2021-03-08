import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  //Tạo state danh sách film
  state = {
    arrFilms: [],
  };

  // Lấy thông tin từ backend
  loadFilm = () => {
    const promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    });
    //Xử lý thành công
    promise.then((result) => {
      console.log("result", result.data);
      this.setState({
        arrFilms: result.data,
      });
    });
    promise.catch((error) => {
      console.log("err", error.respone.data);
    });
  };

  renderFilms = () => {
    return this.state.arrFilms.map((film, index) => {
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
  
  componentDidMoun(){
    // API muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    // liveSerco của react
    this.loadFilm();
  }
}
