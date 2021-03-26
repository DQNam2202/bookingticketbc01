import React,{useState,useCallback} from 'react'

import Comment from './Comment'


//Những data tĩnh không cần thay đổi dữ liệu nên để ra bên ngoài
// const data=[]
export default function HookUseCallBack() {
  let [like, setLike] = useState(1);

    let renderNotify = () =>{
        return `Bạn đã thả ${like} ♥ !`;
    }

    const callbackRenderNotify = useCallback(renderNotify, [like],)
  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={callbackRenderNotify} />
    </div>
  );
}

// renderNotify vẫn hiểu là hàm thay đổi
// Khi sử dụng animation thì sẽ sử dụng tốn nhiều state, setState liên tục 
// useCallback là một cái hàm được khai báo lại khi state thay đổi