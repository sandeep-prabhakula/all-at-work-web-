import React,{useContext} from 'react'
import AuthContext from '../context/auth/AuthContext'

function RegisterWorker() {
    const context = useContext(AuthContext)
    const name = React.createRef()
    const age = React.createRef()
    const location = React.createRef()
    const mobile = React.createRef()
    const skills = React.createRef()
    const pincode = React.createRef()
    const {registerWorker} = context
    const handleRegister = ()=>{
        if(name.current.value!==''&&
        age.current.value!==''&&
        location.current.value!==''&&
        mobile.current.value!==''&&
        skills.current.value!==''&&
        pincode.current.value!=='')
        registerWorker(name.current.value,
            age.current.value,
            location.current.value,
            mobile.current.value,
            skills.current.value,
            pincode.current.value)
    }
    return (
        <div className='container'>
            <h2 style={{
                marginTop: '70px',
                color: '#fff',
            }}>Register as a Worker</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name *</label>
                    <input ref={name} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Age *</label>
                    <input ref={age} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the age" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="validationCustom04" className="form-label">Location *</label>
                    <select ref={location} className="form-select" id="validationCustom04" required>
                        <option selected disabled defaultValue="">Choose...</option>
                        <option>Hyderabad</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Kolkata</option>
                        <option>Delhi</option>
                        <option>Jaipur</option>
                        <option>Kochin</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number *</label>
                    <input ref={mobile} type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Mobile number" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Skills *</label>
                    <input ref={skills} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Skills" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">PIN Code *</label>
                    <input ref={pincode} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the PIN Code" required />
                </div>

                <button className="btn btn-light my-3" onClick={handleRegister}>Register Worker</button>
        </div>
    )
}

export default RegisterWorker