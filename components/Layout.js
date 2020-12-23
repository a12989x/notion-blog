import Head from './Head';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <Navigation />
            {children}
        </>
    );
};

export default Layout;
