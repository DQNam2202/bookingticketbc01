import axios from "axios";
import { accessToken, doamin, taiKhoan } from "../../configs/setting";
import { history } from '../../App'
export const dangNhapAction = (nguoiDung) => {
  return async (dispatch) => {
    try {
        const result = await axios({
          url:
            `${doamin}/api/QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: nguoiDung
        });
        // Lấy giá trị từ API gửi về lưu vào localStore
        console.log("result",result);
        localStorage.setItem(accessToken,result.data.accessToken);
        localStorage.setItem(taiKhoan,JSON.stringify(result.data));
        // Đăng nhập thành công chuyển hướng về home
        history.push("/"); // History.push nhận vào pathName => di chuyển đến trang component tương ứng
        dispatch({
          type:  "DANG_NHAP",
          taiKhoan: result.data.taiKhoan
        })
    
      } catch (errors) {
        console.log("errors",errors)
    }
  };
};
