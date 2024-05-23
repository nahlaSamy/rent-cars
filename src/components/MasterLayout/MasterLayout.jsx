import React from 'react'
import { Outlet } from 'react-router-dom'



export default function MasterLayout() {
    return (
        <div className='container-fluid'>
            <div className="row " >
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
