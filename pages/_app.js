import Layout from '../components/Layout';
import RouterContextProvider from '../context/RouterContext';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <RouterContextProvider>
                <Component {...pageProps} />
            </RouterContextProvider>
        </Layout>
    );
};

export default MyApp;
