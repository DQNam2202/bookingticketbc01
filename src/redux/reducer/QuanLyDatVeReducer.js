const stateDatVe = {
  danhSachGheDaDat: [
    // { maGhe: "01", giaVe: 75000, stt: "01" },
    // { maGhe: "02", giaVe: 75000, stt: "02" },
  ],
};

export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      //Kiểm tra ghế có trong mảng hay không
      let index = state.danhSachGheDaDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDaDat.splice(index, 1);
      } else {
        state.danhSachGheDaDat.push(action.ghe);
      }
      state.danhSachGheDaDat = [...state.danhSachGheDaDat];
      return { ...state };
    }
    default:
      return { ...state };
  }
  return { ...state };
};
