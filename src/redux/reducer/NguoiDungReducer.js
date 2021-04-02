import { taiKhoan } from "../../configs/setting";

let taiKhoanNguoiDung = "";
if (localStorage.getItem(taiKhoan)) {
  //Kiểm tra tài khoản người dùng có trong store hay không <=> có thì lấy làm giá trị mặc định
  let tkNguoiDungStore = localStorage.getItem(taiKhoan);
  taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
}

const stateDefault = {
  taiKhoan: taiKhoanNguoiDung,
};

export const NguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
