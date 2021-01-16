import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className="aboutMe">
            <h1 className="aboutMe__title">Hi, I'm Alexis Guzman</h1>
            <p className="aboutMe__description">
                I'm a student frontend developer, I build some pages such as{' '}
                <a className="link" href="#" target="_blank">
                    Covid Tracker
                </a>{' '}
                and{' '}
                <a className="link" href="#" target="_blank">
                    Superchat
                </a>
                .
                <br />
                <Link href="/about/#contact">
                    <a className="aboutMe__contact">
                        <button>Contact Me!</button>
                    </a>
                </Link>
            </p>
            <Image
                src="/assets/avatar.jpg"
                alt="avatar"
                height={'100%'}
                width={'100%'}
                className="aboutMe__img"
                layout="responsive"
            />
        </section>
    );
};

export default AboutMe;
// @import './pages/about';
