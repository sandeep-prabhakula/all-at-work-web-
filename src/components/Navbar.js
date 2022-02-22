import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Navbar() {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);
    const context = useContext(AuthContext)
    const {user,handleSignIn,handleSignOut} = context
    const handleClick = async()=>{
        if(user===null)handleSignIn()
        else handleSignOut()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">All at Work</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/pendingservices'?'active':''}`} to="/pendingservices">PendingServices</Link>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary rounded-pill" onClick={handleClick} >{
                        user===null?'Sign In':'Logout'
                    }</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar