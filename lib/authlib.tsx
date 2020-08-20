import { useState, useEffect, useContext, createContext } from "react";
import { Auth } from "aws-amplify";

const authContext = createContext(null);

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (email: string, password: string): Promise<any> => {
        return Auth.signIn(email, password).then(res => {
            setUser(res);
        });
    };

    const signup = (email: string, password: string): Promise<any> => {
        return Auth.signUp(email, password);
    };

    const confirm = (email: string, code: string): Promise<any> => {
        return Auth.confirmSignUp(email, code);
    }

    const signout = (): Promise<any> => {
        return Auth.signOut().then(() => {
            setUser(null);
        });
    };

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(res => {
            setUser(res);
            window.dispatchEvent(new CustomEvent("authSuccess", {detail: res}));
        }).catch(e => {
            console.log("not yet logged in");
            window.dispatchEvent(new Event("authFail"));
        });
    }, []);

    return {
        user,
        signin,
        signup,
        signout,
        confirm,
    };
}