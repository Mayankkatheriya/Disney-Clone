import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { selectUserName } from '../features/user/userSlice';

const ProtectedRoute = ({children}) => {
    const userName = useSelector(selectUserName)
    const location = useLocation();

    if(!userName) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;