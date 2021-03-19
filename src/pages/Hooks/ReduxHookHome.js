import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from "react-redux"

import {LayDanhSachPhimAction} from '../../redux/actions/PhimAction'

export default function ReduxHookHome(props) {
   
    //useSelector là hook để lấy dữ liệu từ reducer về
    // Kết nối với store
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim)

    const dispatch = useDispatch();

    const rederPhim = () => {
        // console.log("props:",props)
      return mangPhim.map((item, index) => {
        return (
          <div className="col-4 mt-2" key={index}>
            <div className="card text-left">
              <img
                className="card-img-top"
                width="150px"
                height="350px"
                src={item.hinhAnh}
                alt={item.tenPhim}
              />
              <div className="card-body">
                <h4 className="card-title" height="40px">
                  {item.tenPhim.lenght > 10 ? (
                    <p>{item.tenPhim.sub(0, 100)}</p>
                  ) : (
                    <p>{item.tenPhim}</p>
                  )}
                </h4>
                <button className="btn btn-success">Đặt vé</button>
              </div>
            </div>
          </div>
        );
      });
    };

    // useEffect phải đặt trước return
    // Nhận vào 2 tham số:
    // + tham số 1: hàm chạy sau khi component render
    // + tham số 2: chứa states, khi nào state thay đổi thì tham số 1 sẽ chạy
    // Nếu không truyền tham số thứ 2 thì nó sẽ chạy vô tận
    // Ghi chú: 1 giao diện có thể chứa nhiều useeffect
    useEffect(() => {
        
      dispatch(LayDanhSachPhimAction());  
      return () => {
        // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
      };
    }, []); // Thay đổi những gì thì sẽ để trong tham số thứ 2

    return (
      <div className="container mt-5">
        <button
          onClick={() => {
            // layDanhSachPhim();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="display-4 text-center">Danh sách phim</div>
        <div className="row">{rederPhim()}</div>
      </div>
    );
}

// const mapStateToProps = (state) =>{
//     return {
//       mangPhim: state.PhimReducer.mangPhim,
//     };
//  }

// export default connect(mapStateToProps)(ReduxHookHome);