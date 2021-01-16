import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { RouterContext } from '../context/RouterContext';

const Navigation = () => {
    const {
        router: { asPath },
    } = useContext(RouterContext);

    console.log(asPath);

    return (
        <motion.header
            className="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link href="/">
                <a className="navigation__logo">
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        height={'100%'}
                        width={'100%'}
                        layout="responsive"
                    />{' '}
                    Codax
                </a>
            </Link>
            <ul className="navigation__links">
                <li>
                    <Link href="/about">
                        <a
                            className={`${
                                asPath === '/about'
                                    ? 'navigation__link-active'
                                    : ''
                            } link`}
                        >
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a
                            className={`${
                                asPath === '/projects'
                                    ? 'navigation__link-active'
                                    : ''
                            } link`}
                        >
                            Projects
                        </a>
                    </Link>
                </li>
            </ul>
        </motion.header>
    );
};

export default Navigation;
