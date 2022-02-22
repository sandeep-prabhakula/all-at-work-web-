import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/auth/AuthContext'
import PendingServicesItem from './PendingServicesItem'
import WorkerItem from './WorkerItem'

function PendingServices() {
    const context = useContext(AuthContext)
    const{pendingServices,readPendingServices} = context
    useEffect(() => {
        readPendingServices()
        //eslint-disable-next-line
    }, [])
    
  return (
    <div>
            <h2 className='text-center' style={{
                marginTop:'50px'
            }}>Services used by you</h2>
            <div className="container my-4">
                <div className="row">
                    {
                        pendingServices.map((worker) => {
                            return <div key={worker.workerMobile} className="col-md-4">
                                <PendingServicesItem workerName={worker.workerName} workerSkills={worker.workerSkills} workerAge={worker.workerAge} workerLocation={worker.workerLocation} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default PendingServices