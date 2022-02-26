import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
    React.useEffect(() => {
    }, [location]);
    const context = useContext(AuthContext)
    const { user, handleSignIn } = context
    const handleClick = async () => {
        if (user === null) handleSignIn()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">All at Work</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/pendingservices' ? 'active' : ''}`} to="/pendingservices">Pending Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/updateprofile' ? 'active' : ''}`} to="/updateprofile">Update profie</Link>
                        </li>
                    </ul>

                    <Link to='/registerworker'>
                        <button type="button" className="btn btn-primary rounded-pill mx-2" style={{
                            display: user === null ? 'inline' : 'none'
                        }}>
                            Register as a Worker
                        </button>
                    </Link>

                    <button type="button" className="btn btn-primary rounded-pill" onClick={handleClick} style={{
                        display: user === null ? 'inline' : 'none'
                    }}>
                        Sign In as a User
                    </button>
                    <Link to="/userprofile" >
                        <img src={user !== null ? user.photoURL : 'https://louisville.edu/enrollmentmanagement/images/person-icon/image'} alt="dp" style={{
                            display: user !== null ? 'inline' : 'none',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%'
                        }} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar