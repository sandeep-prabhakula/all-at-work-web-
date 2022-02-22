import React from 'react'
import AuthContext from './AuthContext'
import { useState } from 'react'
import firebase from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
const AuthState = (props) => {
    const [user, setUser] = useState(null)
    const [pendingServices, setPendingServices] = useState([])
    const provider = new GoogleAuthProvider();
    const auth = firebase.auth()
    const ref = firebase.firestore().collection('users')

    // Sign in or Register User
    const handleSignIn = async () => {
        const res = await signInWithPopup(auth, provider)
        const fbUser = res.user
        setUser(fbUser)
        ref.doc(fbUser.uid).get.limit(1).then(doc => {
            if(!doc.exists){
                ref.doc(fbUser.uid).set({
                    "uid": fbUser.uid,
                    "userEmail": fbUser.email,
                    "userImage": fbUser.photoURL,
                    "userName": fbUser.displayName,
                })
            }
        })
    }

    //Signout the user
    const handleSignOut = async () => {
        setUser(null)
        await signOut(auth)
    }

    //Requesting for service
    const requestService = async () => {
        alert("Do you want request the service ?")
    }

    // Reading the used Services by the user
    const readPendingServices = async () => {
        if (user === null) {
            console.log('Required Login')
        } else {
            let items = []
            let curUser = await ref.doc(user.uid).get()
            items = curUser.get('usedServices')
            setPendingServices(items)
        }
    }

    // Complete the pending services
    const completePendingServices = async ()=>{
        alert(`Install "All at Work" app for more convient operations`)
    }

    return (
        <AuthContext.Provider value={{ user, handleSignIn, handleSignOut, setUser, requestService, pendingServices, readPendingServices,completePendingServices }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState