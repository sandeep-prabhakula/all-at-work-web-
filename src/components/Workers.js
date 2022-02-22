import React from 'react'
import { useState, useEffect } from 'react'
import firebase from '../firebase'
import WorkerItem from './WorkerItem'

function Workers() {
    const ref = firebase.firestore().collection('workers')
    const [serviceProviders, setWorkers] = useState([])
    const handleClick = async () => {
        const data = await ref.get()
        const items = []
        data.docs.forEach(data => {
            items.push(data.data())
        })
        setWorkers(items)
    }
    useEffect(() => {
        handleClick()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2 className='text-center' style={{
                marginTop:'70px',
                color:'#fff'
            }}>Services For You</h2>
            <div className="container">
                <div className="row my-3">
                    {
                        serviceProviders.map((worker) => {
                            return <div key={worker.workerMobile} className="col-md-4">
                                <WorkerItem workerName={worker.workerName} workerSkills={worker.workerSkills} workerAge={worker.workerAge} workerLocation={worker.workerLocation} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Workers