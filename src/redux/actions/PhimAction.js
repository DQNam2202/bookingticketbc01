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
