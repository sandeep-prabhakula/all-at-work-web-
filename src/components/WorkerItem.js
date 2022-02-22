import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext';

function WorkerItem(props) {
    const context = useContext(AuthContext)
    const {user,requestService} = context
    const handleRequest =()=>{
        requestService()
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.workerName} {props.workerAge}</h5>
                <p className="card-text">{props.workerSkills}</p>
                <p>{props.workerLocation}</p>
                <button type="button" className="btn btn-primary" onClick={handleRequest} style={{
                    visibility:user===null?'hidden':'visible'
                }}>Request a Service</button>
            </div>
        </div>
    )
}

export default WorkerItem