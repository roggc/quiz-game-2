import React from 'react'
import * as styles from './index.module.css'
import {useDispatch} from 'react-redux'
import {userUnset} from '../../redux/actions/user'

const SignOut=(props)=>{
    const dispatch=useDispatch()

    const signOut=()=>{
        dispatch(userUnset())
    }

    return (
        <div className={styles.cont}>
            <a onClick={signOut}>Sign Out</a>
        </div>
    )
}

export default SignOut