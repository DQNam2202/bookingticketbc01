import React,{useState} from 'react'


//hook chỉ được sử dụng cho rfc (react function component)
//Không cần sử dụng con trỏ this
// Tuple: mảng hỗn hơp [1,'Nguyễn Văn A',function(){}]
export default function UseStateHook() {

    // tuple: mảng hỗn hợp
    // useState thay thế cho this.state trong React Class Component
    let [state,setState] = useState({
        number: 1
    });
    // useState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
        // let [number, setNumber] = useState(0);
        

    return (

        <div className="container">
            <h1>{state.number}</h1>
            <button className="btn btn-danger" onClick={() =>{ 
                // khi thao tác giao diện thay đổi
                setState({
                    number: state.number + 1
                })
                // setNumber(number+1);
            }}>click</button>

        </div>
    )
}
