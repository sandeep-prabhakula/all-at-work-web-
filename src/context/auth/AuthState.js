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
    const workerRef = firebase.firestore().collection('workers')
    // Sign in or Register User
    const handleSignIn = async () => {
        const res = await signInWithPopup(auth, provider)
        const fbUser = res.user
        setUser(fbUser)
        ref.doc(fbUser.uid).get().then((doc) => {
            if (!doc.exists) {
                ref.doc(fbUser.uid).set({
                    "uid": fbUser.uid,
                    "userEmail": fbUser.email,
                    "userImage": fbUser.photoURL,
                    "userName": fbUser.displayName,
                    "usedServices": [],
                    "userMobile": '',
                    "userPINCode": '',
                    "userAddress": ''
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
    const completePendingServices = async (workerMobile) => {
        // task pending;
        const items = pendingServices;
        items.forEach((element) => {
            console.log(element)
        })

        //NEEDED Code Don't Delete
        // if(user!==null){
        //     ref.doc(user.uid).update({
        //         "usedServices":pendingServices
        //     })
        // }
    }

    // Complete profile
    const completeProfile = async (mobile, address, pincode) => {
        if (user !== null) {
            ref.doc(user.uid).update({
                "userPINCode": pincode,
                "userAddress": address,
                "userMobile": mobile,
            })
        }
    }

    // Delete the User
    const deleteTheUser = async () => {
        const currentUser = auth.currentUser
        await currentUser.delete()
        await ref.doc(currentUser.uid).delete()
        setUser(null)
    }

    const registerWorker = async (name, age, location, mobile, skills, pincode) => {
        workerRef.doc(mobile).get().then((doc) => {
            if (!doc.exists) {
                workerRef.doc(mobile).set({
                    "workerAge": age,
                    "workerLocation": location,
                    "workerMobile": mobile,
                    "workerName": name,
                    "workerPINCode": pincode,
                    "workerSkills": skills,
                    "worksDoneThisWeek": 0
                })
            }
        })
    }
    return (
        <AuthContext.Provider value={{ user, handleSignIn, handleSignOut, setUser, requestService, pendingServices, readPendingServices, completePendingServices, completeProfile, deleteTheUser, registerWorker }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState