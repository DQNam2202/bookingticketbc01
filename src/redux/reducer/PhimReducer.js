const stateDefault = {
  mangPhim: [],
  chiTietPhim: { tenPhim: "default", heThongRapChieu: [] },
  thongTinPhongVe: {},
};

export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM":
      {
        state.mangPhim = [...action.mangPhim];
        return { ...state };
      }
      break;
    case "LAY_CHI_TIET_PHIM":
      {
        state.chiTietPhim = action.chiTietPhim;
        return { ...state };
      }
      break;
    case "LAY_THONG_TIN_PHONG_VE": {
      state.thongTinPhongVe = action.thongTinPhongVe;
      return { ...state };
    }break;
    default:
      return { ...state };
  }
};
