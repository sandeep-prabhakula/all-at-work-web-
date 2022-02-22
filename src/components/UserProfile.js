import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

function UserProfile() {
    const context = useContext(AuthContext)
    const { user, handleSignOut,deleteTheUser } = context
    const handleClick = () => {
        handleSignOut()
    }
    const handleDeleteClick = ()=>{
        deleteTheUser()
    }
    return (
        <div className="container" style={{
            display: user !== null ? 'inline' : 'none',
        }}>
            <img src={user !== null ? user.photoURL : 'https://louisville.edu/enrollmentmanagement/images/person-icon/image'} alt="userDp" style={{
                marginTop: '70px',
                width: '200px',
                height: '200px',
                borderRadius: '50%'
            }} />
            <h3 style={{
                color: '#fff'
            }}>{user.displayName}</h3>
            <h4 style={{
                color: '#fff'
            }}>{user.email}</h4>
            <hr style={{
                backgroundColor: '#fff',
            }}></hr>
            <Link to='/' onClick={handleClick} style={{
                textDecoration: 'none',
                color: '#212529'
            }}>
                <h2>
                    Logout
                </h2>
            </Link>
            <Link to='/' onClick={handleDeleteClick} style={{
                textDecoration: 'none',
                color: '#ff0000'
            }}>
                <h2>
                    Delete Account
                </h2>
            </Link>
        </div>
    )
}

export default UserProfile