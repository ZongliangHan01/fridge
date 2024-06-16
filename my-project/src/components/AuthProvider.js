import { createContext, useState, useContext } from 'react';

const authContext = createContext(
    {
        auth: false,
        setAuth: () => {},
        uid: '',
        setUid: () => {}
    }
);  

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(sessionStorage.getItem('auth') || false);
    const [uid, setUid] = useState(sessionStorage.getItem('uid') || '');
    console.log(auth);
    console.log(uid);
    return (
        <authContext.Provider value={{auth, setAuth, uid, setUid}}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}
export default AuthProvider;