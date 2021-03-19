import React, {useEffect} from "react";
import {layThongTinChiTietPhimAction} from '../../redux/actions/PhimAction'
import {useSelector,useDispatch} from 'react-redux'

export default function Detail(props) {
  console.log(props);

  const {chiTietPhim} = useSelector(state => state.PhimReducer)
  const dispatch = useDispatch();

    //Tự gọi API khi trang vừa load

    useEffect(() =>{
        //Lấy tham số từ URL
        let {id} = props.match.params;
        // Gọi action truyền vào id phim
        dispatch(layThongTinChiTietPhimAction(id));
     },[])

  return (
    // sẽ có những props của thẻ route
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={chiTietPhim.hinhAnh} className='w-100' alt="123"></img>
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
                  <th>
                    {chiTietPhim.moTa}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
