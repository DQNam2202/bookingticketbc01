import React, { useEffect } from "react";
import { layThongTinChiTietPhimAction } from "../../redux/actions/PhimAction";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment'
import {NavLink} from 'react-router-dom'

export default function Detail(props) {
  console.log(props);

  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();

  //Tự gọi API khi trang vừa load

  useEffect(() => {
    //Lấy tham số từ URL
    let { id } = props.match.params;
    // Gọi action truyền vào id phim
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  return (
    // sẽ có những props của thẻ route
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={chiTietPhim.hinhAnh} className="w-100" alt="123"></img>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên Phim</th>
                  <sth>{chiTietPhim.tenPhim}</sth>
                </tr>
                <tr>
                  <th>Mô tả</th>
                  <th>{chiTietPhim.moTa}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="mt-5 mb-4">
          <div className="row">
            <div
              className="col-4 nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {chiTietPhim.heThongRapChieu?.map((heThongRapChieu, index) => {
                // Hiển thị logo được hiển thị mặc định
                let activeClass = index === 0 ? "active" : "";
                return (
                  <a
                    key={index}
                    className={`nav-link ${activeClass}`}
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href={`#${heThongRapChieu.maHeThongRap}`}
                    role="tab"
                    aria-controls={heThongRapChieu.maHeThongRap}
                    aria-selected="true"
                  >
                    <img src={heThongRapChieu.logo} width="50"></img>
                    {heThongRapChieu.tenHeThongRap}
                  </a>
                );
              })}
            </div>
            <div className="col-8 tab-content" id="v-pills-tabContent">
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let activeClass = index === 0 ? "active" : "";

                return (
                  <div
                    key={index}
                    // Hiện tên hiển thị mặc định
                    className={`tab-pane fade ${activeClass} show`}
                    id={`${heThongRap.maHeThongRap}`}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {/* Load cụm rạp chiếu từ heThongRap.cumRap */}
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index}>
                          <h3>{cumRap.tenCumRap}</h3>
                          <div className="row">
                              {cumRap.lichChieuPhim?.splice(0,8).map((lichChieu,index) =>{
                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-3 text-success" key={index} >
                                  {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                </NavLink>
                               })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
