import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link href="https://github.com/a12989x/">
                <a className="link" target="_blank">
                    <Image
                        src="/assets/github.svg"
                        alt="github"
                        height="19"
                        width="19"
                    />
                    GitHub
                </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ">
                <a className="link" target="_blank">
                    <Image
                        src="/assets/youtube.svg"
                        alt="github"
                        height="19"
                        width="19"
                    />
                    YouTube
                </a>
            </Link>
            <Link href="https://twitter.com/__codax__">
                <a className="link" target="_blank">
                    <Image
                        src="/assets/twitter.svg"
                        alt="github"
                        height="19"
                        width="19"
                    />
                    Twitter
                </a>
            </Link>
        </motion.footer>
    );
};

export default Footer;
