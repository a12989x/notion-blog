import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

export const RouterContext = createContext();

const RouterContextProvider = ({ children }) => {
    const router = useRouter();
    const [prevPath, setPrevPath] = useState('/');

    useEffect(() => {
        if (router.pathname === '/' || router.pathname === '/posts/[page]')
            setPrevPath(router.asPath);
    }, [router.asPath]);

    return (
        <RouterContext.Provider value={{ prevPath, router }}>
            {children}
        </RouterContext.Provider>
    );
};

export default RouterContextProvider;
