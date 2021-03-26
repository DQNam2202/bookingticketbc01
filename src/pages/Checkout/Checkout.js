import React, {useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { layThongTinPhongVeAction } from '../../redux/actions/PhimAction'

export default function Checkout(props) {

    // UseSelector: 
    const {thongTinPhongVe} = useSelector(state => state.PhimReducer)
    let dispatch = useDispatch()
    let { id } = props.match.params;

    useEffect(() =>{ 
        dispatch(layThongTinPhongVeAction(id))
    },[])

    console.log("Thông tin phòng vé: ",thongTinPhongVe)

    return (
        <div>
            
        </div>
    )
}
