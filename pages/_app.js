import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import RouterContextProvider from '../context/RouterContext';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <RouterContextProvider>
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </RouterContextProvider>
    );
};

export default MyApp;
