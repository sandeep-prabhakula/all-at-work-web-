import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/AuthContext'
import PendingServicesItem from './PendingServicesItem'

function PendingServices() {
    const context = useContext(AuthContext)
    const { user,pendingServices, readPendingServices } = context
    useEffect(() => {
        readPendingServices()
        //eslint-disable-next-line
    }, [])

    return (
        <div>
            <h2 className='text-center' style={{
                marginTop: '70px',
                color: '#fff'
            }}>Services used by you</h2>
            <div className="container my-4" style={{
                display: user === null ? 'none' : 'block',
            }}>
                <div className="row mx-2">
                    {
                        pendingServices.map((worker) => {
                            return <div key={worker.workerMobile} className="col-md-4 my-2">
                                <PendingServicesItem workerName={worker.workerName} workerSkills={worker.workerSkills} workerAge={worker.workerAge} workerLocation={worker.workerLocation} workerMobile={worker.workerMobile}/>
                            </div>
                        })
                    }
                </div>
            </div>
                <h4 style={{
                    display: user !== null ? 'none' : 'inline',
                    color: '#fff'
                }}>Login Required to explore more inside</h4>
        </div>
    )
}

export default PendingServices