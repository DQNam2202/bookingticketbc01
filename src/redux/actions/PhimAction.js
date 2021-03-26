import axios from "axios";

//========================REDUX-THUNK=============
// Middleware:
// action có thể gắn trên nhiều component khác nhau
// redux-thunk: không thể return về async function được
// return về Object ,async function
// cho phép return về 1 hàm

export const LayDanhSachPhimAction = () => {
  // gọi action loading
  return async (dispatch) => {
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      // API không lấy về được giá trị
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      // Sau khi lấy dữ liệu từ API về sử dụng hàm dispatch
      // của redux thunk sẽ đưa dữ liệu lên server
      dispatch({
        type: "LAY_DANH_SACH_PHIM",
        mangPhim: result.data,
      });
      // Tắt loading
      dispatch({
        type: "closeLoading",
      });
    }, 1000);
  };
};

// Lấy thông tin chi tiết phim
export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });

      // Sau khi lấy dữ liệu từ API ta sẽ đưa dữ liệu lên reducer = dispatch
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const layThongTinPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });

      // Sau khi lấy dữ liệu từ API ta sẽ đưa dữ liệu lên reducer = dispatch
      dispatch({
        type: 'LAY_THONG_TIN_PHONG_VE',
        thongTinPhongVe: result.data
      });
    } catch (err) {
      console.log("error", err);
    }
  };
};
