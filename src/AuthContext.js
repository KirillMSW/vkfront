import { createContext, useContext, useEffect, useState } from 'react';
import Login from "./Login";
import axios from "axios";
import {API_URL} from "./App";

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuth = async () => {
            try {
                const res = await fetch(API_URL+'/api/isloged',{
                    method: 'GET',
                    credentials: "include",}
                );
                if (res.status===401) {

                    setUser(null);
                } else {
                    setUser(res.data);
                }
                // (res.status===401)?console.log("no"):console.log("yes");

                // const res = await axios.get(
                //     'http://vkselection.kirillmsw.ru/api/isloged',
                //     { withCredentials: true },
                // );

                // console.log("yes")
            } catch(error) {
                setUser(null);
            }
        };

        isAuth();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;