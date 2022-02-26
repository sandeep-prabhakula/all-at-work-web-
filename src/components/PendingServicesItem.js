import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext';

function PendingServicesItem(props) {
    const context = useContext(AuthContext)
    const {user,completePendingServices} = context
    const handleRequest =()=>{
        completePendingServices(props.workerMobile)
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.workerName} {props.workerAge}</h5>
                <p className="card-text">{props.workerSkills}</p>
                <p>{props.workerLocation}</p>
                <button type="button" className="btn btn-primary" onClick={handleRequest} style={{
                    display:user===null?'none':'inline'
                }}>Mark As Complete</button>
            </div>
        </div>
    )
}

export default PendingServicesItem