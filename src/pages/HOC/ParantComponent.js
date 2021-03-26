import React from 'react'

import Home from '../Home/Home' 

import ChildComponent from './ChildComponent'

export default function ParantComponent(props) {
    return (
        <div>
            <ChildComponent >
                <div className="text-center display-4">Trang Chủ</div>
                <Home></Home>
            </ChildComponent>
        </div>
    )
}
