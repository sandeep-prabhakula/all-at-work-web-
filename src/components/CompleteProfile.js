import React, { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'

function CompleteProfile() {
    const context = useContext(AuthContext)
    const mobileText = React.createRef()
    const addressText = React.createRef()
    const pincodeText = React.createRef()
    const { user, completeProfile } = context;
    const handleSaveChanges = () => {
        if (mobileText.current.value!=="" || addressText.current.value!=="" || pincodeText.current.value!=="") {
            completeProfile(mobileText.current.value, addressText.current.value, pincodeText.current.value)
            mobileText.current.value = ""
            addressText.current.value = ""
            pincodeText.current.value = ""
        }else{
            alert("all fiels are mandatory")
        }
    }
    return (
        <div className='container'>
            <h2 style={{
                marginTop: '70px',
                color: '#fff',
            }}>Complete your profile</h2>
            <div className="mb-3" style={{
                display: user === null ? 'none' : 'inline'
            }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
                <input ref={mobileText} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
            </div>
            <div className="mb-3" style={{
                display: user === null ? 'none' : 'inline'
            }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input ref={addressText} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Residential Address" />
            </div>
            <div className="mb-3" style={{
                display: user === null ? 'none' : 'inline'
            }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">PIN Code</label>
                <input ref={pincodeText} type="email" className="form-control" id="exampleFormControlInput1" placeholder="PIN Code" />
            </div>
            <button type="button" className="btn btn-light my-3" onClick={handleSaveChanges} style={{
                display: user === null ? 'none' : 'inline'
            }}>Save Changes</button>
            <h4 style={{
                display: user !== null ? 'none' : 'inline',
                color: '#fff'
            }}>Login Required to explore more inside</h4>
        </div>
    )
}

export default CompleteProfile