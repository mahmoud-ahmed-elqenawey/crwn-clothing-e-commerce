import { createContext, useEffect, useState } from 'react';
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

// user Context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// user Provider
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    // listening on change in currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
