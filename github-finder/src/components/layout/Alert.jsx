import React ,{ useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)

    if(alert != null){
        switch(alert.type){
            case 'success':
                return <div className="text-green-600">{alert.message}</div>
            case 'info':
                return <div className="text-blue-600">{alert.message}</div>
            case 'warning':
                return <div className="text-yellow-600">{alert.message}</div>
            case 'error':
                return <div className="text-red-600">{alert.message}</div>
            default:
                return null;
        }
    }

    return null
    
}

export default Alert
