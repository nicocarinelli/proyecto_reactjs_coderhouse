import { useState, createContext, useContext } from "react";
import './NotificationService.css'

const Notification = ({ severity, message }) => {

    if (message === '') return

    return (
        <div className=
            { severity !== 'success' 
                ? severity === 'update'
                    ? 'update' 
                    : 'redNotification'
                : 'greenNotification' }>
            {message}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [severity, setSeverity] = useState('success')
    const [message, setMessage] = useState('')
    
    const setNotification = (severity, message) => {
        setSeverity(severity)
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 2000);
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}