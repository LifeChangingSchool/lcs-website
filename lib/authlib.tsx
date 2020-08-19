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
    const [email, setEmail] = useState<string>(null);

    const signin = (email: string, password: string): Promise<any> => {
        return Auth.signIn(email, password).then(res => {
            setUser(res);
        });
    };

    const signup = (email: string, password: string): Promise<any> => {
        return Auth.signUp(email, password).then(() => {
            setEmail(email); // store email for confirmation function
        });
    };

    const confirm = (code: string): Promise<any> => {
        return Auth.confirmSignUp(email, code);
    }

    const signout = (): Promise<any> => {
        return Auth.signOut();
    };

    useEffect(() => {
        Auth.currentUserInfo().then(res => {
            setUser(res);
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