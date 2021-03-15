const loadingDefault = {
  loading: false,
};

export const LoadingReducer = (state = loadingDefault, action) => {
  switch (action.type) {
    case "openLoading":
      {
        state.loading = true;
        return { ...state };
      }
      break;
    case "closeLoading":
      {
        state.loading = false;
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};
