import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

//Context
export const RouterContext = createContext();

const RouterContextProvider = ({ children }) => {
    const router = useRouter();
    const [prevPath, setPrevPath] = useState(router.asPath);

    useEffect(() => {
        if (router.pathname === '/' || router.pathname === '/posts/[page]')
            setPrevPath(router.asPath);
        else setPrevPath('/');

        console.log(router.query.page);
    }, [router.pathname]);

    return (
        <RouterContext.Provider value={{ prevPath, router }}>
            {children}
        </RouterContext.Provider>
    );
};

export default RouterContextProvider;
