import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeAction } from "../../redux/actions/PhimAction";
import "./Checkout.css";

export default function Checkout(props) {
  // UseSelector:
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  let dispatch = useDispatch();

  const { danhSachGheDaDat } = useSelector((state) => state.QuanLyDatVeReducer);

  let { id } = props.match.params;

  useEffect(() => {
    dispatch(layThongTinPhongVeAction(id));
  }, []);

  console.log("Thông tin phòng vé: ", thongTinPhongVe);

  // <></>: Thẻ vô hình thuộc thư viện react
  // <Fragment>: Thẻ vô hình thuộc thư viện react cũ
  const renderGhe = () => {
    // const arrJSX = [];
    // for (let i = 1; i < 100; i++) {
    //   arrJSX.push(<button>{i}</button>);
    // }
    // return arrJSX;

    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
      // Xác định ghế đang đặt
      let indexGheDangDat = danhSachGheDaDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classGheDangDat = indexGheDangDat !== -1 ? "gheDangDat" : "";
      // Xác định ghế đã đặt hoặc chưa đặt
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";

      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch({
                type: "DAT_GHE",
                ghe,
              });
            }}
          >
            {ghe.daDat === true ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const renderGheDangDat = () => {
    return danhSachGheDaDat.map((gheDangDat, index) => {
      return (
        <Fragment key={index}>
          <span
            className="text-success font-weight-bold"
            style={{ fontSize: 25 }}
          >
            {gheDangDat.stt}
          </span>
        </Fragment>
      );
    });
  };

  const tinhTongTien = () => {
    return danhSachGheDaDat.reduce((tongTien, gheDangDat, index) => {
      return (tongTien += gheDangDat.giaVe);
    }, 0);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 text-center mt-5">
          <img
            width={"100%"}
            class="logo"
            src="https://tix.vn/app/assets/img/icons/screen.png"
            alt="tix.vn"
          ></img>
          <br />
          {renderGhe()}
        </div>
        <div className="col-4 text-left">
          {/* Tính tổng tiền */}
          <div className="display-4 text-success">
            {tinhTongTien().toLocaleString()}VNĐ
          </div>
          <hr></hr>
          <img
            src={thongTinPhongVe.thongTinPhim?.hinhAnh}
            style={{ height: 300, width: 250 }}
          ></img>
          <h3>{thongTinPhongVe.thongTinPhim?.tenPhim}</h3>
          <div>Địa chỉ: {thongTinPhongVe.thongTinPhim?.diaChi}</div>
          <div>
            Ngày giờ chiếu: {thongTinPhongVe.thongTinPhim?.ngayChieu} -
            {thongTinPhongVe.thongTinPhim?.gioChieu}-
            {thongTinPhongVe.thongTinPhim?.tenRap}
          </div>
          <hr></hr>
          <h3 className="text-warning text-left">Ghế: {renderGheDangDat()}</h3>
          <div>
            <button className="w-100 btn btn-success display-4">ĐẶT VÉ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
